import { NextResponse } from "next/server";

const COLLECTION = "clawcrabnft"; 
const API_KEY = process.env.OPENSEA_API_KEY!;

export async function GET() {
  try {
    const res = await fetch(
      `https://api.opensea.io/api/v2/collections/${COLLECTION}/stats`,
      {
        headers: {
          "X-API-KEY": API_KEY,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();
    const s = data?.stats || {};

    const floor = s.floor_price;
    const change = s.one_day_change;
    const volume = s.one_day_volume;
    const sales = s.one_day_sales;

    const messages: string[] = [];

    if (floor) messages.push(`💰 Floor price: ${floor} ETH`);
    if (change) messages.push(`📈 24h change: ${(change * 100).toFixed(1)}%`);
    if (volume) messages.push(`🌊 24h volume: ${volume.toFixed(2)} ETH`);
    if (sales) messages.push(`🦀 24h sales: ${sales} crabs minted/traded`);

    messages.push("🤖 Autonomous crab agents analyzing market flow…");
    messages.push("🦀 Colony reacting to onchain signals…");

    return NextResponse.json({ messages });
  } catch (err) {
    return NextResponse.json({
      messages: [
        "⚠️ Failed to fetch live OpenSea stats.",
        "🦀 Crab agent switching to fallback mode…",
      ],
    });
  }
}
