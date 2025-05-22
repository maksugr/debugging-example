import { useParams, Link } from "react-router-dom";
import { todos } from "../data/todos";

// Problems
// 1. Heavy synchronous work (finding related todos) runs inside the component body on every render, slowing first paint.
// 2. This file is also eagerly loaded, multiplying the cost.

export const TodoDetails = () => {
    const { id } = useParams();
    const todo = todos.find((t) => t.id === Number(id));

    let sum = 0;

    for (let i = 0; i < 1e8; i++) {
        sum += i;
    }

    if (!todo) return <p>Todo is not found</p>;

    return (
        <div className="max-w-xl mx-auto p-4">
            <Link to="/" className="text-blue-600 hover:underline text-sm">
                Back
            </Link>
            <h2 className="text-xl mt-4 mb-2">{todo.title}</h2>
            <p className="mb-4 text-gray-700">{todo.description}</p>
            <p>Count heavy computation: {sum}</p>
        </div>
    );
};
