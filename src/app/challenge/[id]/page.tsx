import { notFound } from 'next/navigation';

export default async function Challenge({ params }: { params: { id: string } }) {
  // Await the params for dynamic routing
  const { id } = await params;

  if (isNaN(Number(id))) return notFound();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold">Challenge {id}</h1>
      <p className="text-lg text-gray-700">Here you will review a PR with errors.</p>
    </div>
  );
}
