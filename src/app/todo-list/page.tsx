'use client';
import { Title, SendToHomePage } from "@/types/types";
import { useState } from "react";

interface TodoItem {
    id: number;
    text: string;
}

export default function TodoListPage() {
    const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
    const [input, setInput] = useState("");

    const addTodoItem = () => {
        if (input.trim() === "") return;
        const newItem: TodoItem = {
            id: Date.now(),
            text: input.trim()
        };
        setTodoItems([...todoItems, newItem]);
        setInput("");
    };

    const removeTodoItem = (id: number) => {
        setTodoItems(todoItems.filter(item => item.id !== id));
    }

    return (
        <main className="flex flex-col">
            <SendToHomePage />
            <Title text="To Do List" />

            <div className="mt-4 w-100 max-w-md mx-auto">
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="border p-2 flex-grow rounded-l text-orange-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter a new task"
                    />
                    <button onClick={addTodoItem} className="bg-purple-500 text-white px-4 rounded hover:bg-purple-400 transition-colors duration-300">
                        Add
                    </button>
                </div>

                <ul className="space-y-2">
                    {todoItems.map(todo => (
                        <li key={todo.id} className="flex justify-between items-center bg-gray-700 p-3 rounded">
                            <span className="text-white">{todo.text}</span>
                            <button onClick={() => removeTodoItem(todo.id)} className="text-red-500 hover:underline">
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
};