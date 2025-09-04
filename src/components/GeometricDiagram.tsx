import React from 'react';

interface GeometricDiagramProps {
  className?: string;
}

export function GeometricDiagram({ className = '' }: GeometricDiagramProps) {
  return (
    <div className={`relative ${className}`}>
      <svg 
        viewBox="0 0 400 400" 
        className="w-full h-full"
        style={{ maxWidth: '400px', maxHeight: '400px' }}
      >
        {/* Outer square with purple border */}
        <rect 
          x="20" 
          y="20" 
          width="360" 
          height="360" 
          fill="white"
          stroke="var(--puzzle-border)" 
          strokeWidth="8"
        />
        
        {/* Red triangle (area = 2) - left triangle */}
        <path 
          d="M 28 28 L 28 372 L 200 372 Z" 
          fill="var(--puzzle-red)"
          stroke="var(--puzzle-border)"
          strokeWidth="3"
        />
        
        {/* Blue area (area = ?) - center triangle */}
        <path 
          d="M 28 28 L 200 372 L 372 200 Z" 
          fill="var(--puzzle-blue)"
          stroke="var(--puzzle-border)"
          strokeWidth="3"
        />
        
        {/* Yellow triangle (area = 3) - bottom right triangle */}
        <path 
          d="M 200 372 L 372 372 L 372 200 Z" 
          fill="var(--puzzle-yellow)"
          stroke="var(--puzzle-border)"
          strokeWidth="3"
        />
        
        {/* Green area (area = 4) - top triangle spanning full width */}
        <path 
          d="M 28 28 L 372 28 L 372 200 Z" 
          fill="var(--puzzle-green)"
          stroke="var(--puzzle-border)"
          strokeWidth="3"
        />
        
        {/* Number labels */}
        <text 
          x="85" 
          y="280" 
          fontSize="48" 
          fontWeight="bold" 
          fill="black"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
        >
          2
        </text>
        
        <text 
          x="315" 
          y="320" 
          fontSize="48" 
          fontWeight="bold" 
          fill="black"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
        >
          3
        </text>
        
        <text 
          x="260" 
          y="120" 
          fontSize="48" 
          fontWeight="bold" 
          fill="black"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
        >
          4
        </text>
        
        <text 
          x="220" 
          y="220" 
          fontSize="64" 
          fontWeight="bold" 
          fill="black"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
        >
          ?
        </text>
      </svg>
    </div>
  );
}
