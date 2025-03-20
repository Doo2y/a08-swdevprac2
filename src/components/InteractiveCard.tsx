'use client'
import React, { useState } from "react";

export default function InteractiveCard({ children }: { children: React.ReactNode }) {
    const [isHovered, setIsHovered] = useState(false);

    function onEventSelected() {
        alert("Card is clicked!");
    }

    return (
        <div
            className={`w-full h-[450px] rounded-lg bg-white transition-all duration-300 
                        ${isHovered ? "shadow-2xl bg-neutral-200" : "shadow-lg"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </div>
    );
}
