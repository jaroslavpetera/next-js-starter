import Card from '@/types/types';
import { Title } from '@/types/types';

export default function HomePage() {
  return (
    <main className="flex flex-col bg-dark min-h-screen p-6">
      <Title text="My Next.js learning project" />

      <div className="grid grid-cols-3 justify-items-center p-10 space-y-20">
        <Card title="Tic Tac Toe" description="Here you can play a quick Tic Tac Toe game!" link="/tic-tac-toe" src="/images/tic.png" alt="Tic-Tac-Toe" />
        <Card title="Food table" description='Here you can see some food items!' link="/food-table" src="/images/food.png" alt="Food" />
        <Card title="Pictures" description="Here you can see some pictures!" link="/pictures" src="images/pic.png" alt="Pic" />
        <Card title="To Do List" description="Here you can manage your tasks!" link="/todo-list" src="/images/todo.png" alt="ToDo" />
        <Card title="Animals" description="Here you can see some awesome animals!" link="/animals" src="/images/turtle.png" alt="Animals" />
      </div>
    </main>
  );
}
