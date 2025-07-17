# Setup - Next.js Guide

## Table of Contents
1. [Project Scaffolding](#0-project-scaffolding)
2. [Setting Up Project Directories](#1-setting-up-project-directories)
3. [Basic Routing](#2-basic-routing)
4. [Rendering Components](#3-rendering-components)
5. [Using Components](#4-using-components)
6. [Typing Functional Components](#5-typing-functional-components)
7. [Advanced Task](#6-advanced-task)

---

## 0. Project Scaffolding
**Objective**: Understand how to create a project using CLI tools like `npx` with `create-next-app`.

### Setup Instructions
1. Open VS Code and start a new terminal session
2. Navigate to your project directory
3. Run:
   ```bash
   npx create-next-app@latest alx-project-0x00 --typescript
   ```
4. Configuration:
   - Select **Yes** for:
     - ESLint
     - Tailwind CSS
     - Import alias
   - Select **No** for:
     - `/src` directory
     - App Router
5. Start dev server:
   ```bash
   npm run dev -- -p 3000
   ```

**Repository**:
- Directory: `alx-project-0x00`
- File: `README.md`

---

## 1. Setting Up Project Directories
**Objective**: Organize your assets and components effectively.

### Instructions
1. Create directories:
   ```bash
   mkdir components interfaces
   ```
2. Modify `pages/index.tsx` to use arrow function:
   ```tsx
   const Home: React.FC = () => {
     return (
       <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
         <h1>Airbnb Application Clone system</h1>
         <button className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full">
           Get Started
         </button>
       </main>
     )
   }
   export default Home;
   ```
3. Create empty files:
   - `interfaces/index.ts`
   - `components/Card.tsx`
   - `components/Pill.tsx`

**Files Created**:
- `components/Card.tsx`
- `components/Pill.tsx` 
- `interfaces/index.ts`

---

## 2. Basic Routing
**Objective**: Implement simple page routing.

### Instructions
1. Create new pages:
   - `pages/landing.tsx`
   - `pages/about.tsx`
2. Add basic components:
   ```tsx
   // landing.tsx
   const Landing: React.FC = () => {
     return <h1 className="text-xl font-extralight">Landing Page</h1>
   }
   export default Landing;
   ```

**Files Created**:
- `pages/landing.tsx`
- `pages/about.tsx`

---

## 3. Rendering Components
**Objective**: Create reusable components.

### Instructions
1. Add images to `public/assets/images`:
   - `house.png`
   - `star.png`
2. Implement `Card.tsx` and `Pill.tsx` components (see full code in original task)

**Files Modified**:
- `components/Card.tsx`
- `components/Pill.tsx`

---

## 4. Using Components
**Objective**: Utilize created components in pages.

### Instructions
1. In `landing.tsx`:
   ```tsx
   import Card from "@/components/Card"
   
   const Landing: React.FC = () => {
     return (
       <div>
         <h1>Landing Page</h1>
         <Card />
       </div>
     )
   }
   ```

**Files Modified**:
- `pages/landing.tsx`

---

## 5. Typing Functional Components
**Objective**: Add TypeScript interfaces to components.

### Instructions
1. Create interface in `interfaces/index.ts`:
   ```ts
   export interface PillProps {
     title: string
   }
   ```
2. Update `Pill.tsx`:
   ```tsx
   const Pill: React.FC<PillProps> = ({ title }) => {
     return (
       <div className="flex justify-center items-center bg-[#F9F9F9] px-3 h-[27px] rounded-full">
         <p className="text-sm">{title}</p>
       </div>
     )
   }
   ```

**Files Modified**:
- `interfaces/index.ts`
- `components/Pill.tsx`

---

## 6. Advanced Task
**Objective**: Create a customizable button component.

### Requirements
1. Create `Button.tsx` component that accepts:
   - `title: string`
   - `size: 'sm' | 'md' | 'lg'`
   - `shape: 'rounded-sm' | 'rounded-md' | 'rounded-full'`
2. Implement multiple button variants in `landing.tsx`

**Files to Create**:
- `components/Button.tsx`
- Update `interfaces/index.ts`
- Update `pages/landing.tsx`

---

**Repository**: [alx-project-0x00-setup](https://github.com/mercyXp/alx-project-0x00-setup)  
**Directory**: `alx-project-0x00`
