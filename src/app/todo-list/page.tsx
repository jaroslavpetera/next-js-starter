import { Title, SendToHomePage } from "@/types/types";

export default function TodoListPage() {
    return (
        <main className="flex flex-col">
            <SendToHomePage />
            <Title text="To Do List" />

        </main>
    )
};