<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';

</script>

<div class="layout min-h-screen py-6 flex flex-col justify-center relative overflow-hidden">
  <div class="inset-0">
    <!--Header /-->

    <main class="relative">
      <slot />
    </main>

    <!--footer>
      <p></p>
    </footer-->
  </div>
</div>

<style>
  .layout { 
    background-image: linear-gradient(130deg, #FF634D, #00A1FE);
  }
</style>
