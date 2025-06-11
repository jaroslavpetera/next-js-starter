import type { SquareValue } from "../types/game";

type SquareProps = {
    value: SquareValue;
    onClick: () => void;
};

export default function Square({ value, onClick }: SquareProps) {
    const getColor = () => {
        if (value === 'X') {
            return 'bg-red-500';
        }
        if (value === 'O') {
            return 'bg-green-500';
        }
        return '';
    }


    return (
        <button
            onClick={onClick}
            className="w-24 h-24 bg-green-500 border border-gray-400 text-2xl font-bold"
        >
            {value}
        </button>
    );
}