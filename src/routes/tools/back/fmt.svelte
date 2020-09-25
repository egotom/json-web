
<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`tools/fmt`);
		const data = await res.json();
		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
	console.log(post);
	import marked from 'marked';
	let text = ``, after=``;
	function process(){
		after=text.replace(/[\r\n\t{2,}]/g," ").replace(/\"/g,"\\\"").replace(/\s{2,}/g," ");
	}
</script>

<style>
	textarea { width: 100%; height: 200px; }
</style>
<textarea bind:value={text} on:input={process}></textarea>
<textarea bind:value={after}></textarea>
<textarea bind:value={post}></textarea>
{@html marked(text)}