import { getAllClients } from '@/lib/clients'
import ClientCard from '@/components/ui/ClientCard'

export default function DashboardIndex() {
  const clients = getAllClients()
  
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center p-8">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 -left-48 w-[500px] h-[500px] bg-brand/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 -right-48 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full" />
      
      <div className="relative z-10 w-full max-w-5xl">
        <header className="mb-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full mb-6 border-brand/20">
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand">Havoc Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-4 text-gradient">
            Command Centre
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Select a neural node to begin intelligence monitoring.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, i) => (
            <ClientCard 
              key={client.slug} 
              {...client} 
              index={i} 
            />
          ))}
        </div>

        <footer className="mt-20 text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-muted-foreground/30">
            Version 4.0.2 // encrypted session
          </div>
        </footer>
      </div>
    </div>
  )
}
