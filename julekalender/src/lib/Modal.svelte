<script lang="ts">
  export let showModal: boolean;
  let dialog: HTMLDialogElement;

  $: if (dialog && showModal) dialog.showModal();
</script>

<!--Working from this example: https://svelte.dev/examples/modal-->

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
  class="lg:w-10/12 rounded-lg backdrop:bg-rose-200 backdrop:bg-opacity-80 p-5 md:p-10 relative"
>
  <!-- Close button borrowed from: https://tailwindcomponents.com/component/close-btn-->
  <button
    on:click={() => dialog.close()}
    type="button"
    class="absolute top-1 right-1 bg-white rounded-md p-2 inline-flex items-start md:items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
  >
    <span class="sr-only">Close modal</span>
    <!-- Heroicon name: outline/x -->
    <svg
      class="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
  <div class="flex flex-col gap-y-5 md:flex-row md:justify-around w-full">
    <div
      class="w-full md:w-1/2 lg:w-1/3 flex flex-row md:flex-col gap-x-3 md:gap-y-3"
    >
      <img
        class="w-1/2 md:w-full rounded-2xl"
        src="_dd1c2aa0-eb6f-494c-9ff7-96f0359ddd0d.jpg"
        alt="Ripping the night sky."
      />
      <p class="text-slate-700 self-center">
        <em>Ripping the night sky.</em> Created with DALL·E 3
      </p>
      <div class="hidden md:block text-start">
        <span class="text-slate-700 text-sm">
          <em>Prompt:</em>
          The image is covered by a dark blue almost black night sky with stars.
          A cat paw is punching through the night sky from behind, creating a narrow
          diagonal tear from the top left corner towards the bottom right corner,
          ripping the sky like thick paper. Through the rip, we see a the pool side
          of a holiday resort in bright pastel colors that is revealed. It is daytime
          at the resort, and the sun is up, and the sky is light blue. The aesthetic
          of the image is old school comic book.
        </span>
      </div>
    </div>
    <div
      class="w-full md:w-1/3 self-end md:self-start flex flex-row-reverse md:flex-col gap-x-3 md:gap-y-3"
    >
      <img
        class="w-1/2 md:w-full rounded-2xl"
        src="_125c7784-5f90-4b93-907f-d8078c686060.jpg"
        alt="Brain on vacation."
      />
      <p class="text-slate-700 self-center">
        <em>Brain on vacation.</em> Created with DALL·E 3
      </p>
      <div class="hidden md:block text-start">
        <span class="text-slate-700 text-sm">
          <em>Prompt:</em>
          The brain organ has got stickman arms and legs. It is laying in a sunbed
          on a beach on a tropical island. It is wearing sunglasses and sipping on
          a cocunut drink.
        </span>
      </div>
    </div>
  </div>
</dialog>
