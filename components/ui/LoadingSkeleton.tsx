export default function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-12 w-64 bg-white/5 rounded-2xl" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="h-32 glass rounded-2xl" />
        ))}
      </div>
      <div className="h-64 glass rounded-2xl" />
    </div>
  )
}
