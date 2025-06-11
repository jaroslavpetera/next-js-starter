import Board from "@/components/Board";
import { SendToHomePage, Title } from "@/types/types";

export default function TicTacToePage() {
    return (
        <main className="flex flex-col">
            <SendToHomePage />
            <Title text="Tic Tac Toe Game" />
            <div className="flex flex-col items-center bg-dark min-h-screen p-6">
                <Board />
            </div>
        </main>
    );
}