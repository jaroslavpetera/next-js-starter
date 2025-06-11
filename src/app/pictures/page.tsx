import { SendToHomePage, ImageCard, Title } from '@/types/types';

export default function PicturesPage() {
    return (
        <main className="flex flex-col bg-dark">
            <SendToHomePage />

            <Title text="The Best Animals!" />

            <div className="flex flex-col bg-dark min-h-screen p-6 max-w-2/3 mx-auto">
                <h1 className="text-2xl font-bold mb-6 text-blue-500">
                    Here are the best Underwater animals!
                </h1>

                <div className="grid grid-cols-3 gap-5 items-center justify-items-center">
                    <ImageCard src="/images/beluga.jpg" alt="Beluga" name="Beluga" />
                    <ImageCard src="/images/manatee.jpg" alt="Manatee" name="Manatee" />
                    <ImageCard src="/images/seal.jpg" alt="Seal" name="Seal" />
                </div>
            </div>

        </main>
    );
}