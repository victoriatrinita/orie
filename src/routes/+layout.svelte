<script lang="ts">
	import '@fontsource-variable/inter';
	import '@fontsource/fira-mono';
	import '@fontsource-variable/roboto-slab';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/app.css';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.data.meta?.title || $page.status}</title>
</svelte:head>

<Navigation />

<slot />

<Footer />

<style>
	:global(body > #svelte) {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
