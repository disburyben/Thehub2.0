import { getClientConfig } from '@/lib/clients'
import StatCard from '@/components/ui/StatCard'
import BrainStatus from '@/components/ui/BrainStatus'

export default async function OverviewPage({ params }: { params: Promise<{ clientSlug: string }> }) {
  const { clientSlug } = await params
  const client = getClientConfig(clientSlug)

  let seo: Record<string, unknown> | null = null
  let social: Record<string, unknown> | null = null

  try {
    const base = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
    const [seoRes, socialRes] = await Promise.allSettled([
      fetch(`${base}/api/seo/${clientSlug}`, { next: { revalidate: 3600 } }),
      fetch(`${base}/api/social/${clientSlug}`, { next: { revalidate: 14400 } }),
    ])
    if (seoRes.status === 'fulfilled' && seoRes.value.ok) seo = await seoRes.value.json()
    if (socialRes.status === 'fulfilled' && socialRes.value.ok) social = await socialRes.value.json()
  } catch { /* data unavailable */ }

  return (
    <div className="space-y-12 max-w-7xl mx-auto">
      {/* Hero Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 animate-fade-in">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-brand/10 border border-brand/20">
            <span className="w-1 h-1 rounded-full bg-brand animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand">Node Active</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
            {client.name}
          </h1>
          <p className="text-muted-foreground flex items-center gap-2">
            <span className="text-sm font-medium tracking-tight opacity-70">{client.domain}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-xs font-mono uppercase tracking-widest opacity-50">Intelligence Matrix</span>
          </p>
        </div>

        <div className="hidden lg:block w-72">
          <BrainStatus />
        </div>
      </section>

      {/* SEO Section */}
      {seo && (
        <section className="animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] flex-1 bg-white/5" />
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/60 whitespace-nowrap">
              Search Performance Index
            </h2>
            <div className="h-[1px] w-12 bg-white/5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard label="Domain Rating" value={seo.domainRating as number} delta={2} />
            <StatCard label="Monthly Traffic" value={((seo.organicTraffic as number) ?? 0).toLocaleString()} delta={12} />
            <StatCard label="Active Keywords" value={((seo.organicKeywords as number) ?? 0).toLocaleString()} delta={-1} />
            <StatCard label="Referring Nodes" value={((seo.referringDomains as number) ?? 0).toLocaleString()} delta={5} />
          </div>
        </section>
      )}

      {/* Social Section */}
      {social && (
        <section className="animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] flex-1 bg-white/5" />
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/60 whitespace-nowrap">
              Social Velocity Reach
            </h2>
            <div className="h-[1px] w-12 bg-white/5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              label="Facebook Reach" 
              value={((social.facebook as Record<string, number>)?.reach ?? 0).toLocaleString()} 
              sub="Meta Global" 
              delta={8}
            />
            <StatCard 
              label="IG Impressions" 
              value={((social.instagram as Record<string, number>)?.impressions ?? 0).toLocaleString()} 
              sub="Insta Visual" 
              delta={24}
            />
            <StatCard 
              label="LinkedIn Pulse" 
              value={((social.linkedin as Record<string, number>)?.impressions ?? 0).toLocaleString()} 
              sub="B2B Network" 
              delta={3}
            />
          </div>
        </section>
      )}

      {/* Brain Status for Mobile (below content) */}
      <div className="lg:hidden animate-fade-in" style={{ animationDelay: '300ms' }}>
        <BrainStatus />
      </div>

      {(!seo && !social) && (
        <section className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="glass rounded-3xl p-12 text-center border-dashed border-white/5">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/40"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Awaiting Neural Uplink</h3>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto">
              No intelligence data streams detected for this node. Ensure API credentials are correctly configured in the vault.
            </p>
          </div>
        </section>
      )}
    </div>
  )
}
