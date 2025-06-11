import { FoodItemTable, SendToHomePage, Title } from "@/types/types";

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
            <Title text="Basic table with food items" />

            <div>
                <FoodItemTable foodItems={foodItems} />
            </div>

        </main>
    );
}