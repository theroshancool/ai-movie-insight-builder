export default function SentimentCard({ sentiment }) {
const score = sentiment?.score ?? 0;

  const percent = Math.round(score * 100);

  return (
    <div className="bg-slate-800 p-6 rounded-xl w-full">
      <h3 className="text-lg font-bold mb-4">
        AI Sentiment
      </h3>

      <div className="w-full bg-gray-700 h-3 rounded">
        <div
          className="bg-green-500 h-3 rounded transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="mt-3 text-gray-300">
        {sentiment?.label} ({percent}%)
      </p>
    </div>
  );
}