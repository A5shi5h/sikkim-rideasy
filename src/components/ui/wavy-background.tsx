"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  
  // ✅ Memoize canvas references and dimensions
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const wRef = useRef<number>(0);
  const hRef = useRef<number>(0);
  const ntRef = useRef<number>(0);

  // ✅ Memoize wave colors to avoid re-renders
  const waveColors = useMemo(
    () => colors ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
    [colors]
  );

  // ✅ Function to get the wave speed
  const getSpeed = useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  }, [speed]);

  // ✅ Draw wave with stable dependencies
  const drawWave = useCallback(() => {
    if (!ctxRef.current) return;

    ntRef.current += getSpeed();

    for (let i = 0; i < 5; i++) {
      ctxRef.current.beginPath();
      ctxRef.current.lineWidth = waveWidth || 50;
      ctxRef.current.strokeStyle = waveColors[i % waveColors.length];

      for (let x = 0; x < wRef.current; x += 5) {
        const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
        ctxRef.current.lineTo(x, y + hRef.current * 0.5);
      }

      ctxRef.current.stroke();
      ctxRef.current.closePath();
    }
  }, [getSpeed, noise, waveColors, waveWidth]);  // ✅ Dependencies are stable

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctxRef.current = ctx; 

    wRef.current = ctx.canvas.width = window.innerWidth;
    hRef.current = ctx.canvas.height = window.innerHeight;
    
    ctxRef.current.filter = `blur(${blur}px)`;
    ntRef.current = 0;

    const handleResize = () => {
      if (ctxRef.current) {
        wRef.current = ctxRef.current.canvas.width = window.innerWidth;
        hRef.current = ctxRef.current.canvas.height = window.innerHeight;
        ctxRef.current.filter = `blur(${blur}px)`;
      }
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      if (ctxRef.current) {
        ctxRef.current.fillStyle = backgroundFill || "black";
        ctxRef.current.globalAlpha = waveOpacity || 0.5;
        ctxRef.current.fillRect(0, 0, wRef.current, hRef.current);
        drawWave();
      }
      animationIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [blur, backgroundFill, waveOpacity, drawWave]);  // ✅ Dependencies are stable

  useEffect(() => {
    const cleanup = init();
    return cleanup;
  }, [init]);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
