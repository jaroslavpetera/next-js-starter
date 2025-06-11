import { FoodItemTable, SendToHomePage } from "@/types/types";

export default function FoodTablePage() {
    const foodItems = [
        { name: 'Pizza', calories: 266, protein: '11g', fat: '10g' },
        { name: 'Burger', calories: 295, protein: '17g', fat: '12g' },
        { name: 'Salad', calories: 152, protein: '5g', fat: '6g' },
        { name: 'Sushi', calories: 200, protein: '12g', fat: '4g' },
    ];

    return (
        <main className="flex flex-col bg-dark min-h-screen p-6">
            <SendToHomePage />

            <h1 className="text-4xl font-bold mb-6 text-purple-500 text-center">
                Basic table with food items
            </h1>

            <div>
                <FoodItemTable foodItems={foodItems} />
            </div>

        </main>
    )
}