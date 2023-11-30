<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import TailwindCss from "./lib/TailwindCSS.svelte";
  import TopDescription from "./lib/TopDescription.svelte";
  import AboutTheSongs from "./lib/AboutTheSongs.svelte";
</script>

<TailwindCss />
<main class="container flex flex-col gap-y-8">
  <TopDescription />
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p> -->
  <div class="flex gap-x-4 h-screen">
    <iframe
      class="flex-1"
      width="100%"
      height="100%"
      title="spotify"
      style="border-radius:12px"
      src="https://open.spotify.com/embed/playlist/52jE7sLRoc71fLt1pNbRuO?utm_source=generator"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
    <AboutTheSongs className="flex-1" />
  </div>
</main>

<style>
  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  } */
  /* .songs {
    display: flex;
    flex-direction: columns;
  }
  iframe {
    min-width: 700px;
    width: 70%;
    max-width: 900px;
  } */
</style>
