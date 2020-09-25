<script>
	import { onMount,setContext,getContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { stores } from "@sapper/app";
	import { locale, support} from '../../locale.js';

	const {page} = stores();
	let i18n,data=[];
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
		//console.log(JSON.stringify(i18n));
		fetch(`http://${$page.host}/data/${i18n.code}/news.json`)
		.then(response => response.json())
		.then((response)=>{
			data=response;
			//console.log(JSON.stringify(response.h1));
		});
	});

	function handleClick(slug) {
		let post;
		for(let i in data){
			if(data[i].slug==slug)
				post=data[i];
		}
		const post$ = writable(post)
		setContext('key', post$);
		//const  posts = getContext('key');
		//console.log(JSON.stringify(posts),'------------------------------------------');
	}
</script>
<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each data as post}
		<li><a href='news/{post.slug}' on:click={handleClick(post.slug)}>{post.title}</a></li>
	{/each}
</ul>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>