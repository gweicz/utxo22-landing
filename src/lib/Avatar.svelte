<script>
  export let speaker
  export let lead = null
  export let category = null
  export let visible = true
  export let col = 'speakers'
  export let style = 'w-14 md:w-16 m-2'
  export let defaultClass = 'avatar'

  import SvelteTooltip from '$lib/SvelteTooltip.svelte';
  import { page } from '$app/stores';

  let imagesRoot = 'https://spec.utxo.cz/22/photos'
  if ($page.url.hostname === 'localhost') {
    imagesRoot = 'http://localhost:8000/22/photos'
  }

  const priority = [ 'web:svg', 'web:webp', 'web:png', 'web:jpg', 'twitter:jpg' ]

  let speakerImg = null
  let speakerImgAlt = null

  if (speaker.photos && speaker.photos.length > 0) {
    for (const prio of priority) {
      if (speaker.photos.includes(prio)) {
        const [ ext, format ] = prio.split(':')
        const fn = `${imagesRoot}/${col}/${speaker.id}-${ext}.${format}`
        if (speakerImg) {
          $: speakerImgAlt = fn
          break
        }
        $: speakerImg = fn
      }
    }
  }
  
  if (!speakerImg) {
    speakerImg = '/img/twitter-avatar.png'
  }

  function twitterLink (id) {
    return `https://twitter.com/${speaker.twitter}`
  }

  let url = null

  if (col === 'speakers') {
    url = speaker.twitter ? twitterLink(speaker.twitter) : speaker.web?.url
  } else {
    url = speaker.web ? speaker.web.url : twitterLink(speaker.twitter)
  }
  $: tip = speaker.name + (speaker.nickname ? ` (${speaker.nickname})` : '')

  $: currentImg = speakerImg

  function mouseOver () {
    if (speakerImgAlt) {
      $: currentImg = speakerImgAlt
    }
  }

  function mouseLeave () {
    $: currentImg = speakerImg
  }

</script>

<div >
  <SvelteTooltip tip={tip}>
    <a href="{url}" target="_blank" class="rounded-full" on:mouseover={mouseOver} on:mouseleave={mouseLeave}>
      <img class="{defaultClass} transition-all {visible ? '' : 'opacity-40'} {lead ? 'w-24 md:w-28 m-4' : `small ${style}`} {category && speaker.tracks && speaker.tracks.includes(category) ? '' : (category ? ('opacity-20') : '') }" src={currentImg} alt={speaker.name} />
  </SvelteTooltip>
</div>

<style>

  .avatar-micro {
    border-radius: 50%;
    margin: 0.23em;
    box-shadow: 4px 3px #00000020;
  }

  .avatar {
    border-radius: 50%;
    margin: 0.5em;

    box-shadow: 5px 4px #00000020;
  }

  .avatar.small {
    margin: 0.4em;
  }

</style>
