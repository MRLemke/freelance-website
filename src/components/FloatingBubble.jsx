import { useState, useEffect } from "react";

export default function FloatingBubble({ id, onPop }) {
    const [style, setStyle] = useState({});

    useEffect(() => {
        const size = Math.random() * 40 + 20; // 20–60px
        const left = Math.random() * 100; // %
        const color = ["#0ea5e9", "#3b82f6", "#06b6d4", "#38bdf8"][Math.floor(Math.random() * 4)];
        const duration = Math.random() * 20 + 20; // 20–40s

        setStyle({
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            borderColor: color,
            animationDuration: `${duration}s`,
        });
    }, []);

    return (
        <div
            className="absolute top-0 border rounded-full opacity-50 hover:opacity-100 cursor-pointer animate-bubbleFall"
            style={style}
            onClick={() => onPop(id)}
        />
    );
}