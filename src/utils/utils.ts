export function capitalize(text: string) {
	return text.toLowerCase().replace(/\b(\w)/g, (result) => result.toUpperCase());
}
