<script lang="ts">
  import StyledP from "./StyledP.svelte";
  export let day_nr: string;
</script>

<div
  class="rounded-xl bg-rose-100 mx-4 max-h-80 overflow-y-hidden hover:overflow-y-auto"
>
  <StyledP className="font-bold text-left pl-5">{day_nr}. desember</StyledP>
  <StyledP className="text-left pl-5">Sangtittel - Artist</StyledP>
  <StyledP className="text-left pl-5 pb-5 pr-5"><slot /></StyledP>
</div>
