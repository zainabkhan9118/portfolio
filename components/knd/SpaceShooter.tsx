"use client";

import { useEffect, useRef, useState } from 'react';
import { XCircle, Trophy, Target, AlertTriangle } from 'lucide-react';

interface SpaceShooterProps {
    onClose: () => void;
    primaryColor: string;
}

interface GameObject {
    x: number;
    y: number;
    width: number;
    height: number;
    speed?: number;
    hp?: number;
    color?: string;
}

export default function SpaceShooter({ onClose, primaryColor }: SpaceShooterProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gameState, setGameState] = useState<"START" | "PLAYING" | "GAME_OVER">("START");
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [finalScore, setFinalScore] = useState(0);

    // Game Ref Config to avoid stale closures in loop
    const gameRef = useRef({
        player: { x: 0, y: 0, width: 40, height: 40, speed: 5 },
        bullets: [] as GameObject[],
        enemies: [] as GameObject[],
        particles: [] as (GameObject & { life: number, vx: number, vy: number })[],
        lastShot: 0,
        enemySpawnTimer: 0,
        keys: {} as { [key: string]: boolean },
        stars: [] as { x: number, y: number, size: number, speed: number }[],
        animationId: 0,
        score: 0,
        level: 1,
        isGameOver: false,
        time: 0
    });

    // Initialize Game (Canvas size & Stars)
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resize = () => {
            canvas.width = canvas.parentElement?.clientWidth || 800;
            canvas.height = canvas.parentElement?.clientHeight || 600;
        };
        resize();
        window.addEventListener('resize', resize);

        // Init Stars for background effect
        for (let i = 0; i < 50; i++) {
            gameRef.current.stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2,
                speed: 0.5 + Math.random() * 2
            });
        }

        // Init Player
        gameRef.current.player.x = canvas.width / 2 - 20;
        gameRef.current.player.y = canvas.height - 60;

        return () => window.removeEventListener('resize', resize);
    }, []);

    // Helper: Draw functions
    const drawPlayer = (ctx: CanvasRenderingContext2D, p: GameObject) => {
        ctx.fillStyle = primaryColor;
        // Simple Ship Shape
        ctx.beginPath();
        ctx.moveTo(p.x + p.width / 2, p.y);
        ctx.lineTo(p.x + p.width, p.y + p.height);
        ctx.lineTo(p.x + p.width / 2, p.y + p.height - 10);
        ctx.lineTo(p.x, p.y + p.height);
        ctx.closePath();
        ctx.fill();

        // Engine Flame
        if (Math.random() > 0.5) {
            ctx.fillStyle = '#ffaa00';
            ctx.beginPath();
            ctx.moveTo(p.x + p.width / 2 - 5, p.y + p.height - 5);
            ctx.lineTo(p.x + p.width / 2 + 5, p.y + p.height - 5);
            ctx.lineTo(p.x + p.width / 2, p.y + p.height + 15);
            ctx.fill();
        }
    };

    const drawEnemy = (ctx: CanvasRenderingContext2D, e: GameObject) => {
        ctx.fillStyle = '#ff3333';
        ctx.fillRect(e.x, e.y, e.width, e.height);
        // Eyes
        ctx.fillStyle = '#000';
        ctx.fillRect(e.x + 5, e.y + 10, 5, 5);
        ctx.fillRect(e.x + e.width - 10, e.y + 10, 5, 5);
    };

    // Game Loop Effect
    useEffect(() => {
        if (gameState !== "PLAYING") return;

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        // Ensure gameRef is ready
        gameRef.current.isGameOver = false;
        gameRef.current.time = Date.now();

        const loop = () => {
            if (gameRef.current.isGameOver) return;

            // Delta time calculation for smoother movement
            const now = Date.now();
            gameRef.current.time = now;

            // Clear Screen
            // Use 30% fade for trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const state = gameRef.current;

            // Update & Draw Stars
            ctx.fillStyle = '#ffffff';
            state.stars.forEach((star) => {
                star.y += star.speed;
                if (star.y > canvas.height) star.y = 0;
                ctx.globalAlpha = Math.random();
                ctx.fillRect(star.x, star.y, star.size, star.size);
            });
            ctx.globalAlpha = 1;

            // ... Game Logic ...
            // Player Movement
            if (state.keys['ArrowLeft'] && state.player.x > 0) state.player.x -= state.player.speed;
            if (state.keys['ArrowRight'] && state.player.x < canvas.width - state.player.width) state.player.x += state.player.speed;

            // Shooting
            if (state.keys[' '] && Date.now() - state.lastShot > 250) {
                state.bullets.push({
                    x: state.player.x + state.player.width / 2 - 2,
                    y: state.player.y,
                    width: 4,
                    height: 10
                });
                state.lastShot = Date.now();
            }

            // Spawn Enemies
            state.enemySpawnTimer++;
            if (state.enemySpawnTimer > Math.max(20, 60 - state.level * 5)) {
                state.enemies.push({
                    x: Math.random() * (canvas.width - 30),
                    y: -30,
                    width: 30,
                    height: 30,
                    speed: 2 + state.level * 0.5
                });
                state.enemySpawnTimer = 0;
            }

            // Update Bullets
            state.bullets.forEach((b: GameObject, i: number) => {
                b.y -= 10;
                ctx.fillStyle = primaryColor;
                ctx.fillRect(b.x, b.y, b.width, b.height);
                if (b.y < 0) state.bullets.splice(i, 1);
            });

            // Update Enemies
            state.enemies.forEach((e: GameObject, i: number) => {
                e.y += e.speed || 2;
                drawEnemy(ctx, e);

                // Collision Player-Enemy
                if (
                    e.x < state.player.x + state.player.width &&
                    e.x + e.width > state.player.x &&
                    e.y < state.player.y + state.player.height &&
                    e.y + e.height > state.player.y
                ) {
                    state.isGameOver = true;
                    setFinalScore(state.score);
                    setGameState("GAME_OVER");
                }

                // Collision Bullet-Enemy
                state.bullets.forEach((b: GameObject, bi: number) => {
                    if (
                        b.x < e.x + e.width &&
                        b.x + b.width > e.x &&
                        b.y < e.y + e.height &&
                        b.y + b.height > e.y
                    ) {
                        state.enemies.splice(i, 1);
                        state.bullets.splice(bi, 1);
                        state.score += 100;
                        setScore(state.score);

                        // Particles
                        for (let p = 0; p < 5; p++) {
                            state.particles.push({
                                x: e.x + e.width / 2,
                                y: e.y + e.height / 2,
                                width: 4,
                                height: 4,
                                life: 1,
                                vx: (Math.random() - 0.5) * 10,
                                vy: (Math.random() - 0.5) * 10
                            });
                        }

                        // Level Up Logic
                        if (state.score > 0 && state.score % 1000 === 0) {
                            state.level++;
                            setLevel(state.level);
                        }
                    }
                });

                if (e.y > canvas.height) {
                    state.enemies.splice(i, 1);
                }
            });

            // Update Particles
            state.particles.forEach((p: GameObject & { life: number, vx: number, vy: number }, i: number) => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.05;
                ctx.fillStyle = `rgba(255, 100, 0, ${p.life})`;
                ctx.fillRect(p.x, p.y, p.width, p.height);
                if (p.life <= 0) state.particles.splice(i, 1);
            });

            drawPlayer(ctx, state.player);
            state.animationId = requestAnimationFrame(loop);
        };

        gameRef.current.animationId = requestAnimationFrame(loop);

        return () => cancelAnimationFrame(gameRef.current.animationId);
    }, [gameState, primaryColor]);

    const startGame = () => {
        // Reset Logic
        const state = gameRef.current;
        state.score = 0;
        state.level = 1;
        state.isGameOver = false;
        state.bullets = [];
        state.enemies = [];
        state.particles = [];
        if (canvasRef.current) {
            state.player.x = canvasRef.current.width / 2 - 20;
        }

        setScore(0);
        setLevel(1);
        setGameState("PLAYING");
    };

    // Input Listeners (Passive)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Prevent scrolling with space
            if (e.key === ' ') e.preventDefault();

            gameRef.current.keys[e.key] = true;
            if (e.key === ' ' && (gameState === 'START' || gameState === 'GAME_OVER')) {
                // Prevent multiple starts
                if (gameRef.current.isGameOver || gameState === 'START') {
                    startGame();
                }
            }
        };
        const handleKeyUp = (e: KeyboardEvent) => {
            gameRef.current.keys[e.key] = false;
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            cancelAnimationFrame(gameRef.current.animationId);
        };
    }, [gameState]);

    return (
        <div
            className="absolute inset-0 z-50 bg-black/90 flex flex-col items-center justify-center backdrop-blur-md animate-in fade-in"
            onClick={onClose} // Background click close logic
        >
            <div
                className="relative w-full max-w-4xl h-[80vh] bg-black border-4 border-double shadow-[0_0_50px_var(--primary)] overflow-hidden"
                style={{ borderColor: primaryColor }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* HUD */}
                <div className="absolute top-0 left-0 w-full p-4 flex justify-between font-mono font-bold text-xl pointer-events-none z-10" style={{ color: primaryColor }}>
                    <div className="flex gap-4">
                        <span className="flex items-center gap-2"><Trophy size={20} /> {score}</span>
                        <span className="flex items-center gap-2"><Target size={20} /> LVL {level}</span>
                    </div>
                    {/* Controls Hint */}
                    <div className="text-sm opacity-50">ARROWS TO MOVE • SPACE TO SHOOT</div>
                    <button onClick={onClose} className="hover:text-red-500 transition-colors pointer-events-auto"><XCircle /></button>
                </div>

                {/* Game Canvas */}
                <canvas ref={canvasRef} className="w-full h-full block cursor-none" />

                {/* Overlays */}
                {gameState === "START" && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-center space-y-6">
                        <h2 className="text-4xl md:text-6xl font-bold" style={{ color: primaryColor }}>SYSTEM DEFENSE</h2>
                        <p className="text-xl opacity-80 max-w-md">Hostiles detected in the mainframe. Engage countermeasures.</p>
                        <button
                            onClick={(e) => { e.stopPropagation(); startGame(); }}
                            className="px-8 py-3 text-2xl font-bold border-2 hover:bg-white hover:text-black transition-all animate-pulse"
                            style={{ borderColor: primaryColor, color: primaryColor }}
                        >
                            [ PRESS SPACE TO START ]
                        </button>
                    </div>
                )}

                {gameState === "GAME_OVER" && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/40 text-center space-y-6 backdrop-blur-sm">
                        <div className="text-red-500 animate-bounce"><AlertTriangle size={64} /></div>
                        <h2 className="text-5xl font-bold text-red-500">SYSTEM FAILURE</h2>
                        <div className="text-2xl font-mono">
                            <div>FINAL SCORE: {finalScore}</div>
                            <div>LEVEL REACHED: {level}</div>
                        </div>
                        <button
                            onClick={(e) => { e.stopPropagation(); startGame(); }}
                            className="px-8 py-3 text-xl font-bold border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition-all mt-4"
                        >
                            [ RETRY MISSION ]
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
