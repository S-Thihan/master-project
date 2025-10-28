import ProductList from "../components/products/ProductList"

function Home() {
  return <main className="mt-16">
    <section>
      <h2 className="text-2xl font-bold mb-6 text-center">NEW ARRIVALS</h2>
      <ProductList />
    </section>
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-center">BEST DEALS</h2>
      <ProductList />
    </section>

  </main>
}

export default Home