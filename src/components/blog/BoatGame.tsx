import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '@nanostores/react';
import { bezierCurves } from '@/stores/bezierStore.ts';
import {
  cubicBezierYWithLUT,
  generateBezierLookupTable,
} from '@/components/blog/bezierFunctions.ts';

const BoatGame: React.FC = () => {
  const [maxAcceleration, setMaxAcceleration] = useState(0.2);
  const [maxTurn, setMaxTurn] = useState(0.001);
  const [maxSpeed, setMaxSpeed] = useState(100);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const curves = useStore(bezierCurves);

  useEffect(() => {
    const style = window.getComputedStyle(document.body);
    const colourAccent = style.getPropertyValue('--accent');
    const colourForeground = style.getPropertyValue('--foreground');

    const accelerationCurve = curves['acceleration'];
    const accelerationLUT = accelerationCurve
      ? generateBezierLookupTable(
          accelerationCurve.start,
          accelerationCurve.controlPoints[0],
          accelerationCurve.controlPoints[1],
          accelerationCurve.end
        )
      : [];
    const turningCurve = curves['turning'];
    const turningLUT = turningCurve
      ? generateBezierLookupTable(
          turningCurve.start,
          turningCurve.controlPoints[0],
          turningCurve.controlPoints[1],
          turningCurve.end
        )
      : [];

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    const resizeCanvas = () => {
      canvas.width = Math.min(window.innerWidth - 32, 736);
      canvas.height = 500;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Boat {
      x: number;
      y: number;
      angle: number;
      speed: number;
    }

    const boat: Boat = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      angle: 0,
      speed: 0,
    };
    const lastState = { ...boat };

    const keys = {
      w: false,
      s: false,
      a: false,
      d: false,
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key in keys) keys[e.key as keyof typeof keys] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key in keys) keys[e.key as keyof typeof keys] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const update = () => {
      lastState.speed = boat.speed;
      lastState.angle = boat.angle;

      if (keys.w)
        boat.speed +=
          cubicBezierYWithLUT(boat.speed, accelerationLUT) * maxAcceleration;
      if (keys.s) boat.speed -= 0.1;

      // Apply speed cap
      boat.speed = Math.min(boat.speed, maxSpeed);

      if (keys.a)
        boat.angle -=
          cubicBezierYWithLUT(boat.speed, turningLUT) *
          maxTurn *
          (keys.w ? 1 : 1.4);
      if (keys.d)
        boat.angle +=
          cubicBezierYWithLUT(boat.speed, turningLUT) *
          maxTurn *
          (keys.w ? 1 : 1.4);

      if (!(keys.w || keys.s)) boat.speed *= 0.98;

      if (keys.a || keys.d) {
        boat.speed *=
          0.99 - 0.0005 * cubicBezierYWithLUT(boat.speed, turningLUT);
      }

      boat.x += Math.cos(boat.angle) * boat.speed;
      boat.y += Math.sin(boat.angle) * boat.speed;

      if (boat.x < 0 || boat.x > canvas.width) {
        boat.angle = Math.PI - boat.angle;
        boat.x = Math.max(0, Math.min(canvas.width, boat.x));
      }

      if (boat.y < 0 || boat.y > canvas.height) {
        boat.angle = -boat.angle;
        boat.y = Math.max(0, Math.min(canvas.height, boat.y));
      }
    };

    const drawBoat = () => {
      ctx.save();
      ctx.translate(boat.x, boat.y);
      ctx.rotate(boat.angle);

      ctx.beginPath();
      ctx.moveTo(50, 0);
      ctx.lineTo(10, 20);
      ctx.lineTo(-20, 18);
      ctx.lineTo(-20, -18);
      ctx.lineTo(10, -20);
      ctx.closePath();

      ctx.fillStyle = colourAccent;
      ctx.fill();
      ctx.restore();
    };

    const drawHUD = () => {
      ctx.save();
      ctx.font = '14px JetBrains Mono';
      ctx.fillStyle = colourForeground;
      ctx.textAlign = 'right';
      ctx.fillText(`Speed: ${boat.speed.toFixed(2)}`, canvas.width - 10, 20);
      ctx.fillText(
        `Rate of Acceleration: ${cubicBezierYWithLUT(boat.speed, accelerationLUT).toFixed(1)}%`,
        canvas.width - 10,
        40
      );
      ctx.fillText(
        `Rate of Turn: ${cubicBezierYWithLUT(boat.speed, turningLUT).toFixed(1)}%`,
        canvas.width - 10,
        60
      );
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBoat();
      drawHUD();
    };

    const gameLoop = () => {
      update();
      render();
      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [curves, maxAcceleration, maxTurn, maxSpeed]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="w-full max-w-3xl">
        <canvas
          ref={canvasRef}
          className="border border-accent w-full h-[500px]"
        />
      </div>

      <div className="w-full max-w-3xl space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="acceleration"
            className="mb-1 text-sm text-foreground"
          >
            Max Acceleration: {maxAcceleration.toFixed(2)}
          </label>
          <input
            id="acceleration"
            type="range"
            min={0.05}
            max={1}
            step={0.01}
            value={maxAcceleration}
            onChange={(e) => setMaxAcceleration(parseFloat(e.target.value))}
            className="w-full accent-accent"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="turn" className="mb-1 text-sm text-foreground">
            Max Turn Rate: {maxTurn.toFixed(4)}
          </label>
          <input
            id="turn"
            type="range"
            min={0.0001}
            max={0.01}
            step={0.0001}
            value={maxTurn}
            onChange={(e) => setMaxTurn(parseFloat(e.target.value))}
            className="w-full accent-accent"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="speed" className="mb-1 text-sm text-foreground">
            Max Speed: {maxSpeed.toFixed(1)}
          </label>
          <input
            id="speed"
            type="range"
            min={1}
            max={120}
            step={0.1}
            value={maxSpeed}
            onChange={(e) => setMaxSpeed(parseFloat(e.target.value))}
            className="w-full accent-accent"
          />
        </div>
      </div>
    </div>
  );
};

export default BoatGame;
