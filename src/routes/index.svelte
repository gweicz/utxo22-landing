<script context="module">
	export const prerender = true;
</script>

<script>
  import Avatar from '$lib/Avatar.svelte';

  const bundle = (async () => {
		const response = await fetch('https://spec.utxo.cz/22/bundle.json')
    return await response.json()
	})()
</script>

<svelte:head>
	<title>UTXO.22 | Otevřená komunitní kryptoměnová konference</title>
</svelte:head>

<section>
  <div class="relative px-6 pt-10 pb-8 sm:max-w-4xl sm:mx-auto sm:rounded-lg sm:px-5 text-center">
    <h1>UTXO.22</h1>
    <div class="subline">4.-5. červen 2022, 🇨🇿 Praha</div>
    <div class="subline">Otevřená komunitní kryptoměnová konference</div>

    <div class="mt-10">
      {#await bundle}
        .. načítám
      {:then data}
        <h2 class="pixelfont">Významní hosté</h2>
        <div class="mt-3 mb-6 flex flex-wrap justify-center relative">
        {#each data.spec.speakers as speaker}
          {#if speaker.lead}
            <div>
              <Avatar speaker={speaker} lead={true} />
            </div>
          {/if}
        {/each}
        </div>

        <h2 class="pixelfont">Další přednášející</h2>
        <div class="flex flex-wrap justify-center relative mt-5">
        {#each data.spec.speakers as speaker}
          {#if !speaker.lead}
            <div>
              <Avatar speaker={speaker} />
            </div>
          {/if}
        {/each}
        </div>
        <div class="pixelfont text-sm mt-5">.. a spoustu dalších pro vás chystáme!</div>
      {/await}
    </div>

    <div class="flex flex-wrap justify-center relative mt-10">
      <a class="m-2" href="https://docs.utxo.cz"><i class="fas fa-book"></i> Dokumentace</a>
      <a class="m-2" href="https://twitter.com/utxocz"><i class="fab fa-twitter"></i> Twitter</a>
      <a class="m-2" href="https://t.me/utxocz"><i class="fab fa-telegram-plane"></i> Telegram</a>
      <a class="m-2" href="https://discord.gg/5k9dEtVhnv"><i class="fab fa-discord"></i> Discord</a>
    </div>

  </div>
</section>

<style>

  .pixelfont.text-sm {
    font-size: 0.8em;
  }

  a:hover {
    color: black;
  }

	h1 {
		width: 100%;
    font-family: 'Press Start 2P', cursive;
    font-size: 4em;
    text-shadow: 0.1em 0.1em #00000040;
    color: white;
	}

  .subline {
    margin-top: 1em;
    font-family: 'Press Start 2P', cursive;
    font-size: 1.3em;
    color: white;
    text-shadow: 0.2em 0.2em #00000040;
  }

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
