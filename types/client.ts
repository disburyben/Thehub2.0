export interface ClientConfig {
  slug: string
  name: string
  domain: string
  supermetrics: {
    facebookAccountId: string
    instagramAccountId: string
    linkedinAccountId: string
  }
  cloudinary: { folderPrefix: string }
}
