import { useCallback, useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { AddTodoForm } from "../components/AddTodoForm";
import { useDebounce } from "../hooks/useDebounce";
import { todos as initialTodos, type ITodo } from "../data/todos";

export const TodoList = () => {
    const [search, setSearch] = useState("");
    const [todoList, setTodoList] = useState<ITodo[]>(initialTodos);

    // Debounce search term to reduce filtering work
    const debouncedSearch = useDebounce(search, 300);

    const handleToggle = useCallback(
        (id: number) =>
            setTodoList((prev) =>
                prev.map((t) =>
                    t.id === id ? { ...t, completed: !t.completed } : t
                )
            ),
        []
    );

    const handleAdd = async (todo: ITodo) => {
        // mock asynchronous API
        await new Promise((res) => setTimeout(res, 300));
        setTodoList((prev) => [todo, ...prev]);
    };

    // Filter inside useMemo‑like effect (simple array filter for clarity)
    const [visible, setVisible] = useState<ITodo[]>(todoList);

    useEffect(() => {
        setVisible(
            todoList.filter((t) =>
                t.title.toLowerCase().includes(debouncedSearch.toLowerCase())
            )
        );
    }, [todoList, debouncedSearch]);

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl mb-4">My todos</h1>
            <AddTodoForm onAdd={handleAdd} />
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="border rounded p-2 mb-4 w-full"
            />
            <ul className="bg-white rounded shadow divide-y">
                {visible.map((todo) => (
                    // Use stable key
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={handleToggle}
                    />
                ))}
            </ul>
        </div>
    );
};
