import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center pt-40">

      <h1 className="text-5xl font-bold mb-8">
        🎬 AI Movie Explorer
      </h1>

      <SearchBar />

    </div>
  );
}