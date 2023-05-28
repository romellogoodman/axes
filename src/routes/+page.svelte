<script>
	import { onMount } from 'svelte';
	import Page from '$lib/components/Page.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import Word from '$lib/components/Word.svelte';
	import Vfonts from '$lib/words/Vfonts.svelte';
	import '$lib/app.scss';

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log(entry.target.dataset.text, 'isIntersecting');
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 1.0
			}
		);

		const pages = document.querySelectorAll('section.page');

		pages.forEach((pageEl) => observer.observe(pageEl));
	});

	const config = {
		color: '#ffffff',
		background: '#ff0000'
	};
</script>

<ProgressBar />
<Vfonts />
<Page {...{ ...config, text: 'Foo' }}><Word text="Foo" /></Page>
<Page {...{ ...config, text: 'Bar' }}><Word text="Bar" /></Page>
<Page {...{ ...config, text: 'Baz' }}><Word text="Baz" /></Page>
<Page {...{ ...config, text: 'Qux' }}><Word text="Qux" /></Page>
<Page {...{ ...config, text: 'Corge' }}><Word text="Corge" /></Page>

<style lang="scss">
</style>
