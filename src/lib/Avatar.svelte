<script>
  export let speaker
  export let lead = null
  export let category = null
  export let visible = true

  import SvelteTooltip from '$lib/SvelteTooltip.svelte';

  const priority = [ 'web:webp', 'web:png', 'web:jpg', 'twitter:jpg' ]

  let speakerImg
  let speakerImgAlt

  if (speaker.photos && speaker.photos.length > 0) {
    for (const prio of priority) {
      if (speaker.photos.includes(prio)) {
        const [ ext, format ] = prio.split(':')
        const fn = `https://spec.utxo.cz/22/photos/speakers/${speaker.id}-${ext}.${format}`
        if (speakerImg) {
          speakerImgAlt = fn
          break
        }
        speakerImg = fn
      }
    }
  }
  
  if (!speakerImg) {
    speakerImg = '/img/twitter-avatar.png'
  }

  const url = speaker.twitter ? `https://twitter.com/${speaker.twitter}` : speaker.web?.url
  const tip = speaker.name + (speaker.nickname ? ` (${speaker.nickname})` : '')

  let currentImg = speakerImg

  function mouseOver () {
    if (speakerImgAlt) {
      currentImg = speakerImgAlt
    }
  }

  function mouseLeave () {
    currentImg = speakerImg
  }


</script>

<div >
  <SvelteTooltip tip={tip}>
    <a href="{url}" class="rounded-full" on:mouseover={mouseOver} on:mouseleave={mouseLeave}>
      <img class="avatar transition-all {visible ? '' : 'opacity-20'} {lead ? 'w-24 md:w-28 m-4' : 'small w-14 md:w-16 m-4'} {category && speaker.tracks && speaker.tracks.includes(category) ? '' : category ? ('opacity-20') : '' }" src={currentImg} alt={speaker.name} />
  </SvelteTooltip>
</div>

<style>

  .avatar {
    border-radius: 50%;
    /*height: 5em;
    width: 5em;*/
    margin: 0.5em;

    box-shadow: 5px 4px #00000020;
  }

  .avatar.small {
    /*width: 3.5em;
    height: 3.5em;*/
    margin: 0.4em;
  }

</style>
