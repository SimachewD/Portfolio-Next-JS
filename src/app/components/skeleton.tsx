export default function Skeleton({ width = "w-full", height = "h-4" }) {
  return (
    <div
      className={`${width} ${height} bg-gradient-to-r from-blue-950 via-blue-950 to-slate-900 animate-pulse rounded-lg mb-4 mx-8 xl:mx-24 opacity-80`}
    ></div>
  );
}
