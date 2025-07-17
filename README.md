# SETTING UP A REACT PROJECT(Using Next.js with TypeScript)

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

# REACT ARCHITECT: Mastering Advanced Structures in Next.js

## Table of Contents
1. [Project Setup](#0-project-setup)
2. [Navigation Implementation](#1-navigation-implementation)
3. [Posts Components](#2-posts-components)
4. [Users Components](#3-users-components)
5. [Post Modal Extension](#4-post-modal-extension)
6. [User Modal Implementation](#5-user-modal-implementation)

---

## 0. Project Setup
**Objective**: Set up a base Next.js application with TypeScript and Tailwind CSS.

### Setup Instructions
1. Create project:
   ```bash
   npx create-next-app@latest alx-project-0x01 --typescript
   ```
2. Configuration:
   - Select **Yes** for:
     - ESLint
     - Tailwind CSS
     - Import alias
3. Update global styles:
   ```css
   /* styles/global.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
4. Create initial page:
   ```tsx
   /* pages/index.tsx */
   const Home: React.FC = () => {
     return (
       <div className="flex justify-center items-center h-screen">
         <h1 className="text-7xl font-thin">Welcome Page</h1>
       </div>
     )
   }
   export default Home;
   ```

**Repository**:
- GitHub repository: `alx-project-0x01-setup`
- Directory: `alx-project-0x01`
- Files:
  - `styles/global.css`
  - `pages/index.tsx`
  - `components/common/Button.tsx`
  - `components/common/PostCard.tsx`
  - `components/layout/Header.tsx`
  - `components/layout/Footer.tsx`
  - `pages/posts/index.tsx`
  - `pages/users/index.tsx`

---

## 1. Navigation Implementation
**Objective**: Implement multi-page navigation system.

### Instructions
1. Create Header component:
   ```tsx
   /* components/layout/Header.tsx */
   import Link from 'next/link';

   const Header: React.FC = () => {
     return (
       <header className="bg-blue-600 text-white shadow-md py-4">
         <div className="container mx-auto flex justify-between items-center px-4">
           <h3 className="font-bold text-2xl">
             <Link href="/">Daily Contents</Link>
           </h3>
           <nav>
             <ul className="flex space-x-6">
               <li className="hover:underline">
                 <Link href="/posts">Posts</Link>
               </li>
               <li className="hover:underline">
                 <Link href="/users">Users</Link>
               </li>
             </ul>
           </nav>
         </div>
       </header>
     );
   }
   ```
2. Update home page:
   ```tsx
   /* pages/index.tsx */
   import Header from "@/components/layout/Header";

   const Home: React.FC = () => {
     return (
       <div className="flex flex-col h-screen">
         <Header />
         <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
           {/* Content remains same */}
         </main>
       </div>
     )
   }
   ```

**Files Modified**:
- `components/layout/Header.tsx`
- `pages/index.tsx`
- `pages/posts/index.tsx`
- `pages/users/index.tsx`

---

## 2. Posts Components
**Objective**: Implement post display functionality.

### Instructions
1. Create Post interface:
   ```ts
   /* interfaces/index.ts */
   export interface PostProps {
     userId: number;
     id: number;
     title: string;
     body: string;
   }
   ```
2. Create PostCard component:
   ```tsx
   /* components/common/PostCard.tsx */
   const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
     return (
       <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg">
         <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
         <p className="text-gray-600">{body}</p>
         <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
           <span>User ID: {userId}</span>
           <span>Post ID: {id}</span>
         </div>
       </div>
     );
   };
   ```
3. Implement posts page:
   ```tsx
   /* pages/posts/index.tsx */
   export async function getStaticProps() {
     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
     const posts = await response.json()
     return { props: { posts } }
   }
   ```

**Files Modified**:
- `pages/posts/index.tsx`
- `components/common/PostCard.tsx`
- `interfaces/index.ts`

---

## 3. Users Components
**Objective**: Implement user display functionality.

### Instructions
1. Create User interface:
   ```ts
   /* interfaces/index.ts */
   export interface UserProps {
     id: number;
     name: string;
     username: string;
     email: string;
     address: {
       street: string;
       suite: string;
       city: string;
       zipcode: string;
       geo: { lat: string; lng: string };
     };
     // ...other fields
   }
   ```
2. Create UserCard component (be creative with styling)
3. Implement users page with data fetching:
   ```tsx
   /* pages/users/index.tsx */
   export async function getStaticProps() {
     const response = await fetch("https://jsonplaceholder.typicode.com/users")
     const users = await response.json()
     return { props: { users } }
   }
   ```

**Files Created**:
- `components/common/UserCard.tsx`
- Updates to `interfaces/index.ts`
- Updates to `pages/users/index.tsx`

---

## 4. Post Modal Extension
**Objective**: Add post creation functionality.

### Instructions
1. Create PostModal interfaces:
   ```ts
   /* interfaces/index.ts */
   export interface PostData {
     userId: number;
     id?: number;
     title: string;
     body: string;
   }

   export interface PostModalProps {
     onClose: () => void;
     onSubmit: (post: PostData) => void;
   }
   ```
2. Implement PostModal component:
   ```tsx
   /* components/common/PostModal.tsx */
   const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
     const [post, setPost] = useState<PostData>({
       userId: 1,
       title: "",
       body: ""
     });
     // ...form handling logic
   };
   ```
3. Add modal to posts page:
   ```tsx
   /* pages/posts/index.tsx */
   const [isModalOpen, setModalOpen] = useState(false);
   // ...modal toggle logic
   ```

**Files Created**:
- `components/common/PostModal.tsx`
- Updates to `interfaces/index.ts`
- Updates to `pages/posts/index.tsx`

---

## 5. User Modal Implementation
**Objective**: Add user creation functionality.

### Instructions
1. Create UserModal interfaces based on UserProps
2. Implement UserModal component (similar to PostModal)
3. Add modal to users page with proper form handling

**Files Created**:
- `components/common/UserModal.tsx`
- Updates to `interfaces/index.ts`
- Updates to `pages/users/index.tsx`

---

**Repository**: [alx-project-0x01-setup](https://github.com/yourusername/alx-project-0x01-setup)  
**Directory**: `alx-project-0x01`