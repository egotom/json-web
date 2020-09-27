<script>
	import { onMount, getContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { stores } from "@sapper/app";
	import { locale, support} from '../../locale.js';

	const  posts = getContext('key');
	console.log(JSON.stringify(posts),'------------------------------------------');

	const {page} = stores();
	let i18n, post=[];
	locale.subscribe(value => {i18n = value});
	onMount(()=>{
		if(i18n==undefined){
			let lang=navigator.language;
			for(let i in support){
				if(support[i].code.split('-')[0] == lang.split('-')[0]){
					i18n= support[i];
				}
				if(support[i].code == lang){
					i18n= support[i];
				}
			}
			locale.update(()=>i18n);
		}
		
		fetch(`http://${$page.host}/data/${i18n.code}/news.json`)
		.then(response => response.json())
		.then((response)=>{
			for(let i in response){
				if(response[i].slug==$page.params.slug)
					post=response[i];
			}
		});
	});
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class='content'>
	{@html post.html}
</div>


<style>
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>