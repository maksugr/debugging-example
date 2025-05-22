import { type FormEvent, useState } from "react";
import { type ITodo } from "../data/todos";

interface IAddTodoFormProps {
    readonly onAdd: (todo: ITodo) => Promise<void>;
}

export const AddTodoForm = ({ onAdd }: IAddTodoFormProps) => {
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!title.trim()) return;

        setLoading(true);

        try {
            // now awaited — no duplicates
            await onAdd({ id: Date.now(), title, completed: false });
            setTitle("");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New todo"
                className="flex-1 border rounded p-2"
            />
            <button
                type="submit"
                className="bg-green-500 text-white px-4 rounded"
            >
                {loading ? "Adding…" : "Add"}
            </button>
        </form>
    );
};
