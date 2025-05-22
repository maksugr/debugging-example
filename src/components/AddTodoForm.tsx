import { type FormEvent, useState } from "react";
import { type ITodo } from "../data/todos";

// Problems
// 1. handleSubmit is async but doesn’t await the mocked API call, causing a race condition that can double‑add items.

interface IAddTodoFormProps {
    readonly onAdd: (todo: ITodo) => void;
}

export const AddTodoForm = ({ onAdd }: IAddTodoFormProps) => {
    const [title, setTitle] = useState("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (!title.trim()) return;

        fakePost(title);
        fakePost(title);

        setTitle("");
    }

    function fakePost(newTitle: string) {
        const newTodo: ITodo = {
            id: Date.now(),
            title: newTitle,
            completed: false,
            description: "New todo description",
        };
        onAdd(newTodo);
    }

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
                Add
            </button>
        </form>
    );
};
