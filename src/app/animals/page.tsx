import { SendToHomePage, Title } from "@/types/types";
import Image from "next/image";
import pelicanImage4 from "@/public/images/pelican4.jpg";



interface Animal {
    name: string;
    image: string;
    description: string;
}

const pelican: Animal = {
    name: "Pelican",
    image: "/images/pelican.jpg",
    description: "Pelicans (genus Pelecanus) are a genus of large water birds that make up the family Pelecanidae. They are characterized by a long beak and a large throat pouch used for catching prey and draining water from the scooped-up contents before swallowing. They have predominantly pale plumage, except for the brown and Peruvian pelicans. The bills, pouches, and bare facial skin of all pelicans become brightly coloured before the breeding season."
};

export default function AnimalsPage() {
    function AnimalCard({ name, image, description }: Animal) {
        return (
            <div className="flex border-3 rounded-4xl p-8 bg-gray-800">
                <div className="flex space-x-5">
                    <Image
                        src={pelicanImage4}
                        alt="Pelican"
                        className="rounded-3xl"
                        width={400}
                    />
                    <div className="flex flex-col">
                        <h1 className="text-6xl max-h-30">{name}</h1>
                        <hr className="border-t-2 border-white my-2" />
                        <p className="text-lg">{description}</p>
                    </div>
                </div>
            </div>

        );
    };

    return (
        <main className="flex flex-col">
            <SendToHomePage />
            <Title text="Animals(Pelicans)" />

            <div className="grid grid-cols-2 gap-10 p-10 mx-auto">
                <AnimalCard {...pelican} />
                <AnimalCard {...pelican} />
                <AnimalCard {...pelican} />
                <AnimalCard {...pelican} />
                <AnimalCard {...pelican} />
                <AnimalCard {...pelican} />
                <AnimalCard {...pelican} />
                <AnimalCard {...pelican} />
                <AnimalCard {...pelican} />
                <AnimalCard {...pelican} />
            </div>
        </main>
    );
}