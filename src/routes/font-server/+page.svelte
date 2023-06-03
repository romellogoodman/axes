<script>
	import { getFont } from '$lib/utils';
	import fonts from '$lib/fonts.json';
</script>

<main>
	<nav>
		<a href="/">
			<p>Return home.</p>
		</a>
	</nav>
	<h1>Axes Font Server</h1>
	{#each fonts as font}
		<section>
			<p>{font.name}</p>
		</section>
	{/each}
</main>

<style lang="scss">
	main {
		max-width: 800px;
		margin: auto;
		font-size: 18px;
	}
</style>
