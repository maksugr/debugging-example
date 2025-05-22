import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import { ErrorBoundary } from "./components/ErrorBoundary";
import { TodoList } from "./pages/TodoList";

// Code‑split the heavy detail route
const TodoDetails = lazy(() => import("./pages/TodoDetails"));

export default function App() {
    return (
        <ErrorBoundary>
            <Suspense
                fallback={
                    <div className="flex items-center justify-center h-screen text-xl font-semibold">
                        Loading…
                    </div>
                }
            >
                <Routes>
                    <Route path="/" element={<TodoList />} />
                    <Route path="/todo/:id" element={<TodoDetails />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </ErrorBoundary>
    );
}
