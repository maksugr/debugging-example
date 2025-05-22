import { useState } from "react";
import { todos as initialTodos, type ITodo } from "../data/todos";
import { AddTodoForm } from "../components/AddTodoForm";
import { TodoItem } from "../components/TodoItem";

// Problems
// 1. Filtered list is recreated each render, so children always receive new prop references.
// 2. Array index is used as key instead of todo.id, hurting reconciliation.

export const TodoList = () => {
    const [search, setSearch] = useState("");
    const [todoList, setTodoList] = useState<ITodo[]>(initialTodos);

    const filtered = todoList.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl mb-4">My todos</h1>
            <AddTodoForm
                onAdd={(todo) => setTodoList((prev) => [...prev, todo])}
            />
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="border rounded p-2 mb-4 w-full"
            />
            <ul>
                {filtered.map((todo, index) => (
                    <TodoItem key={index} todo={todo} />
                ))}
            </ul>
        </div>
    );
};
