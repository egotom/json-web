<script>
	let units = [{
            "name": "Acetaminophen",
            "specimen": "Serum, Plasma",
            "conventionalRange": "10-30",
            "conventionalUnit": "µg/mL",
            "factor": "6.614",
            "siRange": "66-200",
            "siUnit": "µmol/L",
            "siValue": "66",
            "usValue": "10"
      }, {
            "name": "Acetoacetate",
            "specimen": "Serum, Plasma",
            "conventionalRange": "<1",
            "conventionalUnit": "mg/dL",
            "factor": "97.95",
            "siRange": "<100",
            "siUnit": "µmol/L",
            "siValue": "100",
            "usValue": "1"
      }, {
            "name": "Acetone",
            "specimen": "Serum, Plasma",
            "conventionalRange": "<1.0",
            "conventionalUnit": "mg/dL",
            "factor": "0.172",
            "siRange": "<0.17",
            "siUnit": "mmol/L",
            "siValue": "0.17",
            "usValue": "1.0"
      }, {
            "name": "Acid phosphatase",
            "specimen": "Serum",
            "conventionalRange": "<5.5",
            "conventionalUnit": "U/L",
            "factor": "16.667",
            "siRange": "<90",
            "siUnit": "nkat/L",
            "siValue": "90",
            "usValue": "5.5"
      }, {
            "name": "Activated partial thromboplastin time (APTT)",
            "specimen": "Whole blood",
            "conventionalRange": "25-40",
            "conventionalUnit": "s",
            "factor": "1",
            "siRange": "25-40",
            "siUnit": "s",
            "siValue": "25",
            "usValue": "25"
      }
		]
	
	function setBothFromSI(value, i) {
		const {factor, siValue} = units[i];

		units[i].siValue = +value;
		units[i].usValue = +(value / factor).toFixed(2);
	}
	function setBothFromUS(value, i) {
		const {factor, usValue} = units[i];
		units[i].usValue = +value;
		units[i].siValue = +(value * factor).toFixed(2);;
	}
</script>
<style>input{max-width:150px}
	.bold{font-weight:600;}
</style>

{#each units as { usValue, siValue,siUnit,siRange,conventionalUnit,conventionalRange,specimen,name, factor}, i}
      <p class=bold >{name}</p>
      <label>
      	US Value
      <input value={usValue} on:input="{e => setBothFromUS(e.target.value, i)}" min="" type=number placeholder=" US">
      	</label>
      <label>
      	SI Value
       <input value={siValue} on:input="{e => setBothFromSI(e.target.value, i)}" min="" type=number placeholder="SI">
      </label>
{/each}