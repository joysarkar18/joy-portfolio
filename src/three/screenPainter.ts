// Paints a fake-but-believable mobile UI into a 2D canvas that is used as the
// phone's screen texture. Three "screens" cycle with a crossfade: a CabsWale
// trip request, Raahi AI listening, and a Border Tax receipt.

export const SCREEN_W = 512;
export const SCREEN_H = 1024;
const CORNER = 72;
const SCREEN_SECONDS = 4.2;
const FADE = 0.6;

type Ctx = CanvasRenderingContext2D;

function roundRect(ctx: Ctx, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function fillRR(ctx: Ctx, x: number, y: number, w: number, h: number, r: number, fill: string) {
  roundRect(ctx, x, y, w, h, r);
  ctx.fillStyle = fill;
  ctx.fill();
}

function text(
  ctx: Ctx,
  s: string,
  x: number,
  y: number,
  size: number,
  color: string,
  weight = '500',
  align: CanvasTextAlign = 'left',
  family = 'Inter, system-ui, sans-serif',
) {
  ctx.font = `${weight} ${size}px ${family}`;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = 'middle';
  ctx.fillText(s, x, y);
}

function statusBar(ctx: Ctx) {
  text(ctx, '9:41', 48, 44, 26, '#e8ecf4', '600');
  // signal + battery
  for (let i = 0; i < 4; i++) fillRR(ctx, 372 + i * 12, 50 - i * 4, 7, 10 + i * 4, 2, '#e8ecf4');
  fillRR(ctx, 432, 34, 40, 20, 5, '#1f2937');
  fillRR(ctx, 435, 37, 30, 14, 3, '#3ddc84');
  fillRR(ctx, 473, 40, 4, 8, 1, '#e8ecf4');
}

function header(ctx: Ctx, title: string, dot: string) {
  ctx.beginPath();
  ctx.arc(60, 112, 18, 0, Math.PI * 2);
  ctx.fillStyle = dot;
  ctx.fill();
  text(ctx, title, 92, 112, 30, '#e8ecf4', '700', 'left', 'Sora, Inter, sans-serif');
}

function bottomNav(ctx: Ctx, active: number) {
  fillRR(ctx, 0, SCREEN_H - 110, SCREEN_W, 110, 0, '#0b0f17');
  const labels = ['Home', 'Trips', 'Earn', 'Me'];
  labels.forEach((l, i) => {
    const x = 64 + i * 128;
    fillRR(ctx, x - 18, SCREEN_H - 86, 36, 36, 10, i === active ? '#4cc9ff' : '#1c2434');
    text(ctx, l, x, SCREEN_H - 30, 18, i === active ? '#4cc9ff' : '#8b95a8', '500', 'center');
  });
}

/** Screen 1 — CabsWale Partner: incoming trip request. */
function paintTrip(ctx: Ctx, t: number) {
  header(ctx, 'CabsWale Partner', '#4cc9ff');

  // "map" block with a route curve
  fillRR(ctx, 32, 160, 448, 300, 28, '#0f172a');
  ctx.save();
  roundRect(ctx, 32, 160, 448, 300, 28);
  ctx.clip();
  ctx.strokeStyle = 'rgba(76,201,255,0.12)';
  ctx.lineWidth = 1;
  for (let x = 32; x < 480; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 160);
    ctx.lineTo(x, 460);
    ctx.stroke();
  }
  for (let y = 160; y < 460; y += 40) {
    ctx.beginPath();
    ctx.moveTo(32, y);
    ctx.lineTo(480, y);
    ctx.stroke();
  }
  ctx.strokeStyle = '#4cc9ff';
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(90, 400);
  ctx.bezierCurveTo(180, 300, 260, 420, 330, 300);
  ctx.bezierCurveTo(380, 230, 400, 240, 420, 210);
  ctx.stroke();
  // moving car dot along the curve (approximate with t)
  const p = (Math.sin(t * 0.9) + 1) / 2;
  const cx = 90 + p * 330;
  const cy = 400 - Math.sin(p * Math.PI) * 150 - p * 40;
  ctx.beginPath();
  ctx.arc(cx, cy, 11, 0, Math.PI * 2);
  ctx.fillStyle = '#3ddc84';
  ctx.fill();
  ctx.restore();

  // request card
  fillRR(ctx, 32, 492, 448, 300, 28, '#111827');
  text(ctx, 'NEW TRIP REQUEST', 60, 530, 18, '#8b95a8', '600');
  text(ctx, 'Gurugram → Jaipur', 60, 580, 32, '#e8ecf4', '700', 'left', 'Sora, Inter, sans-serif');
  text(ctx, 'Tomorrow · 6 AM · SUV', 60, 624, 20, '#8b95a8');
  text(ctx, '₹ 4,800', 452, 624, 28, '#3ddc84', '700', 'right', 'Sora, Inter, sans-serif');
  fillRR(ctx, 60, 676, 196, 70, 18, '#3ddc84');
  text(ctx, 'Accept', 158, 711, 24, '#07090f', '700', 'center');
  fillRR(ctx, 272, 676, 180, 70, 18, '#1c2434');
  text(ctx, 'Decline', 362, 711, 24, '#e8ecf4', '600', 'center');

  // stat strip
  fillRR(ctx, 32, 820, 214, 80, 20, '#0f172a');
  text(ctx, "Today's earnings", 52, 846, 16, '#8b95a8');
  text(ctx, '₹ 6,340', 52, 876, 24, '#e8ecf4', '700');
  fillRR(ctx, 266, 820, 214, 80, 20, '#0f172a');
  text(ctx, 'Rating', 286, 846, 16, '#8b95a8');
  text(ctx, '4.9 ★', 286, 876, 24, '#ffb547', '700');

  bottomNav(ctx, 0);
}

