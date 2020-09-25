

<script>
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
{@html marked(text)}