export interface SeoMetrics {
  domainRating: number
  organicTraffic: number
  organicKeywords: number
  referringDomains: number
  topPages: TopPage[]
  topKeywords: TopKeyword[]
}
export interface TopPage {
  url: string
  traffic: number
  topKeyword: string
  position: number
}
export interface TopKeyword {
  keyword: string
  position: number
  volume: number
  traffic: number
}
