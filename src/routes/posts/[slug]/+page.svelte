<script lang="ts">
	import ArticlePaper from '$lib/pages/ArticlePaper.svelte';
	export let data: import('./$types').PageData;
</script>

<ArticlePaper showProgress={true} post={data.post}>
	<section>
		{@html data.post.content}
	</section>
</ArticlePaper>

<style>
</style>
