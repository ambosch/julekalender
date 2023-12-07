<script lang="ts">
  import TopDescription from "./lib/TopDescription.svelte";
  import AboutTheSongs from "./lib/AboutTheSongs.svelte";
</script>

<main class="container flex flex-col gap-y-8">
  <TopDescription />
  <div
    class="flex gap-y-10 lg:gap-y-0 lg:gap-x-10 flex-col lg:flex-row lg:h-screen"
  >
    <iframe
      class="min-h-[384px] lg:flex-1"
      width="100%"
      height="100%"
      title="spotify"
      style="border-radius:12px"
      src="https://open.spotify.com/embed/playlist/52jE7sLRoc71fLt1pNbRuO?utm_source=generator"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
    <AboutTheSongs className="min-h-[384px] lg:flex-1" />
  </div>
</main>
