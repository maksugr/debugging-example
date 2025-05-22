export interface ITodo {
    readonly id: number;
    readonly title: string;
    readonly completed: boolean;
    readonly description: string;
}

export const todos: ITodo[] = Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    title: `Todo #${i + 1}`,
    completed: false,
    description: `Description ${i + 1}.`,
}));
