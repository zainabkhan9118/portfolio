"use client";

import { useEffect, useRef, useState } from "react";

const SystemDiagnostics = ({ primaryColor }: { primaryColor: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mouseVelocity, setMouseVelocity] = useState(0);
    const lastMousePos = useRef({ x: 0, y: 0 });
    const lastTime = useRef(Date.now());

    // Track mouse velocity
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            const dt = now - lastTime.current;
            if (dt > 100) { // Limit updates
                const dx = e.clientX - lastMousePos.current.x;
                const dy = e.clientY - lastMousePos.current.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                setMouseVelocity(Math.min(dist / dt * 10, 100)); // Normalize somewhat

                lastMousePos.current = { x: e.clientX, y: e.clientY };
                lastTime.current = now;
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Draw chart
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let data: number[] = new Array(50).fill(0);
        let animationId: number;

        const draw = () => {
            // Simulate data based on mouse activity + random noise
            const newValue = Math.max(5, mouseVelocity + Math.random() * 20);
            data.shift();
            data.push(newValue);

            // Clear
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Grid
            ctx.strokeStyle = primaryColor;
            ctx.globalAlpha = 0.2;
            ctx.beginPath();
            for (let i = 0; i < canvas.width; i += 10) { ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); }
            for (let i = 0; i < canvas.height; i += 10) { ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); }
            ctx.stroke();

            // Draw Line Chart
            ctx.globalAlpha = 1;
            ctx.lineWidth = 2;
            ctx.beginPath();
            data.forEach((val, i) => {
                const x = (i / (data.length - 1)) * canvas.width;
                const y = canvas.height - (val / 100) * canvas.height;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.stroke();

            // Fill
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.globalAlpha = 0.2;
            ctx.fill();

            // Text Overlay
            ctx.fillStyle = primaryColor;
            ctx.globalAlpha = 1;
            ctx.font = "10px monospace";
            ctx.fillText(`CPU: ${(data[data.length - 1]).toFixed(1)}%`, 4, 12);
            ctx.fillText(`MEM: ${(40 + Math.random() * 5).toFixed(1)}GB`, 4, 24);

            animationId = requestAnimationFrame(draw);
        };

        draw();
        return () => cancelAnimationFrame(animationId);
    }, [mouseVelocity, primaryColor]);

    return (
        <div className="hidden lg:block fixed bottom-4 right-4 w-32 h-20 border border-[var(--primary)] bg-black/80 pointer-events-none z-50">
            <canvas ref={canvasRef} width={128} height={80} />
        </div>
    );
};

export default SystemDiagnostics;
