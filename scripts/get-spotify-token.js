const readline = require('readline');
const crypto = require('crypto');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("🎵 Spotify Refresh Token Generator 🎵\n");

rl.question('1. Enter your Client ID: ', (clientId) => {
  rl.question('2. Enter your Client Secret: ', (clientSecret) => {
    
    const scope = 'user-read-currently-playing user-read-recently-played';
    const redirectUri = 'https://google.com'; // Bypasses Spotify's http/localhost security errors!
    
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    
    console.log("\n=========================================");
    console.log("👉 STEP 1: Click this URL to authorize:");
    console.log(authUrl);
    console.log("=========================================\n");
    console.log("After authorizing, you will be redirected to the Google homepage.");
    
    rl.question('👉 STEP 2: Paste the ENTIRE URL you were redirected to here: ', async (redirectedUrl) => {
      try {
        const url = new URL(redirectedUrl);
        const code = url.searchParams.get('code');
        
        if (!code) {
          console.log("❌ Error: Could not find 'code' in the URL.");
          rl.close();
          return;
        }

        const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
        
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectUri
          })
        });

        const data = await response.json();
        
        if (data.refresh_token) {
          console.log("\n✅ SUCCESS! Here is your Refresh Token:\n");
          console.log(data.refresh_token);
          console.log("\nAdd this to your .env.local file as SPOTIFY_REFRESH_TOKEN=");
        } else {
          console.log("\n❌ Failed to get token. Error:", data);
        }
      } catch (e) {
        console.log("❌ Error processing URL. Make sure you pasted the full https://google.com/?code=... link.");
      }
      rl.close();
    });
  });
});
