<script>
	import { onMount } from 'svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import TextBlock from '$lib/components/TextBlock.svelte';
	import Blink from '$lib/words/Blink.svelte';
	import Fade from '$lib/words/Fade.svelte';
	import Grow from '$lib/words/Grow.svelte';
	import Shrink from '$lib/words/Shrink.svelte';
	import '$lib/app.scss';

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						document.querySelector('#progress-bar').style.background = entry.target.dataset.color;

						entry.target.classList.add('in-view');
					} else {
						entry.target.classList.remove('in-view');
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

<ProgressBar />
<TextBlock>
	<p class="about">
		<strong>Axes</strong> is a collection of typography interactions and an open-source font server.
		It explores the web browser's ability to make typography kinetic, responsive and expressive.
		Each interaction is split into three categories: Scroll, Hover and Watch. Scroll down to explore
		them and check out the
		<a href="/font-server">font server docmentation</a>
		to learn how to bring these open-source fonts into your own projects. The codebase for this project
		can be found on <a href="http://github.com/romellogoodman/axes">Github</a>.
	</p>
	<p><a href="https://romellogoodman.com">Created by Romello Goodman</a>.</p>
</TextBlock>
<Blink />
<Fade />
<Grow />
<Shrink />
<TextBlock>
	<p>
		Thank you for viewing. Check out more of my work at <a href="https://romellogoodman.com"
			>romellogoodman.com</a
		>
	</p>
</TextBlock>
