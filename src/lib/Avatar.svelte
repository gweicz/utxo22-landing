<script>
  export let speaker
  export let lead

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
    <a href="{url}" on:mouseover={mouseOver} on:mouseleave={mouseLeave}>
      <img class="avatar {lead ? 'w-20 md:w-24 lg:w-28 m-4' : 'small w-14 md:w-16 m-4'}" src={currentImg} alt={speaker.name} title={speaker.name} />
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
