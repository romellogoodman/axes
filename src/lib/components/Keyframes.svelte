<script>
	import { createStyleTag } from '$lib/utils';

	export let keyframes = [];
	export let text = '';

	const name = `${text}-animation`;

	const createKeyFrames = (stops = []) => {
		const numberOfStops = stops.length - 1;
		const body = stops.reduce((result, stop, index) => {
			const percent = (100 / numberOfStops) * index;
			const rules = Object.keys(stop).reduce((result, key) => {
				result += `${key}: ${stop[key]};\n`;

				return result;
			}, '');

			result += `
			${percent}% {
				${rules}
			}
		`;

			return result;
		}, '');
		const markup = `
		@keyframes ${name} {
			${body}
		}
	`;

		return markup;
	};

	const frames = createKeyFrames(keyframes);
	const styleTag = createStyleTag(frames);
</script>

<svelte:head>
	{@html styleTag}
</svelte:head>
