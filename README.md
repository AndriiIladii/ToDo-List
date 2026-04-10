# Todo App 📝

A modern task management web application (Todo list) built with React and Vite. Initially developed as a classic ToDo app, it has been significantly refactored and improved with a focus on modular architecture, responsiveness, and user experience (UX).

## 🚀 Key Features & Improvements

### 1. Architecture & Refactoring 🧰
* **Component-Based Structure**: The once monolithic main file has been broken down into logical layers: `Header`, `AddTaskForm`, `TodoList`, `TodoItem`, and `FilterBar`.
* **Custom Hooks**: All business logic has been extracted into custom hooks to keep components clean:
  * `useTasks` — handles adding, deleting, toggling task status, filtering, and Drag & Drop functionality.
  * `useTheme` — manages the Dark and Light mode toggling logic.
* **Styling**: Migrated to SCSS Modules. Every component now has isolated styling (`*.module.scss`), preventing class name collisions.

### 2. User Experience (UX) ✨
* **Drag & Drop**: Implemented smooth list sorting using the `@dnd-kit` library. Sensors are finely tuned so that dragging does not interfere with clicking checkboxes or delete buttons.
* **Dark / Light Theme**: Full support for both themes using CSS variables, with state persistence. If a user visits for the first time, the theme defaults automatically based on OS system preferences.
* **State Persistence**: Tasks and theme preferences are instantly saved to `localStorage`. Nothing is lost upon page refresh.

### 3. Responsiveness & UI 📱
* **REM & Fluid Typography**: All static `px` values (regarding margins, padding, width, height, media queries) have been converted into relative `rem` units. The `clamp()` function is used for typography, ensuring text scales beautifully depending on screen size.
* **Responsive Design**: The app adapts to any screen. On mobile devices (width under `768px`), the filter bar (All, Active, Completed) elegantly splits and moves under the main list as a standalone block.
* **Custom Checkboxes**: Default browser checkboxes have been replaced with custom styled circular shapes featuring gradient backgrounds when checked.

## 🛠 Built With

* **Bundler**: Vite
* **Library**: React 19
* **Drag & Drop**: `@dnd-kit/core`, `@dnd-kit/sortable`
* **Styling**: SCSS (CSS Modules), CSS custom properties (variables)

## ⚙️ Getting Started

1. Ensure Node.js is installed on your machine.
2. Clone the repository and install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

---
*This project was developed focusing on modern React patterns (declarative UI, hooks) and advanced CSS techniques (fluid typography, variables, responsive design).*
