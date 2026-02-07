import { NextResponse } from "next/server"

export async function GET() {
  const slug = process.env.OPENSEA_COLLECTION_SLUG
  const apiKey = process.env.OPENSEA_API_KEY

  const res = await fetch(
    `https://api.opensea.io/api/v2/collections/${slug}/stats`,
    {
      headers: apiKey ? { "X-API-KEY": apiKey } : {},
      next: { revalidate: 60 },
    }
  )

  const json = await res.json()

  const change =
    json?.stats?.one_day_change !== undefined
      ? Math.round(json.stats.one_day_change * 100)
      : null

  return NextResponse.json({
    message:
      change !== null ? `🚀 Today price %${change}` : null,
  })
}
