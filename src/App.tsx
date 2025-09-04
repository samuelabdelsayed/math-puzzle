import React from 'react';
import { GeometricDiagram } from './components/GeometricDiagram';

export function App() {

  return (
    <div className="container">
      <header>
        <h1 className="title">Geometric Math Puzzle</h1>
        <p className="subtitle">Find the area of the blue region based on the other areas.</p>
      </header>

      <main>
        <div className="card">
          <GeometricDiagram className="mb-8 mx-auto" />
          
          <div className="mt-8">
            <h2 className="subtitle">What is the area of the blue region?</h2>
          </div>
        </div>
      </main>

      <footer className="mt-8 text-center text-gray-500">
        <p>Educational geometry puzzle for mathematical thinking.</p>
      </footer>
    </div>
  );
}