import Link from 'next/link'
import { getClientConfig } from '@/lib/clients'
import NavLinks from '@/components/ui/NavLinks'

export default async function DashboardLayout({ children, params }: { children: React.ReactNode; params: Promise<{ clientSlug: string }> }) {
  const { clientSlug } = await params
  let client
  try { 
    client = getClientConfig(clientSlug) 
  } catch { 
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="glass p-8 rounded-2xl text-center">
          <div className="text-brand text-2xl font-bold mb-2">Neural Link Failed</div>
          <div className="text-muted-foreground text-sm">Client node selection invalid or offline.</div>
          <Link href="/dashboard" className="mt-6 inline-block text-xs font-bold uppercase tracking-widest text-brand hover:text-white transition-colors">Return to Hub</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground selection:bg-brand/30">
      {/* Sidebar - Glassmorphic fixed sidebar */}
      <aside className="w-64 border-r border-white/5 bg-white/[0.02] backdrop-blur-xl flex flex-col fixed inset-y-0 left-0 z-40">
        <div className="px-8 py-10 border-b border-white/5">
          <Link href="/dashboard" className="group block">
            <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-muted-foreground/50 group-hover:text-brand transition-colors mb-1">Havoc // Brain</div>
            <div className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">{client.name}</div>
          </Link>
        </div>
        
        <NavLinks clientSlug={clientSlug} />
        
        <div className="p-8 border-t border-white/5">
          <Link href="/dashboard" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-brand"><path d="m15 18-6-6 6-6"/></svg>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-white transition-colors">Terminal Hub</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen relative">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />
        
        {/* Topbar */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-10 h-20">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/60">Live Intelligence Stream</span>
          </div>
          
          <div className="flex items-center gap-8">
             <div className="flex flex-col items-end">
              <span className="text-xs font-bold text-white tracking-tight">{client.domain}</span>
              <span className="text-[9px] font-mono text-muted-foreground uppercase">{new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })} // SYNC-OK</span>
            </div>
            <div className="w-10 h-10 rounded-xl glass flex items-center justify-center border-brand/20 group hover:border-brand/50 transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            </div>
          </div>
        </header>

        <main className="flex-1 p-10 relative z-10">
          <div className="animate-fade-in">
            {children}
          </div>
        </main>

        <footer className="p-10 border-t border-white/5 text-center">
          <div className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-[0.3em]">
            HAVOC SOLUTIONS // SECURE DASHBOARD v4.0.2 // ALL RIGHTS RESERVED
          </div>
        </footer>
      </div>
    </div>
  )
}
