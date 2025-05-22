import { type ITodo } from "../data/todos";
import { Link } from "react-router-dom";

// Problems
// 1. This component is not wrapped in React.memo, so it re-renders whenever its parent re-renders, even if props are the same.

interface ITodoItemProps {
    readonly todo: ITodo;
}

export const TodoItem = ({ todo }: ITodoItemProps) => {
    return (
        <li className="border p-2 rounded mb-1 flex items-center justify-between">
            <span>{todo.title}</span>
            <Link
                to={`/todo/${todo.id}`}
                className="text-blue-600 hover:underline text-sm"
            >
                Details
            </Link>
        </li>
    );
};
