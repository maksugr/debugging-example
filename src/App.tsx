import { Route, Routes, Navigate } from "react-router-dom";
import { TodoList } from "./pages/TodoList";
import { TodoDetails } from "./pages/TodoDetails";

// Problems
// 1. The detail page is imported eagerly, so its code ships in the initial bundle.
// 2. There is also no ErrorBoundary or Suspense fallback.

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/todo/:id" element={<TodoDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
