import clientsJson from '@/config/clients.json'
import { ClientConfig } from '@/types/client'

export function getClientConfig(slug: string): ClientConfig {
  const client = (clientsJson as ClientConfig[]).find(c => c.slug === slug)
  if (!client) throw new Error(`Client not found: ${slug}`)
  return client
}

export function getAllClients(): ClientConfig[] {
  return clientsJson as ClientConfig[]
}
