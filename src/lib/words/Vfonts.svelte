<script>
	import Page from '$lib/components/Page.svelte';
	import Word from '$lib/components/Word.svelte';

	let config = {
		text: 'VFonts',
		color: '#000000',
		background: '#ffffff'
	};
</script>

<Page {...config}>
	<Word text={config.text} />
</Page>

<style lang="scss">
</style>
