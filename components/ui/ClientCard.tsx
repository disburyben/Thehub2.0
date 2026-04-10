'use client'
import Link from 'next/link'

interface Props {
  name: string;
  slug: string;
  domain: string;
  index: number;
}

export default function ClientCard({ name, slug, domain, index }: Props) {
  return (
    <Link 
      href={`/dashboard/${slug}`}
      className="group relative p-6 glass rounded-2xl overflow-hidden transition-all duration-500 hover:border-brand/50 hover:bg-white/[0.08] hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand/60 mb-2 group-hover:text-brand transition-colors">
          {domain}
        </div>
        <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-gradient">
          {name}
        </h3>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
            Enter Dashboard
          </span>
          <div className="w-8 h-8 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </div>
        </div>
      </div>

      {/* Hover Light Streak */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] transition-transform pointer-events-none" />
    </Link>
  )
}