/** Screen 2 — Raahi AI listening, with a live waveform. */
function paintRaahi(ctx: Ctx, t: number) {
  header(ctx, 'Raahi AI', '#b388ff');

  // glowing orb
  const cx = SCREEN_W / 2;
  const cy = 330;
  const grd = ctx.createRadialGradient(cx, cy, 10, cx, cy, 150);
  grd.addColorStop(0, 'rgba(179,136,255,0.9)');
  grd.addColorStop(0.5, 'rgba(76,201,255,0.35)');
  grd.addColorStop(1, 'rgba(76,201,255,0)');
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(cx, cy, 150, 0, Math.PI * 2);
  ctx.fill();
  const pulse = 1 + Math.sin(t * 3) * 0.06;
  ctx.beginPath();
  ctx.arc(cx, cy, 64 * pulse, 0, Math.PI * 2);
  ctx.fillStyle = '#e8ecf4';
  ctx.fill();

  // waveform
  const bars = 24;
  for (let i = 0; i < bars; i++) {
    const h = 18 + Math.abs(Math.sin(t * 4 + i * 0.6)) * 70 * Math.sin((i / bars) * Math.PI);
    const x = 68 + i * 16;
    fillRR(ctx, x, 520 - h / 2, 8, h, 4, i % 3 === 0 ? '#b388ff' : '#4cc9ff');
  }
  text(ctx, 'Listening…', cx, 600, 22, '#8b95a8', '500', 'center');

  // transcript + reply bubbles
  fillRR(ctx, 120, 650, 360, 78, 22, '#1c2434');
  text(ctx, '"Nearest trip to Jaipur?"', 300, 689, 20, '#e8ecf4', '500', 'center');
  fillRR(ctx, 32, 748, 400, 120, 22, '#2a1f4f');
  text(ctx, 'Rajesh is 2.3 km away,', 52, 784, 20, '#e8ecf4', '500');
  text(ctx, 'SUV, leaving at 6 AM.', 52, 814, 20, '#e8ecf4', '500');
  text(ctx, 'Want me to call him?', 52, 844, 20, '#b388ff', '600');

  bottomNav(ctx, 2);
}

