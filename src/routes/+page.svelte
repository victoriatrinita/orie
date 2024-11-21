<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import PreviewCard from '$lib/components/PreviewCard.svelte';

	$: innerWidth = 0;

	export let data;
</script>

<svelte:window bind:innerWidth />

<div class="wrapper">
	<header>
		<img src="assets/profile/ori.svg" alt="Girl working on laptop illustration" />
		<div>
			{#if innerWidth > 600}
				<h1>A collection of favourites and thoughts</h1>
			{:else}
				<h1>A collection of favourites</h1>
				<h1>and thoughts</h1>
			{/if}
		</div>
	</header>

	<section>
		<h2>About</h2>
		<p>
			Hi there! I'm Victoria, a final year Information Engineering student. I enjoy exploring in the
			world of web development. I also have an obsession of keeping a documentation of the things I
			think, like, and find meaningful. Those two, combined, is why I created this little space on
			the internet.
		</p>
		<br />
		<Link href="/about">More info...</Link>
	</section>

	<section>
		<h2>Recent Posts</h2>

		<div>
			{#each data.posts.slice(0, 3) as post}
				<PreviewCard {post} />
			{/each}
		</div>
	</section>

	<section>
		<h2>Tags</h2>
		<p>No tags yet.</p>
	</section>
</div>

<style>
	section:nth-of-type(2) div {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1em;
	}

	@media (max-width: 600px) {
		section:nth-of-type(2) div {
			grid-template-columns: 1fr;
		}
	}

	.wrapper {
		display: grid;
		padding: clamp(2em, 3vw, 4em) 1em 0;
		margin: auto;
		max-width: 80ch;
	}

	header {
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
	}

	header div {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding-bottom: 1.5em;
	}

	section {
		padding-bottom: 1.5em;
	}

	img {
		height: clamp(240px, 25vw, 375px);
		padding-bottom: clamp(1em, 3vw, 2em);
	}

	h1 {
		font-weight: bolder;
		font-size: clamp(1.5rem, 3vw, 2rem);
		width: fit-content;
		position: relative;
	}

	h2 {
		font-weight: bolder;
		font-size: clamp(1.5rem, 3vw, 2rem);
		width: fit-content;
		position: relative;
		margin-bottom: 0.5em;
	}

	h2::after {
		position: absolute;
		content: '';
		height: 0.5em;
		bottom: 0;
		z-index: -1;
		left: 0;
		right: 0;
		background: var(--blue-chalk);
	}

	h1::after {
		position: absolute;
		content: '';
		height: 0.5em;
		bottom: 0;
		z-index: -1;
		left: 0;
		right: 0;
		background: var(--snowy-mint);
	}

	p {
		font-size: clamp(1rem, 2vw, 1.125rem);
		line-height: 1.8rem;
	}
</style>
