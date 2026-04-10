'use client'

export default function BrainStatus() {
  return (
    <div className="glass rounded-2xl p-6 relative overflow-hidden group">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/></svg>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background animate-bounce" />
          </div>
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-white">HAVOC BRAIN</div>
            <div className="text-[10px] text-emerald-400 font-medium tracking-widest uppercase">Operational</div>
          </div>
        </div>
        <div className="text-[10px] font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded">
          TS-4.0.2-SEC
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
            <span>Neural Synapse Load</span>
            <span>24%</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-brand w-1/4 rounded-full transition-all duration-1000 group-hover:w-1/3" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Active Agents</div>
            <div className="text-xl font-bold text-white">12</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Uptime</div>
            <div className="text-xl font-bold text-white">99.9%</div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5">
          <div className="text-[9px] font-mono text-brand/80 animate-pulse">
            > Monitoring local edge nodes...
          </div>
          <div className="text-[9px] font-mono text-muted-foreground mt-1">
            > Last packet signature: 0x8F4E2...
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand/10 blur-3xl rounded-full" />
    </div>
  )
}
