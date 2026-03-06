export default function ReviewList({ reviews }) {
  if (!reviews) return null;

  return (
    <div className="grid md:grid-cols-2 gap-6">
  {reviews.map((r, i) => (
    <div
      key={i}
      className="bg-slate-800 p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-center gap-3 mb-3">
        <img
          src={`https://i.pravatar.cc/40?img=${i + 1}`}
          className="rounded-full"
        />

        <h4 className="font-semibold">
          {r.author}
        </h4>
      </div>

      <p className="text-gray-300">
        {r.content.slice(0, 200)}...
      </p>
    </div>
  ))}
</div>
  );
}