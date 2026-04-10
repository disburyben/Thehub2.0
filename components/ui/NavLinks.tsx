'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { label: 'Overview', href: '', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
  ) },
  { label: 'SEO Monitoring', href: '/seo', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-4-4"/></svg>
  ) },
  { label: 'Social Velocity', href: '/social', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12s-4.47 0-7 0a5 5 0 0 1-4.7-3.4L9 2l-2 6.6A5 5 0 0 1 2.3 12H2"/></svg>
  ) },
  { label: 'Asset Library', href: '/media', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
  ) },
]

export default function NavLinks({ clientSlug }: { clientSlug: string }) {
  const pathname = usePathname()
  
  return (
    <nav className="flex-1 px-4 py-8 space-y-2">
      {NAV.map(item => {
        const href = `/dashboard/${clientSlug}${item.href}`
        const isActive = item.href === ''
          ? pathname === href
          : pathname.startsWith(href)
          
        return (
          <Link 
            key={item.label} 
            href={href}
            className={`
              group flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300
              ${isActive 
                ? 'bg-brand/10 text-brand border border-brand/20 shadow-[0_0_15px_-5px_rgba(139,92,246,0.3)]' 
                : 'text-muted-foreground hover:text-white hover:bg-white/5 border border-transparent'}
            `}
          >
            <span className={`transition-colors duration-300 ${isActive ? 'text-brand' : 'text-muted-foreground group-hover:text-white'}`}>
              {item.icon}
            </span>
            <span className="tracking-tight">{item.label}</span>
            {isActive && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_rgba(139,92,246,1)]" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
