import { writable } from 'svelte/store';
export const locale = writable();
export const support=[{code:'en',label:'English'},{code:'zh-CN',label:'简体中文'}];
const getLC =(lang,support)=>{
	let ret=support[0];
	for(let i in support){
		if(support[i].code.split('-')[0] == lang.split('-')[0]){
			ret= support[i];
		}
		if(support[i].code == lang){
			ret= support[i];
		}
	}
	console.log('------------------------------',ret);
	return ret;
};