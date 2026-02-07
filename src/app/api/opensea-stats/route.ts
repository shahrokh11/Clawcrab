import { NextResponse } from "next/server"

export const revalidate = 30

export async function GET() {

  const slug = process.env.OPENSEA_COLLECTION_SLUG
  const apiKey = process.env.OPENSEA_API_KEY

  const res = await fetch(
    `https://api.opensea.io/api/v2/collections/${slug}/stats`,
    {
      headers: apiKey ? { "X-API-KEY": apiKey } : {},
      next: { revalidate: 30 },
    }
  )

  if (!res.ok) {
    return NextResponse.json({ error: "OpenSea failed" }, { status: 500 })
  }

  const data = await res.json()

  return NextResponse.json(data)
}
