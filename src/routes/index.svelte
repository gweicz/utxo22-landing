<script context="module">
	export const prerender = true;
</script>

<script>
  import SvelteTooltip from '$lib/SvelteTooltip.svelte';
  import Avatar from '$lib/Avatar.svelte';

  const bundle = (async () => {
		const response = await fetch('https://spec.utxo.cz/22/bundle.json')
    return await response.json()
	})()


  const origName = 'UTXO.22'
  let h1 = origName

  let category = null
  let selectedSpeaker = null

  function mouseOverCat (cat) {
    category = cat
  }

  function mouseLeaveCat () {
    category = null
  }

  function mouseOverSpeaker (speaker) {
    selectedSpeaker = speaker
  }

  function mouseLeaveSpeaker () {
    selectedSpeaker = null
  }

</script>

<svelte:head>
	<title>UTXO.22 | Otevřená komunitní kryptoměnová konference</title>
</svelte:head>

<section>
  <div class="relative px-6 pt-10 pb-8 sm:max-w-6xl sm:mx-auto sm:rounded-lg sm:px-5 text-center">
    <h1 class="text-5xl md:text-6xl lg:text-7xl">{h1}</h1>
    <div class="subline-shadow text-lg md:text-xl lg:text-2xl">4.-5. červen 2022 @ Gabriel Loci, Praha</div>
    <div class="subline text-sm md:text-md lg:text-lg text-gray-800">Otevřená komunitní kryptoměnová konference</div>

    <div class="mt-10">
      {#await bundle}
        <div style="min-height: 450px;">Načítám obsah ...</div>
      {:then data}
        <!--h2 class="pixelfont md:text-md lg:text-lg">Přednášející ({data.spec.speakers.length})</h2-->
        <div class="mt-3 mb-6 flex flex-wrap justify-center relative">
        {#each data.spec.speakers as speaker}
          {#if speaker.lead}
            <div on:mouseover={() => mouseOverSpeaker(speaker)} on:mouseleave={mouseLeaveSpeaker}>
              <Avatar speaker={speaker} lead={true} category={category} visible={!selectedSpeaker || (selectedSpeaker && selectedSpeaker.id === speaker.id)} />
            </div>
          {/if}
        {/each}
        </div>

        <!--h2 class="pixelfont">Další přednášející</h2-->
        <div class="flex flex-wrap justify-center relative">
        {#each data.spec.speakers as speaker}
          {#if !speaker.lead}
            <div on:mouseover={() => mouseOverSpeaker(speaker)} on:mouseleave={mouseLeaveSpeaker}>
              <Avatar speaker={speaker} category={category} visible={!selectedSpeaker || (selectedSpeaker && selectedSpeaker.id === speaker.id)} />
            </div>
          {/if}
        {/each}
        </div>
        <div class="pixelfont text-sm mt-5 mb-10">.. a další přednášející připravujeme!</div>

        <div class="mt-12 mb-6 flex flex-wrap justify-center relative gap-4 text-sm">
          {#each data.spec.tracks as track}
            <div on:mouseover={() => mouseOverCat(track.id)} on:mouseleave={mouseLeaveCat}
              class="block transition-all pixelfont text-xs rounded-3xl w-auto bg-white/20 hover:bg-white/60 text-gray-800 p-5 cursor-pointer {selectedSpeaker && !selectedSpeaker.tracks?.includes(track.id) ? 'opacity-20' : ''}">{track.name}</div>
          {/each}
        </div>
      {/await}
    </div>

    <div class="subline-shadow2 text-lg md:text-xl lg:text-2xl mt-14"><div>2 dny, 50+ přednášejích, 100h+ obsahu, 1000+ návštěvníků</div></div>


    <div class="flex flex-wrap justify-center relative mt-10">
      <a class="m-2" href="https://docs.utxo.cz"><i class="fas fa-book"></i> Dokumentace</a>
      <a class="m-2" href="https://twitter.com/utxocz"><i class="fab fa-twitter"></i> Twitter</a>
      <a class="m-2" href="https://discord.gg/5k9dEtVhnv"><i class="fab fa-discord"></i> Discord</a>
      <a class="m-2" href="https://t.me/utxocz"><i class="fab fa-telegram-plane"></i> Telegram</a>
      <a class="m-2" href="https://www.facebook.com/events/276727151106692"><i class="fab fa-facebook"></i> Facebook</a>
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
    text-shadow: 0.1em 0.1em #00000040;
    color: white;
	}

  .pixelfont.shadow {
    text-shadow: 0.2em 0.2em #00000040;
  }

  .subline {
    margin-top: 1em;
    font-family: 'Press Start 2P', cursive;
  }
  .subline-shadow {
    margin-top: 1em;
    font-family: 'Press Start 2P', cursive;
    color: white;
    text-shadow: 0.2em 0.2em #00000040;
  }

  .subline-shadow2 {
    font-family: 'Press Start 2P', cursive;
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
