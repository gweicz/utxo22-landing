<script context="module">
	export const prerender = true;
</script>

<script>
  import SvelteTooltip from '$lib/SvelteTooltip.svelte'
  import Link from '$lib/Link.svelte'
  import Avatar from '$lib/Avatar.svelte'
  import SvelteMarkdown from 'svelte-markdown'
  import { page } from '$app/stores';

  import staticBundle from '$lib/bundle.json'

  let bundle = staticBundle
  let partnersTable = partnersTableGen()

  let hostname = $page.url.hostname
  if (hostname === 'localhost') {
    console.log('Local only mode')
  } else {
    const liveBundleLoader = (async () => {
      const response = await fetch('https://spec.utxo.cz/22/bundle.json')
      bundle = {}
      bundle = await response.json()
      $: partnersTable = partnersTableGen()
    })()
  }

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

  function partnersTableGen () {
    return [
      { title: 'Komunity', arr: bundle.spec.partners.filter(x => x.type === 'community') },
      { title: 'Sponzoři', arr: bundle.spec.partners.filter(x => x.type === 'sponsor') },
      { title: 'Mediální partneři', arr: bundle.spec.partners.filter(x => x.type === 'medium') },
    ]
  }

  const renderers = {
    link: Link
  }

</script>

<svelte:head>
  <title>{bundle.name} | {bundle.description}</title>
</svelte:head>

<section>
  <div class="relative px-6 pt-10 pb-8 sm:max-w-6xl sm:mx-auto sm:rounded-lg sm:px-5 text-center">
    <h1 class="text-5xl md:text-6xl lg:text-7xl">{h1}</h1>
    <div class="subline-shadow text-lg md:text-xl lg:text-2xl">4.-5. červen 2022 @ {bundle.place}</div>
    <div class="subline text-sm md:text-md lg:text-lg text-gray-800">{bundle.description}</div>

    <div class="mt-10">
        <!--h2 class="pixelfont md:text-md lg:text-lg">Přednášející ({bundle.spec.speakers.length})</h2-->
        <div class="mt-3 mb-6 flex flex-wrap justify-center relative">
        {#each bundle.spec.speakers as speaker}
          {#if speaker.lead}
            <div class="rounded-full" on:mouseover={() => mouseOverSpeaker(speaker)} on:mouseleave={mouseLeaveSpeaker}>
              <Avatar speaker={speaker} lead={true} category={category} visible={!selectedSpeaker || (selectedSpeaker && selectedSpeaker.id === speaker.id)} />
            </div>
          {/if}
        {/each}
        </div>

        <!--h2 class="pixelfont">Další přednášející</h2-->
        <div class="flex flex-wrap justify-center relative">
        {#each bundle.spec.speakers as speaker}
          {#if !speaker.lead}
            <div on:mouseover={() => mouseOverSpeaker(speaker)} on:mouseleave={mouseLeaveSpeaker}>
              <Avatar speaker={speaker} category={category} visible={!selectedSpeaker || (selectedSpeaker && selectedSpeaker.id === speaker.id)} />
            </div>
          {/if}
        {/each}
        </div>
        <div class="pixelfont text-sm mt-5 mb-10">.. a další přednášející připravujeme!</div>

        <div class="mt-12 mb-6 flex flex-wrap justify-center relative gap-4 text-sm">
          {#each bundle.spec.tracks as track}
            <div on:mouseover={() => mouseOverCat(track.id)} on:mouseleave={mouseLeaveCat}
              class="block box-shadow transition-all pixelfont text-xs rounded-3xl w-auto bg-white/20 hover:bg-white/60 text-gray-800 px-6 py-4 cursor-pointer {selectedSpeaker && !selectedSpeaker.tracks?.includes(track.id) ? 'opacity-20' : ''}">{track.shortname || track.name}</div>
          {/each}
        </div>
    </div>

    <div class="subline-shadow2 text-lg md:text-xl lg:text-2xl mt-14"><div>2 dny, 50+ přednášejích, 100h+ obsahu, 1000+ návštěvníků</div></div>

    <h2 class="pixelfont mt-10 text-gray-800">Často kladené dotazy (FAQ)</h2>

    <div class="container w-full mx-auto">
      <div class="columns-1 xl:columns-2 mt-5 h-auto text-gray-800">
        {#each bundle.spec.faqs as item}
          <div class="mb-5 break-inside-avoid-column bg-white/30 rounded-3xl px-6 py-4 text-left transition-all box-shadow-light overflow-visible">
            <h3 class="pixelfont text-sm mb-3">{item.question}</h3>
            <p class="md">
              <SvelteMarkdown source={item.answer} renderers={renderers}/>
            </p>
          </div>
        {/each}
      </div>
    </div>

    <div class="columns-1 xl:columns-3 xl:mt-5">
      {#each partnersTable as table}
      <div class="break-inside-avoid-column mb-5">
        <h2 class="pixelfont text-gray-800 text-sm mb-3">{table.title}</h2>
        <div class="flex flex-wrap justify-center">
          {#each table.arr as item}
            <Avatar speaker={item} col="partners" />
          {/each}
        </div>
      </div>
      {/each}
    </div>

    <div class="mt-3 subline-shadow2">We Are All Satoshi <i class="fas fa-heart text-red-500"></i></div>

        <div class="footer-link flex flex-wrap justify-center relative mt-10 mb-5 pixelfont-micro gap-6 mx-auto w-8/12">
          <a href={bundle.links.docs} target="_blank"><i class="fas fa-book"></i> Dokumentace</a>
          <a href={bundle.links.substack} target="_blank"><i class="fas fa-newspaper"></i> Newsletter</a>
          <a href={bundle.links.discord} target="_blank"><i class="fab fa-discord"></i> Discord</a>
          <a href={bundle.links.telegram} target="_blank"><i class="fab fa-telegram-plane"></i> Telegram</a>
          <a href={bundle.links.twitter} target="_blank"><i class="fab fa-twitter"></i> Twitter</a>
          <a href={bundle.links.instagram} target="_blank"><i class="fab fa-instagram"></i> Instagram</a>
          <a href={bundle.links.fbevent} target="_blank"><i class="fab fa-facebook"></i> Facebook</a>
        </div>

  </div>
</section>

<style>

  .footer-link i {
    font-size: 1.7em !important;
  }

  .pixelfont.text-sm {
    font-size: 0.8em;
  }

  a:hover {
    color: black;
  }

  .box-shadow {
    box-shadow: 0.4em 0.3em #00000010;
  }

  .box-shadow-light {
    box-shadow: 0.3em 0.1em #00000010;
  }

  .pixelfont-micro {
    font-family: 'Press Start 2P', cursive;
    font-size: 0.8em;
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

  .md blockquote { margin-top: 1em; }

</style>
