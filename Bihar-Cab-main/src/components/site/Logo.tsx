import React from "react";

interface LogoProps {
  className?: string;
  variant?: "full" | "header" | "footer";
}

export function Logo({ className = "", variant = "full" }: LogoProps) {
  const gold = "#c5a059";

  if (variant === "header") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <svg
          viewBox="0 0 200 200"
          className="h-10 w-10 shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Upper Gold Arc */}
          <path
            d="M 30 70 A 75 75 0 0 1 170 70"
            stroke={gold}
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Lower Black Arc */}
          <path
            d="M 50 155 A 75 75 0 0 0 150 155"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* BC monogram */}
          <text
            x="76"
            y="52"
            fill="currentColor"
            fontSize="34"
            fontWeight="900"
            fontFamily="Outfit, sans-serif"
            textAnchor="middle"
          >
            B
          </text>
          <text
            x="116"
            y="52"
            fill={gold}
            fontSize="34"
            fontWeight="900"
            fontFamily="Outfit, sans-serif"
            textAnchor="middle"
          >
            C
          </text>
          {/* Car Silhouette */}
          <path
            d="M 35 105 C 50 100, 70 92, 90 86 C 105 82, 125 82, 140 87 C 152 91, 160 97, 165 105 C 145 103, 125 101, 100 101 C 75 101, 55 105, 35 105 Z"
            fill="currentColor"
          />
          {/* Car Window */}
          <path d="M 90 87 C 102 83, 120 83, 132 87 C 122 86, 102 86, 90 87 Z" fill={gold} />
        </svg>
        <div className="flex flex-col">
          <div className="text-lg font-black leading-none tracking-wider uppercase flex items-center">
            <span className="text-foreground">BIHAR</span>
            <span className="ml-1" style={{ color: gold }}>
              CAB
            </span>
          </div>
          <span className="text-[8px] font-bold tracking-[0.2em] uppercase mt-0.5 text-muted-foreground">
            Safe Journey, Every Time
          </span>
        </div>
      </div>
    );
  }

  // Full / Footer circular logo layout
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="h-28 w-28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Upper Gold Arc */}
        <path
          d="M 30 70 A 75 75 0 0 1 170 70"
          stroke={gold}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Lower Black Arc */}
        <path
          d="M 50 155 A 75 75 0 0 0 150 155"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* BC monogram */}
        <text
          x="78"
          y="52"
          fill="currentColor"
          fontSize="34"
          fontWeight="900"
          fontFamily="Outfit, sans-serif"
          textAnchor="middle"
        >
          B
        </text>
        <text
          x="118"
          y="52"
          fill={gold}
          fontSize="34"
          fontWeight="900"
          fontFamily="Outfit, sans-serif"
          textAnchor="middle"
        >
          C
        </text>

        {/* Car Silhouette */}
        <path
          d="M 35 105 C 50 100, 70 92, 90 86 C 105 82, 125 82, 140 87 C 152 91, 160 97, 165 105 C 145 103, 125 101, 100 101 C 75 101, 55 105, 35 105 Z"
          fill="currentColor"
        />
        {/* Car Window */}
        <path d="M 90 87 C 102 83, 120 83, 132 87 C 122 86, 102 86, 90 87 Z" fill={gold} />

        {/* Bihar Cab text inside */}
        <text
          x="100"
          y="130"
          fontSize="18"
          fontWeight="900"
          fontFamily="Outfit, sans-serif"
          letterSpacing="1"
          textAnchor="middle"
        >
          <tspan fill="currentColor">BIHAR</tspan> <tspan fill={gold}>CAB</tspan>
        </text>

        {/* Tagline text inside */}
        <text
          x="100"
          y="146"
          fontSize="5"
          fontWeight="700"
          fontFamily="Outfit, sans-serif"
          letterSpacing="1.2"
          fill="currentColor"
          textAnchor="middle"
        >
          SAFE JOURNEY, EVERY TIME
        </text>
        {/* Tagline divider lines */}
        <line x1="33" y1="144" x2="52" y2="144" stroke={gold} strokeWidth="1" />
        <line x1="148" y1="144" x2="167" y2="144" stroke={gold} strokeWidth="1" />

        {/* Pin Location */}
        <path
          d="M 77 172 C 77 169.5, 80 168.5, 81.5 168.5 C 83 168.5, 86 169.5, 86 172 C 86 175, 81.5 178, 81.5 178 C 81.5 178, 77 175, 77 172 Z"
          fill={gold}
        />
        <circle cx="81.5" cy="172" r="1.5" fill="white" />
        <text
          x="110"
          y="175"
          fontSize="8"
          fontWeight="800"
          fontFamily="Outfit, sans-serif"
          letterSpacing="2"
          fill="currentColor"
          textAnchor="middle"
        >
          PATNA, BIHAR
        </text>
        <line x1="45" y1="172.5" x2="70" y2="172.5" stroke={gold} strokeWidth="1" />
        <line x1="130" y1="172.5" x2="155" y2="172.5" stroke={gold} strokeWidth="1" />
      </svg>
    </div>
  );
}
