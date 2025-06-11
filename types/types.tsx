import Link from 'next/link';

interface CardProps {
    title: string;
    description: string;
    link: string;
    src: string;
    alt: string;
}

export default function Card({ title, description, link, src, alt }: CardProps) {
    return (
        <div className="text-lg bg-slate-700 content-center rounded-lg border w-100 h-30 text-center">
            <p className="mb-2">{description}</p>
            <div className="flex items-center justify-center">
                <img src={src} alt={alt} className="w-5 h-5" />
                <Link href={link} className="text-purple-500 hover:underline">
                    {title}
                </Link>
            </div>
        </div>
    )
}


interface FoodItemTableProps {
    foodItems: {
        name: string;
        calories: number;
        protein: string;
        fat: string;
    }[];
}

export function FoodItemTable({ foodItems }: FoodItemTableProps) {
    return (
        <div className="p-4 rounded-lg bg-gray-500 w-310 mx-auto text-center">
            <table className="table-fixed w-full rounded-lg bg-gray-700">
                <thead className="bg-purple-600 border-b-4 border-gray-500">
                    <tr>
                        <th>Name</th>
                        <th>Calories</th>
                        <th>Protein</th>
                        <th>Fat</th>
                    </tr>
                </thead>

                <tbody>
                    {foodItems.map(({ name, calories, protein, fat }, index) => (
                        <tr key={index} className="hover:bg-gray-600 transition-colors duration-300">
                            <td>{name}</td>
                            <td>{calories}</td>
                            <td>{protein}</td>
                            <td>{fat}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export function SendToHomePage() {
    return (
        <div className='flex items-center'>
            <img src="/images/home.png" alt="Home Icon" className="w-5 h-5" />
            <Link href="/" className="text-purple-500 hover:underline text-lg">
                Home Page
            </Link>
        </div>
    );
}

export interface ImageProps {
    src: string;
    alt: string;
    name: string;
}

export function ImageCard({ src, alt, name }: ImageProps) {
    return (
        <div className="rounded-lg">
            <img src={src} alt={alt} className="w-100 h-100 object-cover rounded-full mb-2" />
            <p className="text-center text-white">{name}</p>
        </div>
    )
}

export function Title({ text }: { text: string }) {
    return (
        <h1 className="text-4xl font-bold mb-6 text-purple-500 text-center">
            {text}
            </h1>
    );
}