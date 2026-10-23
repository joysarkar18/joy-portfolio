import { Suspense, useMemo, useRef, type ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Float, RoundedBox, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { drawScreen, makeLabelCanvas, SCREEN_H, SCREEN_W } from './screenPainter';

const BODY_W = 2.3;
const BODY_H = 4.7;
const BODY_D = 0.24;

/** The phone: rounded body, animated canvas screen, island and side keys. */
function Phone() {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = SCREEN_W;
    canvas.height = SCREEN_H;
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return tex;
  }, []);
  const lastPaint = useRef(0);

  useFrame(({ clock }) => {
    // Repaint at ~30fps; the texture upload is the expensive part.
    const t = clock.elapsedTime;
    if (t - lastPaint.current < 1 / 30) return;
    lastPaint.current = t;
    const canvas = texture.image as HTMLCanvasElement;
    drawScreen(canvas.getContext('2d')!, t);
    texture.needsUpdate = true;
  });

  return (
    <group>
      {/* body */}
      <RoundedBox args={[BODY_W, BODY_H, BODY_D]} radius={0.22} smoothness={8}>
        <meshPhysicalMaterial
          color="#0d1320"
          metalness={0.75}
          roughness={0.28}
          clearcoat={1}
          clearcoatRoughness={0.15}
        />
      </RoundedBox>
      {/* screen */}
      <mesh position={[0, 0, BODY_D / 2 + 0.002]}>
        <planeGeometry args={[BODY_W - 0.2, BODY_H - 0.2]} />
        <meshBasicMaterial map={texture} transparent toneMapped={false} />
      </mesh>
      {/* dynamic island */}
      <RoundedBox args={[0.62, 0.17, 0.02]} radius={0.085} position={[0, BODY_H / 2 - 0.3, BODY_D / 2 + 0.006]}>
        <meshStandardMaterial color="#000000" roughness={0.6} />
      </RoundedBox>
      {/* side keys */}
      <RoundedBox args={[0.03, 0.42, 0.1]} radius={0.012} position={[-BODY_W / 2 - 0.012, 0.9, 0]}>
        <meshStandardMaterial color="#2a3447" metalness={0.8} roughness={0.3} />
      </RoundedBox>
      <RoundedBox args={[0.03, 0.42, 0.1]} radius={0.012} position={[-BODY_W / 2 - 0.012, 0.35, 0]}>
        <meshStandardMaterial color="#2a3447" metalness={0.8} roughness={0.3} />
      </RoundedBox>
      <RoundedBox args={[0.03, 0.62, 0.1]} radius={0.012} position={[BODY_W / 2 + 0.012, 0.7, 0]}>
        <meshStandardMaterial color="#2a3447" metalness={0.8} roughness={0.3} />
      </RoundedBox>
      {/* camera bump on the back */}
      <RoundedBox args={[0.8, 0.8, 0.08]} radius={0.2} position={[-0.55, 1.75, -BODY_D / 2 - 0.02]}>
        <meshStandardMaterial color="#141b2a" metalness={0.7} roughness={0.35} />
      </RoundedBox>
      {[
        [-0.72, 1.92],
        [-0.38, 1.92],
        [-0.72, 1.58],
      ].map(([x, y], i) => (
        <mesh key={i} position={[x, y, -BODY_D / 2 - 0.07]} rotation={[0, Math.PI, 0]}>
          <circleGeometry args={[0.11, 24]} />
          <meshStandardMaterial color="#0a0f1a" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

type ChipProps = {
  label: string;
  color: string;
  radius: number;
  y: number;
  speed: number;
  phase: number;
};

/** A tech-tag label that orbits the phone and always faces the camera. */
function Chip({ label, color, radius, y, speed, phase }: ChipProps) {
  const group = useRef<THREE.Group>(null);
  const texture = useMemo(() => {
    const tex = new THREE.CanvasTexture(makeLabelCanvas(label, color));
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [label, color]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * speed + phase;
    const g = group.current;
    if (!g) return;
    g.position.set(Math.cos(t) * radius, y + Math.sin(t * 1.7) * 0.12, Math.sin(t) * radius);
  });

  return (
    <group ref={group}>
      <Billboard>
        <mesh>
          <planeGeometry args={[1.25, 0.44]} />
          <meshBasicMaterial map={texture} transparent toneMapped={false} depthWrite={false} />
        </mesh>
      </Billboard>
    </group>
  );
}

const chips: ChipProps[] = [
  { label: 'Flutter', color: '#4cc9ff', radius: 2.0, y: 1.5, speed: 0.35, phase: 0 },
  { label: 'Dart', color: '#3ddc84', radius: 1.85, y: -0.4, speed: 0.3, phase: 1.6 },
  { label: 'Kotlin', color: '#b388ff', radius: 2.1, y: 0.6, speed: 0.28, phase: 3.1 },
  { label: 'Swift', color: '#ffb547', radius: 1.95, y: -1.6, speed: 0.33, phase: 4.4 },
  { label: 'Firebase', color: '#ffb547', radius: 2.15, y: 2.1, speed: 0.26, phase: 2.3 },
  { label: 'LiveKit', color: '#4cc9ff', radius: 1.9, y: -2.2, speed: 0.31, phase: 5.5 },
];

/** Gently turns the whole scene toward the pointer. */
function Rig({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const targetY = state.pointer.x * 0.45;
    const targetX = -state.pointer.y * 0.25;
    const k = Math.min(1, dt * 3.5);
    g.rotation.y += (targetY - g.rotation.y) * k;
    g.rotation.x += (targetX - g.rotation.x) * k;
  });
  return <group ref={group}>{children}</group>;
}

function supportsWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

/** Static stand-in when WebGL is unavailable. */
function Fallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-[420px] w-[210px] rounded-[2.4rem] border border-line bg-gradient-to-b from-surface-2 to-base p-3 shadow-2xl">
        <div className="h-full w-full rounded-[1.8rem] bg-gradient-to-br from-sky/30 via-violet/20 to-lime/20" />
      </div>
    </div>
  );
}

export default function PhoneScene() {
  if (!supportsWebGL()) return <Fallback />;

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 9.2], fov: 32 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 6]} intensity={1.6} />
      <directionalLight position={[-5, -2, 4]} intensity={0.5} color="#4cc9ff" />
      <pointLight position={[0, -4, 3]} intensity={0.8} color="#b388ff" />
      <Suspense fallback={null}>
        <Rig>
          <Float speed={1.3} rotationIntensity={0.18} floatIntensity={0.7}>
            <group rotation={[0.08, -0.35, 0.02]}>
              <Phone />
            </group>
          </Float>
          {chips.map((c) => (
            <Chip key={c.label} {...c} />
          ))}
        </Rig>
        <Sparkles count={110} scale={[9, 7, 5]} size={1.8} speed={0.25} color="#4cc9ff" opacity={0.45} />
      </Suspense>
    </Canvas>
  );
}
