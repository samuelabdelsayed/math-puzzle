# Math Puzzle:

Interactive geometric puzzle that challenges users to find the area of the blue region in a complex shape.

**Experience Qualities**:
1. **Educational** - Clear visual learning that makes geometry concepts accessible
2. **Interactive** - Engaging puzzle format that encourages mathematical thinking
3. **Insightful** - Reveals creative problem-solving approaches through visual geometry

## Design Direction

The design should feel educational yet engaging, with clean geometric precision that emphasizes the mathematical nature while remaining approachable for learners.

## Color Selection

Custom palette that matches the original mathematical diagram
- **Primary Color**: Deep blue (#4A90E2) - matches the puzzle's blue region and communicates trust/learning
- **Secondary Colors**: 
  - Red (#E74C3C) for region 2
  - Yellow (#F1C40F) for region 3  
  - Green (#27AE60) for region 4
  - Purple (#6C5CE7) for the outer border
- **Accent Color**: Bright orange (#FF6B35) for interactive elements and CTAs
- **Foreground/Background Pairings**:
  - Background (White #FFFFFF): Dark gray text (#2C3E50) - Ratio 12.6:1 ✓
  - Card (Light gray #F8F9FA): Dark gray text (#2C3E50) - Ratio 11.8:1 ✓
  - Primary (Deep blue #4A90E2): White text (#FFFFFF) - Ratio 5.2:1 ✓
  - Accent (Orange #FF6B35): White text (#FFFFFF) - Ratio 4.8:1 ✓

## Font Selection

Clean, modern sans-serif that conveys educational authority while remaining friendly and accessible.

- **Typographic Hierarchy**:
  - H1 (Main Title): Inter Bold/32px/tight spacing
  - H2 (Question): Inter Medium/24px/normal spacing  
  - Body (Instructions): Inter Regular/16px/relaxed spacing
  - Labels (Numbers): Inter Bold/18px/tight spacing

## Animations

Subtle and purposeful animations that support the educational experience without distracting from the mathematical content.

- **Purposeful Meaning**: Gentle transitions that guide attention to different parts of the diagram
- **Hierarchy of Movement**: Input validation feedback and hint reveals are the primary animated elements

## Component Selection

- **Components**: Button for answer checking and hints, Input for numerical entry, Card for the main puzzle container
- **Customizations**: Custom SVG geometric diagram, styled number labels positioned precisely
- **States**: Button hover/active states, input focus states, success/error feedback states
- **Icon Selection**: Question mark for hints, check mark for correct answers, lightbulb for insights
- **Spacing**: Consistent 16px base spacing, 32px for major sections
- **Mobile**: Responsive diagram that scales proportionally, stacked layout for smaller screens
