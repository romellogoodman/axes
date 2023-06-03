import fonts from '$lib/fonts.json';

/**
 * Preprocessor attempts to process the style tag. The ${''} is a workaround.
 * https://github.com/sveltejs/svelte/issues/5292#issuecomment-787743573
 */
export const createStyleTag = (style) => `
	<${''}style>
		${style}
	</${''}style>
`;

export const getFont = (fontName) => {
	return fonts.find((font) => font.name === fontName);
};
