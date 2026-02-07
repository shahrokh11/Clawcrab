import { NextResponse } from "next/server"

export async function GET() {

  
  const stats = await fetch("http://localhost:3000/api/opensea-stats")
    .then(r => r.json())

  const floor = stats?.stats?.floor_price
  const change = stats?.stats?.one_day_change

  let messages = []

  if (floor) {
    messages.push(`💰 Floor price now ${floor} ETH`)
  }

  if (change) {
    messages.push(`🚀 Today price ${Math.round(change * 100)}%`)
  }

  
  messages.push("🦞 Crab energy detected.")

  return NextResponse.json({
    messages
  })
}
