<script>
	import { onMount } from 'svelte';
	import { stores } from "@sapper/app";
	import { locale, support} from '../locale.js';
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
		fetch(`http://${$page.host}/data/${i18n.code}/index.json`)
		.then(response => response.json())
		.then((response)=>{
			data=response;
			//console.log(JSON.stringify(response.h1));
		});
	});
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<h1>{data.h1}</h1>

<figure>
	<img alt='Success Kid' src='successkid.jpg'>
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<style>
	h1, figure{
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
