<script>
	import { onMount } from 'svelte';
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

		const pages = document.querySelectorAll('.stage');

		pages.forEach((pageEl) => observer.observe(pageEl));
	});
</script>

<ProgressBar color={progressColor} />
<Vfonts />
<Word {...{ text: 'Foo', background: 'red', color: 'white' }} />
<Word {...{ text: 'Bar', background: 'blue', color: 'white' }} />
<Word {...{ text: 'Baz', background: 'yellow', color: 'white' }} />
<Word {...{ text: 'Qux', background: 'cyan', color: 'white' }} />
<Word {...{ text: 'Corge', background: 'magenta', color: 'white' }} />

<style lang="scss">
</style>
