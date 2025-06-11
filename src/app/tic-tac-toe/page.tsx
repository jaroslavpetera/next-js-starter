import Board from "@/components/Board";
import { SendToHomePage } from "@/types/types";

export default function TicTacToePage() {
    return (
        <main className="flex flex-col">
            <SendToHomePage />

            <div className="flex flex-col items-center bg-dark min-h-screen p-6">
                <h1 className="text-4xl font-bold mb-6 text-purple-500">Tic Tac Toe</h1>
                <Board />
            </div>
        </main>
    );
}