<script>
	import { onMount } from 'svelte';
	import Page from '$lib/components/Page.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import Word from '$lib/components/Word.svelte';
	import Vfonts from '$lib/words/Vfonts.svelte';
	import '$lib/app.scss';

	$: progressColor = '#000000';

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						progressColor = entry.target.dataset.color;
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: [0.5, 1.0]
			}
		);

		const pages = document.querySelectorAll('section.page');

		pages.forEach((pageEl) => observer.observe(pageEl));
	});
</script>

<ProgressBar color={progressColor} />
<Vfonts />
<Page {...{ text: 'Foo', background: 'red', color: 'white' }}><Word text="Foo" /></Page>
<Page {...{ text: 'Bar', background: 'blue', color: 'white' }}><Word text="Bar" /></Page>
<Page {...{ text: 'Baz', background: 'yellow', color: 'white' }}><Word text="Baz" /></Page>
<Page {...{ text: 'Qux', background: 'cyan', color: 'white' }}><Word text="Qux" /></Page>
<Page {...{ text: 'Corge', background: 'magenta', color: 'white' }}><Word text="Corge" /></Page>

<style lang="scss">
</style>
