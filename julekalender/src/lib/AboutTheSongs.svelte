<script lang="ts">
  import data from "../SongDescriptions.json";
  import SongDescCard from "./SongDescCard.svelte";
  const descriptions = data.descriptions;
  export let className: string;
</script>

<div
  class="{className} bg-rose-400 rounded-2xl flex flex-col gap-y-6 pb-6 overflow-y-auto sm:[overflow-anchor:top] h-fit max-h-screen"
>
  <h2
    class=" text-gray-900 pt-6 px-2 xs:px-3 font-mono font-extrabold text-2xl xs:text-3xl"
  >
    Litt snacks om de valgte låtene
  </h2>
  {#each Object.entries(descriptions) as [key_date, desc]}
    <div class="">
      <SongDescCard day_nr={key_date}>{@html desc}</SongDescCard>
    </div>
  {/each}
</div>
