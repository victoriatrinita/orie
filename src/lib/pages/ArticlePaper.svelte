<script lang="ts">
	import { CalendarIcon } from 'svelte-feather-icons';
	import ProgressBar from '$lib/components/ProgressBar.svelte';

	export let showProgress: boolean = false;
	export let post: null | {
		date: { published?: string; updated?: string };
		title: string;
		language: string;
		tags: Array<{}>;
		slug?: string;
		description?: string;
	};
</script>

<article>
	{#if post}
		<!-- {console.log(post.content)} -->
		<header>
			<h1>{post.title}</h1>
			<div style="display:flex; align-items:center">
				<CalendarIcon size="1x" />
				<time style="padding-left:0.25em">{post.date.updated}</time>
			</div>
			<ul>
				{#each post.tags as tag}
					<li>{tag}</li>
				{/each}
			</ul>
			<p>{post.description}</p>
		</header>
	{/if}
	{#if showProgress}
		<ProgressBar />
	{/if}
	<slot />
</article>

<style>
	article :global(p) {
		color: #0c0d0e;
	}
	ul {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li {
		border: 1px solid rgb(200, 204, 208);
		border-radius: 20px;
		padding: 0 0.5em;
		margin-right: 0.3em;
		color: rgb(27, 117, 208);
	}
	header {
		color: #0c0d0e;
		display: grid;
		gap: 0.5em;
	}
	h1 {
		font-family: 'Roboto Slab Variable', serif;
		font-weight: 700;
		text-align: left;
		color: #0c0d0e;
		margin-top: 1em;
		font-size: clamp(2rem, 4vw, 2.5rem);
	}
	article {
		word-wrap: break-word;
		line-height: 1.5;
		display: grid;
		padding: clamp(2em, 3vw, 4em) 1em 0;
		margin: auto;
		max-width: 80ch;
	}
	article :global(section) {
		margin-top: 2em;
		font-size: clamp(1rem, 2vw, 1.15rem);
	}
	article > :global(section:first-of-type) {
		margin-top: 1em;
	}

	article :global(section > :first-child) {
		margin: 0;
	}
	article :global(section p),
	article :global(section li) {
		line-height: 2rem;
	}

	article :global(section blockquote p) {
		line-height: unset;
	}

	article :global(section p) {
		font-size: clamp(1rem, 2vw, 1.15rem);
		line-height: 1.8rem;
		margin-top: 0.75em;
	}
	article :global(section p code),
	article :global(ol code),
	article :global(section ul code) {
		font-size: clamp(0.8rem, 2vw, 1rem);
	}
	article :global(img) {
		max-height: 42em;
		margin: auto;
		border-radius: var(--b-radius);
		text-align: center;
	}
	article :global(img[src*="://"])
	{
		border: none;
		border-radius: var(--b-radius);
		text-align: center;
	}
	article :global(h2),
	article :global(h3) {
		font-weight: 700;
		width: fit-content;
		position: relative;
	}

	article :global(h2::after) {
		position: absolute;
		content: '';
		height: 0.5em;
		bottom: 2px;
		z-index: -1;
		left: 0;
		right: 0;
		background: var(--blue-chalk);
	}

	article :global(h2) {
		margin-top: 1em;
		margin-bottom: 0.5em;
		font-size: clamp(1.5rem, 4vw, 2rem);
	}
	article :global(h2 + h3) {
		margin-top: 0.5em;
	}
	article :global(h3) {
		margin: 1em 0 -0.25em;
		font-size: clamp(1.2rem, 4vw, 1.5rem);
	}
	article :global(ol + h3),
	article :global(section ul + h3) {
		margin-top: 1.25em;
	}
	article :global(ol),
	article :global(section ul) {
		padding: 0;
		padding-left: 0.5em;
		margin: 0;
		margin-top: 0.75em;
		margin-bottom: -0.5em;
	}
	article :global(section ol li:not(:only-child):last-child),
	article :global(section ul li:not(:only-child):last-child) {
		margin-bottom: 1em;
	}
	article :global(section li) {
		margin-left: 1em;
	}
	article :global(section li > ol),
	article :global(section li > ul) {
		margin: 0;
	}
	article :global(blockquote) {
		line-height: 1.5;
		text-align: center;
		font-style: italic;
		font-size: clamp(1.4rem, 3vw, 1.8rem);
		margin: clamp(0.5em, 3vw, 1.5em);
	}
	article :global(section blockquote li) {
		margin-left: unset;
	}
	article :global(strong) {
		font-weight: 600;
	}
	/* article :global(hr) {
		height: 0.1em;
		margin-top: 2em;
		border: 0;
		background-color: var(--fg-surface);
	}

	article :global(figure) {
		margin: 1em 0 2em;
	}
	article :global(details) {
		margin: 1em 0;
	} */
</style>
