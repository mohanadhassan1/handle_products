import Product from "./product/page"

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center p-8">
      <Product />
    </main>
  );
}