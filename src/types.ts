/* eslint-disable */
// @ts-nocheck
  export type HomePageResponse = {
    success: boolean
    data: Array<{
      navbar_category_totalHits?: number
      navbar_category?: Array<{
        title: string
        slug: string
      }>
      featured_articles_totalHits?: number
      featured_articles?: Array<{
        id: number
        title: string
        slug: string
        content: string
        description: string
        created_at: string
        updated_at: string
        image1: string
        image2: any
        is_featured: boolean
        is_trending: boolean
        category: number
        author: number
      }>
      trending_articles_totalHits?: number
      trending_articles?: Array<{
        id: number
        title: string
        slug: string
        content: string
        description: string
        created_at: string
        updated_at: string
        image1: string
        image2: any
        is_featured: boolean
        is_trending: boolean
        category: number
        author: number
      }>
      latest_articles_totalHits?: number
      latest_articles?: Array<{
        id: number
        title: string
        slug: string
        content: string
        description: string
        created_at: string
        updated_at: string
        image1: string
        image2: any
        is_featured: boolean
        is_trending: boolean
        category: number
        author: number
      }>
      articles_categorized_totalHits?: number
      articles_categorized?: {
        category_article_data: Array<{
          category_title: string
          articles: Array<{
            id: number
            title: string
            slug: string
            content: string
            description: string
            created_at: string
            updated_at: string
            image1: string
            image2: any
            is_featured: boolean
            is_trending: boolean
            category: number
            author: number
          }>
        }>
      }
    }>
  }
  