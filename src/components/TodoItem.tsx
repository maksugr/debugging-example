import { memo } from "react";
import { Link } from "react-router-dom";
import { type ITodo } from "../data/todos";

interface ITodoItemProps {
    readonly todo: ITodo;
    readonly onToggle: (id: number) => void;
}

// Wrapped in React.memo — skips unchanged renders
const TodoItem = memo(function TodoItem({ todo, onToggle }: ITodoItemProps) {
    return (
        <li className="border p-2 rounded mb-1 flex items-center justify-between">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="h-4 w-4 mr-2 accent-indigo-600"
            />
            <Link to={`/todo/${todo.id}`} className="flex-1 select-none">
                {todo.title}
            </Link>
        </li>
    );
});

export default TodoItem;
