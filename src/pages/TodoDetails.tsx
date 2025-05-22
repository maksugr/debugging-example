import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";

import { todos } from "../data/todos";

export default function TodoDetails() {
    const { id } = useParams();
    const todo = todos.find((t) => t.id === Number(id));

    // Expensive calculation (mock) memoised
    const related = useMemo(() => {
        // Pretend heavy work
        const word = todo?.title.split(" ")[0] ?? "";
        return todos
            .filter((t) => t.title.startsWith(word) && t.id !== todo?.id)
            .slice(0, 5);
    }, [todo]);

    if (!todo) return <p>Todo is not found</p>;

    return (
        <div className="max-w-xl mx-auto p-4">
            <Link to="/" className="text-blue-600 hover:underline text-sm">
                Back
            </Link>
            <h2 className="text-xl mt-4 mb-2">{todo.title}</h2>
            <p className="mb-4 text-gray-700">{todo.description}</p>
            <ul className="list-disc list-inside">
                {related.map((r) => (
                    <li key={r.id}>{r.title}</li>
                ))}
            </ul>
        </div>
    );
}
