/**
 * Return a list of class names used by children blocks
 *
 * The index equates to the order of the child block.
 *
 * @since 0.0.1
 *
 * @return {string[]} List of class names.
 */
export default function() {
	return [
		'llms-lite-lms-msg--incomplete',
		'llms-lite-lms-btn--complete',
		'llms-lite-lms-msg--complete',
		'llms-lite-lms-btn--incomplete',
	];
}
