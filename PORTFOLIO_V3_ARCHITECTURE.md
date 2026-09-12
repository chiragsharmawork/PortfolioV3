# Chirag Sharma - Portfolio V3 (The Masterpiece)

## 🏗️ Core Architecture & Tech Stack
- **Framework:** Next.js 16.3 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + `next-themes` (Dark/Light mode)
- **Animations:** Framer Motion (Cinematic Page Transitions)
- **3D Graphics:** Three.js + React Three Fiber / Drei (WebGL Particles)
- **Audio:** Native Web Audio API (Zero-dependency Synthesizer)
- **Content:** MDX (Next-MDX-Remote)
- **Database / API:** OpenRouter (Llama 3.1), Spotify Web API

---

## 📂 File Structure & Detailed Components

### 1. Global Layout & Transitions
- **`src/app/layout.tsx`**: The absolute root of the app. It houses the global providers (`ThemeProvider`), the `Navbar`, `Footer`, `CustomCursor`, `ScrollProgress`, and globally persistent tools like `AstaAssistant` and `CommandPalette`.
- **`src/components/layout/PageTransition.tsx`**: Uses Framer Motion's `AnimatePresence` with `mode="wait"`. It takes the current URL `pathname` as a key. When you navigate, it intercepts the route change, fades/blurs out the old page, and slides in the new page.

### 2. ASTA Intelligence (AI Chatbot)
- **`src/app/api/chat/route.ts`**: A serverless POST API route that communicates with OpenRouter (using `meta-llama/llama-3.1-8b-instruct:free`). It is primed with a highly specific system prompt about Chirag Sharma's identity, skills, and boundaries.
- **`src/components/asta/AstaAssistant.tsx`**: The frontend UI. A persistent floating button at the bottom right. When opened, it features a glassmorphic chat UI with typing indicators, suggested queries, and synthesized UI sounds (`useSoundEffects`).

### 3. CHIRAG-OS (Hidden Terminal)
- **`src/app/terminal/page.tsx`**: A completely hidden `/terminal` route. It mimics a Linux bash environment. It parses commands like `help`, `whoami`, `projects`, `clear`, and `sudo`.
- **Styling**: Uses pure Matrix `#0F0` green for the prompt and white for user input, giving it an authentic hacker aesthetic.

### 4. Spotify "Deep Work" API integration
- **`scripts/get-spotify-token.js`**: A backend script used once to generate a `SPOTIFY_REFRESH_TOKEN` via OAuth2, bypassing Spotify's strict localhost security by using `https://google.com` as a redirect URI.
- **`src/app/api/spotify/route.ts`**: Fetches real-time "Now Playing" data. Uses `export const dynamic = "force-dynamic"` to bypass Next.js aggressive caching.
- **`src/components/layout/SpotifyWidget.tsx`**: Polling the API every 15 seconds. If music is playing, it displays the Album Art (rotating like a vinyl record) and a "Working Session running" timer that counts up your active deep work seconds.

### 5. WebGL 3D Particles
- **`src/components/canvas/ParticleNetwork.tsx`**: Utilizes `@react-three/fiber` and `@react-three/drei`. Renders thousands of points mapped to a mathematical sphere. On mobile, opacity is reduced to `20%` to ensure text readability, while desktop retains full `100%` opacity. Placed inside the `Hero.tsx`.

### 6. Synthesized UI Audio
- **`src/hooks/useSoundEffects.ts`**: Instead of bloated `.mp3` files, this uses the browser's raw `AudioContext`. It mathematically synthesizes frequencies to create "Swoosh" (Page open), "Click" (Button press), and "Mechanical Typing" sounds. Zero lag, zero download size.

### 7. MDX Content Engine
- **`src/app/work/[slug]/page.tsx` & `src/app/notes/[slug]/page.tsx`**: Dynamically generates routes by reading `.mdx` files from `src/content/work` and `src/content/notes`.
- Uses `next-mdx-remote/rsc` to compile markdown into React components, allowing us to embed interactive code blocks and custom UI right inside blog posts.

### 8. The Konami Code (Easter Egg)
- **`src/hooks/useKonamiCode.ts`**: A global keyboard event listener tracking the last 10 keystrokes.
- **`src/components/layout/EasterEggProvider.tsx` & `MatrixRain.tsx`**: If the Konami sequence (`Up, Up, Down, Down, Left, Right, Left, Right, B, A`) is entered, it triggers a fullscreen canvas overlay rendering falling digital Matrix rain.

### 9. Environment Architecture
Secrets are securely stored in Netlify's environment variables dashboard and never committed to GitHub:
- `SPOTIFY_CLIENT_ID` / `SECRET` / `REFRESH_TOKEN`
- `OPENROUTER_API_KEY`
- `DISCORD_WEBHOOK_URL` (For the Contact Form)

---

## 🚀 How to Run & Maintain
1. **Local Dev:** `npm run dev` (Runs on `localhost:3000`)
2. **Build Test:** `npm run build` (Ensures zero TypeScript/ESLint errors before deployment)
3. **Deploy:** Simply push to the `main` branch on GitHub. Netlify is connected to the repo and will automatically build and publish the live site within 2 minutes.
