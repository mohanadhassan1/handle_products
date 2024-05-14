import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-9xl font-bold mb-4 text-red-500">404</h1>
        <p className="text-lg text-gray-600 mb-8 text-red-500">Not found.</p>
        <Link href="/" className="text-blue-500 hover:underline">Go back to home page </Link>
      </div>
    </>
  );
};

export default NotFound;