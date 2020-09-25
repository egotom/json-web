<script>
	import { onMount } from 'svelte';
	import { stores } from "@sapper/app";
	import { locale, support} from '../locale.js';
	export let segment;
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
		fetch(`http://${$page.host}/data/${i18n.code}/nav.json`)
		.then(response => response.json())
		.then((response)=>{
			data=response;
			//console.log(JSON.stringify(response.h1));
		});
	});
</script>
<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}
	li {
		display: block;
		float: left;
	}
	[aria-current] {
		position: relative;
		display: inline-block;
	}
	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>
<nav>
	<ul>
		{#each data as {link,label}}
		<li><a rel=prefetch aria-current='{segment === link ? "page" : undefined}' href={link}>{label}</a></li>
		{/each}
	</ul>
</nav>
