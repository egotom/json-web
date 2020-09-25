
<script>
	let units=[
		{	
			"title":"长度",
			"uns":[
				{"label":"米(m)","factor":1,"value":1},
				{"label":"厘米(cm)","factor":100,"value":100},
				{"label":"毫米(mm)","factor":1000,"value":1000},
				{"label":"英寸(in)","factor":39.37007874,"value":39.37007874}
			],
			"sub":[
				{
					"stitle":"公制",
					"suns":[
						{"label":"公里(km)","factor":0.001,"value":0.001},
						{"label":"分米(dm)","factor":10,"value":10},
						{"label":"微米(μm)","factor":1000000,"value":1000000},
						{"label":"纳米(nm)","factor":1000000000,"value":1000000000}
					]
				},{
					"stitle":"英制",
					"suns":[
						{"label":"弗隆(fur)","factor":0.00497097,"value":0.00497097},
						{"label":"英寻(fm)","factor":0.54680665,"value":0.54680665},
						{"label":"海里(nmi)","factor":0.00053996,"value":0.00053996},
						{"label":"英里(mi)","factor":0.00062137,"value":0.00062137},
						{"label":"码(yd)","factor":1.0936133,"value":1.0936133},
						{"label":"英尺(ft)","factor":3.2808399,"value":3.2808399}
					]
				},{
					"stitle":"市制",
					"suns":[
						{"label":"里","factor":0.002,"value":0.002},
						{"label":"丈","factor":0.30003,"value":0.30003},
						{"label":"尺","factor":3.00030003,"value":3.00030003},
						{"label":"寸","factor":30.0030003,"value":30.0030003},
						{"label":"分","factor":300.030003,"value":300.030003},
						{"label":"厘","factor":3000.30003,"value":3000.30003}
					]
				}
			]
			
		},{
			"title":"质量",
			"uns":[
				{"label":"千克(Kg)","factor":1,"value":1},
				{"label":"克(g)","factor":1000,"value":1000},
				{"label":"斤","factor":2,"value":2},
				{"label":"磅(lb)","factor":2.20462262,"value":2.20462262}
			],
			"sub":[
				{
					"stitle":"公制",
					"suns":[
						{"label":"吨(t)","factor":0.001,"value":0.001},
						{"label":"毫克(mg)","factor":1000000,"value":1000000},
						{"label":"微克(μg)","factor":1000000000,"value":1000000000},
						{"label":"纳克(ng)","factor":1000000000000,"value":1000000000000}
					]
				},{
					"stitle":"英制",
					"suns":[
						{"label":"盎司(oz)","factor":35.27396195,"value":35.27396195},
						{"label":"英钱(dwt)","factor":734.87420728,"value":734.87420728},
						{"label":"格令(nmi)","factor":17636.98097479,"value":17636.98097479},
						{"label":"长吨(mi)","factor":0.00098421,"value":0.00098421},
						{"label":"英担(ft)","factor":0.01968413,"value":0.01968413},
						{"label":"英石(mi)","factor":0.15747304,"value":0.15747304},
						{"label":"打兰(dr)","factor":564.38339119,"value":564.38339119}
					]
				},{
					"stitle":"美制",
					"suns":[
						{"label":"金衡盎司(oz)","factor":36.74371036,"value":36.74371036},
						{"label":"金衡磅","factor":3.06197586,"value":3.06197586},
						{"label":"金衡格令","factor":17636.98097479,"value":17636.98097479},
						{"label":"短吨(yd)","factor":0.00110231,"value":0.00110231},
						{"label":"美担(nmi)","factor":0.02204623,"value":0.02204623}
					]
				},{
					"stitle":"市制",
					"suns":[
						{"label":"担","factor":0.02,"value":0.02},
						{"label":"两","factor":20,"value":20},
						{"label":"钱","factor":200,"value":200}
					]
				}
			]
			
		},{
			"title":"功，热量",
			"uns":[		
				{"label":"米制马力*时","factor":0.001581,"value":0.001581},
				{"label":"英制马力*时","factor":0.00155923,"value":0.00155923},				
				{"label":"英尺*磅","factor":3.96735036,"value":3.96735036},
				{"label":"英热单位","factor":3087.48430306,"value":3087.48430306}
			],
			"sub":[{
					"stitle":"公制",
					"suns":[
						{"label":"公斤*米(Kg*m)","factor":426.95688567,"value":426.95688567},
						{"label":"千瓦*时(g)","factor":0.00116283,"value":0.00116283},
						{"label":"千卡(kcal)","factor":1,"value":1},
						{"label":"焦耳(J)","factor":4185.85182085,"value":4185.85182085}
					]
				}]
		},{
			"title":"功率",
			"uns":[	
				{"label":"英制马力","factor":0.1341,"value":0.1341},
				{"label":"米制马力","factor":0.136,"value":0.136},				
				{"label":"英热单位/秒","factor":0.09478,"value":0.09478},
				{"label":"英尺*磅/秒","factor":73.76,"value":73.76}
			],
			"sub":[{
					"stitle":"公制",
					"suns":[
						{"label":"瓦(W)","factor":100,"value":100},
						{"label":"千瓦(kW)","factor":0.1,"value":0.1},
						{"label":"兆瓦(MW)","factor":0.0001,"value":0.0001},
						{"label":"公斤*米/秒","factor":10.20000007,"value":10.20000007},
						{"label":"千卡/秒","factor":0.0239,"value":0.0239},
						{"label":"焦耳/秒","factor":100,"value":100},
						{"label":"牛顿*米/秒","factor":100,"value":100}
					]
				}]
		},{
			"title":"压力",
			"uns":[
				{"label":"巴(bar)","factor":0.01,"value":0.01},
				{"label":"兆帕(MPa)","factor":0.001,"value":0.001},				
				{"label":"公斤/平方厘米","factor":0.01019716,"value":0.01019716},				
				{"label":"毫米水柱","factor":101.9716213,"value":101.9716213}
			],
			"sub":[{
					"stitle":"英制",
					"suns":[
						{"label":"千帕(kPa)","factor":1,"value":1},
						{"label":"百帕(hPa)","factor":10,"value":10},
						{"label":"毫巴(mbar)","factor":10,"value":10},
						{"label":"帕斯卡(Pa)","factor":1000,"value":1000},
						{"label":"标准大气压","factor":0.00986923,"value":0.00986923},
						{"label":"毫米汞柱(托)","factor":7.50061683,"value":7.50061683},
						{"label":"磅/平方英尺","factor":20.88543512,"value":20.88543512},
						{"label":"磅/平方英寸","factor":0.14503774,"value":0.14503774},
						{"label":"英吋汞柱","factor":0.29529988,"value":0.29529988},
						{"label":"公斤力/平方米","factor":101.9716213,"value":101.9716213}
					]
				}]
		},{
			"title":"面积",
			"uns":[
				
				{"label":"平方米(m2)","factor":1000,"value":1000},
				{"label":"平方公里(km2)","factor":0.001,"value":0.001},
				{"label":"公顷(ha)","factor":0.1,"value":0.1},
				{"label":"亩","factor":1.5,"value":1.5}
				
			],
			"sub":[{
					"stitle":"英制",
					"suns":[
						{"label":"平方毫米(mm2)","factor":1000000000,"value":1000000000},
						{"label":"平方厘米(cm2)","factor":10000000,"value":10000000},
						{"label":"平方分米(dm2)","factor":100000,"value":100000},
						{"label":"英亩","factor":0.24710538,"value":0.24710538},
						{"label":"平方英里(sq mi)","factor":0.0003861,"value":0.0003861},
						{"label":"平方竿(sq rd)","factor":39.53686103,"value":39.53686103},
						{"label":"平方码(sq yd)","factor":1195.9900463,"value":1195.9900463},
						{"label":"平方英尺(sq ft)","factor":10763.91041671,"value":10763.91041671},
						{"label":"平方英寸(sq in)","factor":1550003.1000062,"value":1550003.1000062}
					]
				}]
		},{
			"title":"体积，容积",
			"uns":[
				{"label":"立方米(m3)","factor":0.01,"value":0.01},
				{"label":"公石(hl)","factor":0.1,"value":0.1},
				{"label":"十升(dal)","factor":1,"value":1},
				{"label":"升(L)","factor":10,"value":10}			
			],
			"sub":[{
					"stitle":"英制",
					"suns":[
						{"label":"分升(dl)","factor":100,"value":100},
						{"label":"厘升(cl)","factor":1000,"value":1000},
						{"label":"毫升","factor":10000,"value":10000},
						{"label":"立方毫米","factor":10000000,"value":10000000},
						{"label":"桶","factor":0.06289811,"value":0.06289811},
						{"label":"加仑(gal)","factor":2.64172052,"value":2.64172052},
						{"label":"夸脱(qt)","factor":10.56688209,"value":10.56688209},
						{"label":"品脱(pt)","factor":21.13376419,"value":21.13376419},
						{"label":"及耳(gi)","factor":84.53505675,"value":84.53505675},
						{"label":"立方码","factor":0.01307951,"value":0.01307951},
						{"label":"立方英尺","factor":0.35314667,"value":0.35314667},
						{"label":"立方英寸","factor":610.23744095,"value":610.23744095},
						{"label":"液量盎司","factor":422.67528377,"value":422.67528377},
						{"label":"液量打兰","factor":2705.12181615,"value":2705.12181615},
						{"label":"亩英尺","factor":0.00000811,"value":0.00000811},
						{"label":"量滴(min)","factor":20775335.548012,"value":20775335.548012}
					]
				}]
		},{
			"title":"温度",
			"uns":[
				{"label":"摄氏度°C","factor":1,"value":1},
				{"label":"华氏度°F","factor":33.8,"value":33.8},
				{"label":"开尔文K","factor":274.15,"value":274.15},
				{"label":"兰氏度°Ra","factor":493.47,"value":493.47},
				{"label":"列氏度°Re","factor":0.8,"value":0.8}
			],
			"sub":[]
			
		}
	];

	function calc(e,i,ii,iii){
		//console.log(JSON.stringify(units[i].title));
		let value;
		if(iii==undefined){
			value=e/units[i].uns[ii].factor;
		}else{			
			value=e/units[i].sub[ii].suns[iii].factor;
		}
		for(let j in units[i].uns){
			units[i].uns[j].value=units[i].uns[j].factor*value;
		}
		if(units[i].sub.length>0){
			for(let j in units[i].sub){
				for(let y in units[i].sub[j].suns){
					units[i].sub[j].suns[y].value=units[i].sub[j].suns[y].factor*value;
				}
			}
		}
	}
</script>

<div class="container">
	{#each units as {title,uns,sub}, i}
    <a data-toggle="collapse" href="#{title}"  aria-expanded="false" aria-controls="{title}">{title}</a>	
	<div class="row">
		{#each uns as {label,factor,value}, ii}
		<div class="input-group mb-3 col-3">
		  <input type="number" class="form-control" bind:value={value}  on:input="{e => calc(e.target.value, i, ii)}" >
		  <div class="input-group-append"><span class="input-group-text">{label}</span></div>
		</div>
		{/each}
	</div>
    <div class="collapse" id="{title}">
      <div class="panel-body">
      	{#each sub as {stitle,suns},ii}
		<h4>{stitle}</h4>		
		<div class="row">
			{#each suns as {label,factor,value}, iii}
			<div class="input-group mb-3 col-3">
			  <input type="number" class="form-control" bind:value={value}  on:input="{e => calc(e.target.value, i, ii,iii)}" >
			  <div class="input-group-append"><span class="input-group-text">{label}</span></div>
			</div>
			{/each}
		</div>		
		{/each}
	  </div>
    </div>
    {/each}
</div>