<script>
	import Stage from '$lib/components/Stage.svelte';

	export let text = 'VFonts';
	export let background = '#ffffff';
	export let color = '#000000';
</script>

<Stage {background} {color}>
	<div class="word">
		<h2>{text}</h2>
	</div>
</Stage>
