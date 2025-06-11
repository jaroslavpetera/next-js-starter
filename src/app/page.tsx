import Link from 'next/link';
import Card from '@/types/types';
import { Title } from '@/types/types';

export default function HomePage() {
  return (
    <main className="flex flex-col bg-dark min-h-screen p-6">
      <Title text="This is my testing" />

      <div className="grid grid-cols-3 justify-items-center p-10">
        <Card title="Tic Tac Toe" description="Here you can play a quick Tic Tac Toe game!" link="/tic-tac-toe" src="/images/tic.png" alt="Tic-Tac-Toe" />
        <Card title="Food table" description='Here you can see some food items!' link="/food-table" src="/images/food.png" alt="Food" />
        <Card title="Pictures" description="Here you can see some pictures!" link="/pictures" src="images/pic.png" alt="Pic" />
        <Card title="To Do List" description="Here you can manage your tasks!" link="/todo-list" src="/images/todo.png" alt="ToDo" />
      </div>
    </main>
  );
}
