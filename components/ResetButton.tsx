import { on } from "events";

type ButtonProps = {
    onReset: () => void;
};

export default function ResetButton({ onReset }: ButtonProps) {
    return (
        <button
            onClick={onReset}
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
        >
            Reset Game
        </button>
    );
}