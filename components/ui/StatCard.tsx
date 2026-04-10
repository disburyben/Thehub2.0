interface Props { 
  label: string; 
  value: string | number; 
  delta?: number; 
  sub?: string 
}

export default function StatCard({ label, value, delta, sub }: Props) {
  return (
    <div className="relative group p-6 glass rounded-2xl overflow-hidden animate-fade-in transition-all duration-500 hover:border-brand/50 hover:bg-white/[0.08] hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)]">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand/10 blur-[100px] rounded-full group-hover:bg-brand/20 transition-all duration-700" />
      
      {/* Icon/Decoration */}
      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
          <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
        </svg>
      </div>

      <div className="space-y-4 relative z-10">
        <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
          {label}
        </div>
        
        <div className="flex items-baseline gap-2">
          <div className="text-4xl font-bold tracking-tighter text-white drop-shadow-sm">
            {value}
          </div>
          {sub && (
            <div className="text-[10px] font-semibold text-brand-light/70 uppercase tracking-widest bg-brand/10 px-2 py-0.5 rounded-full border border-brand/20">
              {sub}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          {delta !== undefined && (
            <div className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-1 rounded-md border transition-all duration-300 ${
              delta >= 0 
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
            }`}>
              {delta >= 0 ? '↑' : '↓'} {Math.abs(delta)}%
            </div>
          )}
          
          <div className="flex-1 h-[1px] bg-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand to-transparent w-1/2 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </div>
        </div>
      </div>
    </div>
  )
}
