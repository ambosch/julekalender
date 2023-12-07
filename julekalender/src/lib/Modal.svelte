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
  class="lg:w-10/12 rounded-lg backdrop:bg-rose-200 backdrop:bg-opacity-80 lg:p-10 relative"
>
  <!-- Close button borrowed from: https://tailwindcomponents.com/component/close-btn-->
  <button
    on:click={() => dialog.close()}
    type="button"
    class="absolute top-1 right-1 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
  <div class="lg:flex lg:flex-row lg:justify-around w-full">
    <div class="w-1/2 flex flex-col items-center gap-y-3">
      <img
        class="w-full rounded-2xl"
        src="_dd1c2aa0-eb6f-494c-9ff7-96f0359ddd0d.jpg"
        alt="Ripping off the night sky"
      />
      <p class="text-slate-700">
        <em>Escape the darkness.</em> Created with Dall E 3
      </p>
    </div>
    <div class="w-1/3">
      <img
        class="w-full rounded-2xl"
        src="_125c7784-5f90-4b93-907f-d8078c686060.jpg"
        alt="Brain on vacation"
      />
      <p class="text-slate-700">
        <em>Brain on vacation.</em> Created with Dall E 3
      </p>
    </div>
  </div>
</dialog>
