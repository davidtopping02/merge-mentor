import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Merge Mentor! 🚀</h1>
      <p className="text-lg text-gray-700 mb-6">
        Improve your code review skills by practicing with real PR challenges.
      </p>
      <Link href="/challenge/1">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
          Start Challenge 1
        </button>
      </Link>
    </div>
  );
}
