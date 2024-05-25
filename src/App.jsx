import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./container/Hero";

function App() {
  return (
    <main className="bg-[#0C0B08] h-screen">
      <Navbar />
      <section className="bg-[#0C0B08]">
        <Hero />
      </section>
    </main>
  );
}

export default App;
