<script>
  import StyledP from "./StyledP.svelte";
  import Modal from "./Modal.svelte";

  let showModal = false;
</script>

<Modal bind:showModal />
<div class="lg:w-2/3 self-center">
  <h1
    class="text-3xl xs:text-4xl md:text-5xl lg:text-7xl text-rose-400 font-extrabold font-mono mb-10 mt-10 tracking-tight leading-none"
  >
    Anne sin julekalender 2023
  </h1>
  <StyledP className="text-justify">
    Hver dag fra 1. desember til og med 24. desember kommer det ut en ny sang i
    julekalenderen. Alle låtene henger sammen med et overordnet tema, klarer du
    å gjette hva det er? Som før lover jeg at det ikke kommer noen julesanger i
    denne kalenderen. Nytt for årets kalender er at det ikke bare kan komme
    ukjente sanger. Send meg gjett på Messenger, LinkedIn, SMS, brevdue eller
    andre kanaler du vet at jeg sjekker (ikke snap altså &#129334;). Kanskje er
    det premie til vinneren. Gjettet må komme frem innen 24. desember for å
    telles med!
  </StyledP>
  <StyledP className="my-6">Enjoy, hilsen fra Anne</StyledP>
  <div class="w-full flex justify-center gap-x-4">
    <a
      class=""
      href="https://github.com/ambosch/julekalender"
      target="_blank"
      title="Take me to the source code!"
      ><img class="w-6" alt="Go to GitHub repo" src="github-mark.svg" /></a
    >
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events-->
    <img
      class="w-7 hover:cursor-pointer"
      alt="Easter egg"
      src="Easter_egg.svg"
      on:click={() => (showModal = true)}
    />
  </div>
</div>
