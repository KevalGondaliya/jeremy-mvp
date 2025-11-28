# Installers Directory Demo

A Next.js application showcasing an installer directory with filtering capabilities by city and skill level.

## How to Run the Project Locally

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn
   # or
   yarn install
   ```
   
2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Component Structure

The project follows a clean, modular structure:

### `/app` - Next.js App Router
- **`page.tsx`** - Home page with navigation to the installers test page
- **`layout.tsx`** - Root layout with global styles and metadata
- **`installers-test/page.tsx`** - Main installers directory page with filtering logic
  - Manages filter state (city and skill level)
  - Renders filtered installer cards in a responsive grid
  - Displays results count and empty state

### `/components` - Reusable Components
- **`InstallerCard.tsx`** - Displays individual installer information
  - Shows name, city, skill level badge, years of experience, and about section
  - Includes color-coded skill level badges (Master/Intermediate/Novice)
  - Responsive card design with hover effects

### `/types` - TypeScript Definitions
- **`index.ts`** - Defines the `Installer` interface with type safety

### `/components` - Data
- **`mockInstallers.ts`** - Mock data array containing 12 sample installers

### Key Features
- **Client-side filtering** by city and skill level
- **Responsive design** using Tailwind CSS
- **Type-safe** with TypeScript
- **Modern UI** with hover effects and smooth transitions

---

Built with [Next.js](https://nextjs.org), [React](https://react.dev), [TypeScript](https://www.typescriptlang.org), and [Tailwind CSS](https://tailwindcss.com).
