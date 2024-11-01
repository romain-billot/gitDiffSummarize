/**
 * @param {string} title
 */
export function Title({title, className}) {
	return (
		<h1
			className={`text-center font-bold text-2xl ${className}`}
		>{title}
		</h1>
	);
}