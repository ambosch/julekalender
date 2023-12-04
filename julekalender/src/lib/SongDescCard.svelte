<script lang="ts">
  import StyledP from "./StyledP.svelte";
  export let day_nr: string;
</script>

<div
  class="rounded-xl bg-rose-100 mx-4 h-60 md:h-72 lg:h-96 xl:h-80 2xl:h-72 overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto relative flex flex-col"
>
  <div class="w-full h-10 sticky top-[200px] z-20 md:hidden">
    <div class="h-full bg-gradient-to-b from-transparent to-rose-100"></div>
  </div>
  <StyledP className="font-bold text-left pl-5 py-6 absolute z-10"
    >{day_nr}. desember</StyledP
  >
  <StyledP className="text-left pl-5 pb-11 lg:pb-5 pr-6 absolute top-[76px]"
    ><slot /></StyledP
  >
</div>
