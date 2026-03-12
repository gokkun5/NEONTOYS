function showFigures(){

const search = document.getElementById("search").value.toLowerCase();

const series = document.getElementById("series").value;
const type = document.getElementById("type").value;
const price = document.getElementById("price").value;

//全部まとめる
let figures = [

{
series:"zyuzyutu",
name:"五条悟　Grandista",
type:"Grandista",
price:2500,
img:"images/zyuzyutu/gozyo_gra.jpg"
},

{
series:"kimetu",
name:"冨岡義勇　Grandista",
type:"Grandista",
price:1500,
img:"images/kimetu/giyu_gra.jpg"
},

{
series:"orerebe",
name:"水篠旬　ESPREST",
type:"esp",
price:1600,
img:"images/orerebe/mizusino_esp.jpg"
},


{
series:"miku",
name:"雪ミク×クロミ　Trio-Try-iT",
type:"trio",
price:2000,
img:"images/miku/kuromi_miku.jpg"
},

{
series:"miku",
name:"ザクミク",
type:"",
price:1600,
img:"images/miku/miku_zaku.jpg"
},

{
series:"miku",
name:"桜ミク　AMP+～桜ドレスver.～",
type:"",
price:1600,
img:"images/miku/sakuramiku2026.jpg"
},

{
series:"kimetu",
name:"胡蝶しのぶ　GLITTER&GLAMOURS",
type:"gli",
price:1300,
img:"images/kimetu/kotyo_gri.jpg"
},

{
series:"zyuzyutu",
name:"FIGURIZMα　宿儺",
type:"fig",
price:1500,
img:"images/zyuzyutu/sukuna_fig.jpg"
},

{
series:"miku",
name:"初音ミク AMP Latidos 2022",
type:"AMP",
price:1000,
img:"images/miku/miku_amp2022.jpg"
},

{
series:"miku",
name:"初音ミク AMP birthday 2023",
type:"AMP",
price:1000,
img:"images/miku/miku_amp2023.jpg"
},

{
series:"miku",
name:"初音ミク AMP birthday 2024",
type:"AMP",
price:1000,
img:"images/miku/miku_amp2024.jpg"
},

{
series:"miku",
name:"初音ミク AMP birthday 2025",
type:"AMP",
price:1000,
img:"images/miku/miku_amp2025.jpg"
},



{
series:"furi-ren",
name:"フリーレン",
type:"MAXIMATIC",
price:800,
img:"images/furi-ren/furi_ma.jpg"
},

{
series:"furi-ren",
name:"ヒンメル",
type:"MAXIMATIC",
price:800,
img:"images/furi-ren/hin_ma.jpg"
},

{
series:"kimetu",
name:"我妻善逸",
type:"VIBRATION STARS",
price:1200,
img:"images/kimetu/kimetu_zen_vib.jpg"
},

{
series:"kimetu",
name:"獪岳",
type:"VIBRATION STARS",
price:1000,
img:"images/kimetu/kimetu_kai_vib.jpg"
}

];


//シリーズフィルター
if(series !== "all"){
figures = figures.filter(f => f.series === series);
}

//タイプフィルター
if(type !== "all"){
figures = figures.filter(f => f.type === type);
}

//金額フィルター
if(price !== "all"){
figures = figures.filter(f => f.price == price);
}

if(search !== ""){
figures = figures.filter(f =>
f.name.toLowerCase().includes(search)
);
}


let html = "";

for(let i=0;i<figures.length;i++){

html += `
<div class="card">

<img src="${figures[i].img}">
<h3 class="name">${figures[i].name}</h3>
<p class="price">¥ ${figures[i].price}</p>

</div>
`;

}

document.getElementById("figureList").innerHTML = html;

}

showFigures();
