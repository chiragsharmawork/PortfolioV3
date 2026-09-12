import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!client_id || !client_secret || !refresh_token) {
    return NextResponse.json({ isPlaying: false, message: "Spotify not configured" });
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
      cache: 'no-store' // Cache token for 1 hour
    });

    const { access_token } = await response.json();

    const nowPlaying = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-store' // Revalidate playing status every 15 seconds
    });

    if (nowPlaying.status === 204 || nowPlaying.status > 400) {
      return NextResponse.json({ isPlaying: false });
    }

    const song = await nowPlaying.json();

    if (song.item === null) {
      return NextResponse.json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(", ");
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return NextResponse.json({
      isPlaying,
      title,
      artist,
      albumImageUrl,
      songUrl,
    });
  } catch (error) {
    console.error("Spotify error:", error);
    return NextResponse.json({ isPlaying: false });
  }
}
