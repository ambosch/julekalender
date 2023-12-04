<script lang="ts">
  import TailwindCss from "./lib/TailwindCSS.svelte";
  import TopDescription from "./lib/TopDescription.svelte";
  import AboutTheSongs from "./lib/AboutTheSongs.svelte";
</script>

<TailwindCss />
<main class="container flex flex-col gap-y-8">
  <TopDescription />
  <div
    class="bg-blue-500 w-full h-96 flex flex-col overflow-auto relative rounded-2xl"
  >
    <div class="w-full h-20 sticky top-[304px] z-10">
      <div class="h-full bg-gradient-to-b from-transparent to-green-400"></div>
    </div>
    <div class="bg-green-400 w-full text-xl absolute pb-16 pt-6 px-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada,
      nisl id convallis semper, tellus quam faucibus ligula, sit amet hendrerit
      turpis ipsum quis ante. Mauris efficitur facilisis turpis, feugiat mollis
      nisl auctor quis. Curabitur sed ipsum auctor, ornare leo in, facilisis
      velit. Maecenas urna libero, egestas et convallis eget, placerat quis
      nisl. Nullam vulputate ultricies felis non tempor. Curabitur et urna eu
      ante ultricies porta vel rhoncus purus. Sed lacinia tellus sed odio
      sollicitudin, sit amet convallis est ullamcorper. Vivamus malesuada velit
      et leo mollis gravida. Aliquam in elit sit amet orci rutrum consectetur eu
      at lectus. Donec sagittis tincidunt libero, nec tincidunt est finibus
      quis. Vestibulum finibus mi eget pellentesque venenatis. Fusce a elit a
      tortor mattis placerat. Aliquam nec urna est. Ut consectetur nunc quis
      magna condimentum, eget elementum nisi aliquet. Cras velit magna, rhoncus
      at nisl nec, feugiat porttitor eros. In maximus, arcu a viverra
      condimentum, urna turpis congue turpis, vel aliquam odio neque at leo.
      Nulla pellentesque tincidunt erat sed eleifend. Phasellus vulputate eu leo
      sed vehicula. Vestibulum nisi lectus, suscipit eu ullamcorper eget,
      vehicula at dolor. Cras vestibulum quam quis luctus blandit. Duis at
      turpis mauris. Donec in ex id neque porttitor accumsan et sit amet dolor.
      Aliquam cursus ipsum quis quam iaculis pulvinar. Vestibulum ante ipsum
      primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc
      sodales ipsum ut fringilla tempor. Vivamus eu malesuada nulla. Etiam
      vestibulum molestie enim sit amet porttitor. Curabitur quam dolor, commodo
      a dui ac, fringilla sagittis turpis. Phasellus egestas mi nisl, eu
      vehicula elit maximus ut. Mauris accumsan laoreet lobortis. Cras non purus
      sit amet lectus ornare auctor sit amet a mauris. Pellentesque non augue
      tortor. Cras porta laoreet convallis. Vivamus ornare consectetur ligula
      vitae varius. Nam viverra lorem ipsum, a rutrum odio eleifend pharetra.
      Mauris rutrum neque in ultricies iaculis. Quisque et auctor erat, id
      finibus lorem. Donec eu varius felis, et porta arcu. Proin sit amet
      pulvinar orci, quis auctor tortor. Nullam id tellus ac sapien molestie
      mollis in at lorem. Morbi vitae sapien sed nisl porttitor pharetra id vel
      tortor. Nulla eget lectus semper ex elementum porta. Cras quis eros felis.
      Nulla nec ipsum in ipsum lacinia rhoncus. Maecenas pretium odio ac nisi
      interdum, eu lacinia augue tristique. Quisque scelerisque eros at ante
      dapibus, vel sodales augue porta. Suspendisse a neque a risus mattis
      imperdiet sit amet sed tortor. Nullam cursus venenatis urna, quis feugiat
      orci tristique id. Sed accumsan dapibus purus eu elementum. Ut vel ex eu
      tortor convallis congue vel ut ex. Etiam dolor lectus, venenatis ac
      bibendum id, vehicula a risus. In sed dui sit amet ante viverra vehicula.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Pellentesque feugiat augue hendrerit lacus egestas
      aliquet. Maecenas rhoncus felis at leo molestie, at elementum metus
      luctus. Vivamus pretium mauris et purus ornare, nec aliquet felis
      venenatis. Vivamus dui velit, congue a sodales sit amet, volutpat quis
      lorem.
    </div>
  </div>
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
  <div
    class="flex gap-y-4 lg:gap-y-0 lg:gap-x-4 flex-col lg:flex-row lg:h-screen"
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
