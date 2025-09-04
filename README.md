# Math Puzzle

A geometric puzzle that presents a visual math problem with colored triangular sections within a perfect square. The puzzle asks viewers to determine the area of the blue region using information from the other colored areas.

## Features

- Clean, educational geometric visualization
- Color-coded triangular sections with area labels
- Precise SVG-based diagram with perfect square dimensions
- Modern, responsive design using Tailwind CSS
- Accessible interface with clear visual hierarchy

## Problem Description

The puzzle presents a square divided into colored triangular sections:
- Red triangle: area = 2
- Yellow triangle: area = 3  
- Green triangle: area = 4
- Blue triangle: area = ?

The goal is to determine the area of the blue section based on the geometric relationships between the shapes.



## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/samuelabdelsayed/math-puzzle.git
   cd math-puzzle
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Technologies

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Build Tool**: Vite for fast development and optimized builds
- **Graphics**: SVG for crisp vector graphics
- **Fonts**: Inter font family for clean typography

## Design Principles

- **Educational**: Clear visual learning that makes geometry accessible
- **Interactive**: Engaging puzzle format that encourages mathematical thinking
- **Accessible**: Color choices with proper contrast ratios
- **Responsive**: Works on devices of all sizes

## Color Palette

- **Blue** (#4A90E2): The puzzle's blue region
- **Red** (#E74C3C): Region with area 2
- **Yellow** (#F1C40F): Region with area 3
- **Green** (#27AE60): Region with area 4
- **Purple** (#6C5CE7): Border accent color
