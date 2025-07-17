# PROJECT-0x00: Setup Next.js with TypeScript

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

---
---
<br></br>
# React Architect: Mastering Advanced Structures in Next.js

## Project Overview
This project is a comprehensive Next.js web application that demonstrates fundamental concepts of modern web development. The application features multiple pages for displaying posts and users, with interactive components for adding new content. Built with TypeScript, Tailwind CSS, and Next.js, the project showcases best practices in component-based architecture, state management, and API integration.

## Learning Objectives
By completing this project, you will:
- Set up a Next.js application with TypeScript and Tailwind CSS
- Implement dynamic page routing and navigation
- Create reusable React components with proper TypeScript typing
- Work with external APIs to fetch and display data
- Implement modal dialogs for user interaction
- Understand static site generation with getStaticProps
- Manage component state with React hooks
- Structure a project with proper directory organization
- Apply responsive design principles with Tailwind CSS

## Requirements

### Technical Requirements
- Node.js (v16 or later)
- npm or yarn
- Next.js (latest version)
- TypeScript
- Tailwind CSS
- ESLint (for code quality)

### Functional Requirements
1. **Base Application Setup**
   - Create Next.js app with TypeScript, Tailwind CSS, and ESLint
   - Configure proper folder structure
   - Set up global CSS with Tailwind directives

2. **Navigation System**
   - Implement header with navigation links
   - Set up routing between home, posts, and users pages
   - Ensure navigation works without page reloads

3. **Posts Functionality**
   - Display posts from JSONPlaceholder API
   - Create PostCard component for displaying individual posts
   - Implement PostModal for adding new posts
   - Handle form submission and state management

4. **Users Functionality**
   - Display users from JSONPlaceholder API
   - Create UserCard component for displaying user information
   - Implement UserModal for adding new users
   - Handle complex nested data structures

## Best Practices

### Component Architecture
- Follow atomic design principles
- Separate presentational and container components
- Create reusable UI components (Button, Card, Modal)

### Type Safety
- Define proper TypeScript interfaces
- Type all component props and state
- Handle event types correctly

### Styling
- Use Tailwind CSS utility classes
- Maintain consistent spacing and typography
- Implement responsive design

### State Management
- Use React hooks for local state
- Lift state up when necessary
- Keep state minimal and focused

### Project Structure
- Organize components by feature/domain
- Keep interfaces in a central location
- Follow Next.js conventions for pages

## Project Structure
```
alx-project-0x01/
├── components/
│   ├── common/          # Reusable components
│   └── layout/          # Layout components
├── interfaces/          # TypeScript interfaces
├── pages/
│   ├── posts/           # Posts related pages
│   ├── users/           # Users related pages
│   └── index.tsx        # Home page
├── public/              # Static assets
├── styles/              # Global styles
└── ...                  # Other Next.js files
```

## Implementation Notes
- The project uses JSONPlaceholder as a mock API
- Static generation (getStaticProps) is used for initial data fetching
- Modals demonstrate interactive UI patterns
- TypeScript interfaces ensure type safety throughout the application
- Tailwind CSS provides utility-first styling

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tasks

### 0. Setting up Project
- Set up base Next.js application with TypeScript and Tailwind CSS
- Configure global styles and basic page structure
- Create initial component files and directory structure

### 1. Set up navigation between pages
- Implement Header component with navigation links
- Configure routing between home, posts, and users pages
- Ensure smooth navigation without page reloads

### 2. Implement Posts Card Components
- Create PostCard component to display individual posts
- Fetch and display posts from JSONPlaceholder API
- Style posts using Tailwind CSS

### 3. Implement Users Card Components
- Create UserCard component to display user information
- Fetch and display users from JSONPlaceholder API
- Style users using Tailwind CSS

### 4. Extend Post Page with Modal
- Create PostModal component for adding new posts
- Implement form handling and state management
- Add modal toggle functionality to posts page

### 5. Implement User Modal
- Create UserModal component for adding new users
- Implement form handling for complex user data
- Add modal toggle functionality to users page

## Important Note
While copying and pasting code may seem quick and convenient, it often hinders true understanding. To get the most out of this learning experience, we strongly recommend that you:
- Carefully read and understand the instructions for each task
- Type the code yourself to internalize the logic and structure
- Experiment and test your code to see how it works in practice

Hands-on practice leads to deeper learning and long-term retention. Keep coding!
