<script lang="ts">
  export let className: string = "";
</script>

<p class="text-gray-600 text-xl my-6 {className}"><slot /></p>
<p>Hello</p>
