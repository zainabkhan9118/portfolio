import { useCallback } from 'react';

export const useTerminalSound = () => {
    const playSound = useCallback((frequency: number, type: OscillatorType, duration: number, vol = 0.1) => {
        if (typeof window === 'undefined') return;

        try {
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            if (!AudioContext) return;

            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(frequency, ctx.currentTime);

            gain.gain.setValueAtTime(vol, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + duration);
        } catch (e) {
            console.error("Audio error", e);
        }
    }, []);

    const playHover = () => playSound(800, 'sine', 0.05, 0.05);
    const playClick = () => playSound(1200, 'square', 0.1, 0.05);
    const playType = () => playSound(600 + Math.random() * 200, 'sawtooth', 0.03, 0.02);
    const playError = () => playSound(150, 'sawtooth', 0.3, 0.2);
    const playSuccess = () => {
        playSound(800, 'sine', 0.2, 0.1);
        setTimeout(() => playSound(1200, 'sine', 0.4, 0.1), 100);
    };

    return { playHover, playClick, playType, playError, playSuccess };
};
