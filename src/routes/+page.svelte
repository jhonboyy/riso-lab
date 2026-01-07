<script>
	import Header from '$lib/components/Header.svelte';
	import Canvas from '$lib/components/Canvas.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Instructions from '$lib/components/Instructions.svelte';
	import Download from '$lib/components/Download.svelte';
</script>

<main>
	<Header />
	<Canvas />
	<section class="menu-wrapper">
		<Menu />
		<Instructions />
	</section>
	<Download />
</main>
