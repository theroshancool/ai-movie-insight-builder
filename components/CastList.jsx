export default function CastList({ cast }) {
  if (!cast) return null;

  return (
    <><h2 className="text-2xl font-bold mb-5">Top Cast</h2><div className="flex gap-6 overflow-x-auto pb-4">
          {cast.map((actor, i) => (
              
              <div
                  key={i}
                  className="flex flex-col items-center min-w-[120px]"
              >
                  <img
                      src={`https://i.pravatar.cc/150?img=${i + 10}`}
                      className="w-20 h-20 rounded-full" />

                  <p className="mt-2 text-sm font-semibold">
                      {actor.name}
                  </p>

                  <p className="text-xs text-gray-400">
                      {actor.role}
                  </p>
              </div>
          ))}
      </div></>
  );
}