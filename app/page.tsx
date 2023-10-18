import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section className="bg-slate-200 min-h-screen">
      <Navbar />
      <main className="p-5">
        <div className="bg-white p-5 shadow rounded">
          <h1 className="text-3xl font-bold uppercase">Practo Demo</h1>
          <p className="text-lg text-muted-foreground">
            This is a demo app for Practo.
          </p>
        </div>
      </main>
    </section>
  );
}
