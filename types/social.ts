export interface SocialMetrics {
  facebook: PlatformMetrics
  instagram: PlatformMetrics
  linkedin: PlatformMetrics
}
export interface PlatformMetrics {
  impressions: number
  reach: number
  engagements: number
  followers: number
  engagementRate: number
}
