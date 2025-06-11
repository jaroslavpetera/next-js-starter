import Link from 'next/link';
import Card from '@/types/types';

export default function HomePage() {
  return (
    <main className="flex flex-col bg-dark min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6 text-purple-500 text-center">This is my testing </h1>

      <div className="grid grid-cols-3 justify-items-center p-10">
        <Card title="Tic Tac Toe" description="Here you can play a quick Tic Tac Toe game!" link="/tic-tac-toe" />
        <Card title="Food table" description='Here you can see some food items!' link="/food-table" />
        <Card title="Pictures" description="Here you can see some pictures!" link="/pictures" />
      </div>
    </main>
  );
}