/** Screen 3 — Border Tax Online receipt. */
function paintTax(ctx: Ctx, t: number) {
  header(ctx, 'Border Tax Online', '#ffb547');

  fillRR(ctx, 32, 160, 448, 360, 28, '#111827');
  text(ctx, 'RECEIPT', 60, 198, 18, '#8b95a8', '600');
  text(ctx, 'Rajasthan border tax', 60, 246, 30, '#e8ecf4', '700', 'left', 'Sora, Inter, sans-serif');
  text(ctx, 'HR 26 DK 4521 · Innova Crysta · 7 seats', 60, 288, 19, '#8b95a8');
  text(ctx, '₹ 1,200', 60, 350, 44, '#ffb547', '700', 'left', 'Sora, Inter, sans-serif');
  fillRR(ctx, 320, 326, 132, 48, 14, 'rgba(61,220,132,0.16)');
  text(ctx, 'Paid ✓', 386, 350, 22, '#3ddc84', '700', 'center');
  text(ctx, 'Valid 7 days · Digital pass issued', 60, 420, 19, '#8b95a8');
  // QR-ish block
  const seed = Math.floor(t / 4);
  for (let r = 0; r < 6; r++)
    for (let c = 0; c < 6; c++) {
      if ((r * 7 + c * 3 + seed) % 3 !== 0) fillRR(ctx, 340 + c * 18, 400 + r * 18, 14, 14, 3, '#e8ecf4');
    }

  // steps
  const steps = ['Vehicle', 'State', 'Pay', 'Pass'];
  steps.forEach((s, i) => {
    const x = 70 + i * 124;
    ctx.beginPath();
    ctx.arc(x, 590, 16, 0, Math.PI * 2);
    ctx.fillStyle = '#3ddc84';
    ctx.fill();
    text(ctx, '✓', x, 591, 18, '#07090f', '700', 'center');
    if (i < steps.length - 1) fillRR(ctx, x + 20, 588, 84, 4, 2, '#3ddc84');
    text(ctx, s, x, 630, 18, '#8b95a8', '500', 'center');
  });

  fillRR(ctx, 32, 680, 448, 90, 22, '#0f172a');
  text(ctx, 'Available in 11 Indian languages', 256, 725, 20, '#e8ecf4', '500', 'center');
  fillRR(ctx, 32, 790, 448, 70, 18, '#4cc9ff');
  text(ctx, 'Share pass', 256, 825, 24, '#07090f', '700', 'center');

  bottomNav(ctx, 1);
}

const painters = [paintTrip, paintRaahi, paintTax];

/** Draws the full screen for time `t` (seconds) into `ctx`. */
export function drawScreen(ctx: Ctx, t: number) {
  ctx.clearRect(0, 0, SCREEN_W, SCREEN_H);
  ctx.save();
  roundRect(ctx, 0, 0, SCREEN_W, SCREEN_H, CORNER);
  ctx.clip();

  const bg = ctx.createLinearGradient(0, 0, 0, SCREEN_H);
  bg.addColorStop(0, '#0b1220');
  bg.addColorStop(1, '#070b14');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, SCREEN_W, SCREEN_H);

  const cycle = t / SCREEN_SECONDS;
  const index = Math.floor(cycle) % painters.length;
  const frac = cycle - Math.floor(cycle);
  const fadeIn = Math.min(1, frac * (SCREEN_SECONDS / FADE));

  ctx.globalAlpha = fadeIn;
  painters[index](ctx, t);
  ctx.globalAlpha = 1;

  statusBar(ctx);

  // home indicator
  fillRR(ctx, SCREEN_W / 2 - 70, SCREEN_H - 16, 140, 6, 3, 'rgba(232,236,244,0.7)');
  ctx.restore();
}

/** Small rounded label used for the floating tech chips around the phone. */
export function makeLabelCanvas(label: string, color: string): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = 320;
  c.height = 112;
  const ctx = c.getContext('2d')!;
  ctx.clearRect(0, 0, c.width, c.height);
  roundRect(ctx, 6, 6, c.width - 12, c.height - 12, 44);
  ctx.fillStyle = 'rgba(13,17,25,0.92)';
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(52, 56, 12, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  text(ctx, label, 82, 57, 38, '#e8ecf4', '600', 'left', 'Sora, Inter, sans-serif');
  return c;
}
