const ideias = {

compostagem:{
titulo:"Compostagem Rural",
imagem:"https://images.unsplash.com/photo-1589923188900-85dae523342b",
texto:"Transforma restos vegetais e orgânicos em adubo natural, reduzindo custos e melhorando a fertilidade do solo.",
video:"https://www.youtube.com/embed/nA0v4Tj4M7M"
},

captacao:{
titulo:"Captação de Água da Chuva",
imagem:"https://images.unsplash.com/photo-1506744038136-46273834b3fb",
texto:"Sistema simples para armazenar água das chuvas e utilizá-la na irrigação durante períodos secos.",
video:"https://www.youtube.com/embed/FQ1mWq7Lx6g"
},

energia:{
titulo:"Energia Solar na Agricultura",
imagem:"https://images.unsplash.com/photo-1509395176047-4a66953fd231",
texto:"Painéis solares podem alimentar bombas de água, iluminação e equipamentos agrícolas.",
video:"https://www.youtube.com/embed/xKxrkht7CpY"
},

agrofloresta:{
titulo:"Sistema Agroflorestal",
imagem:"https://images.unsplash.com/photo-1511497584788-876760111969",
texto:"Integra árvores, cultivos e preservação ambiental, aumentando a produtividade e a biodiversidade.",
video:"https://www.youtube.com/embed/fI5v9Q6U4r4"
},

horta:{
titulo:"Horta Orgânica Sustentável",
imagem:"https://images.unsplash.com/photo-1464226184884-fa280b87c399",
texto:"Produção de alimentos sem agrotóxicos, valorizando a saúde e o meio ambiente.",
video:"https://www.youtube.com/embed/WEQbM2HnW0I"
},

biodiversidade:{
titulo:"Proteção da Biodiversidade",
imagem:"https://images.unsplash.com/photo-1473773508845-188df298d2d1",
texto:"Preservar polinizadores, nascentes e vegetação nativa melhora a produtividade agrícola.",
video:"https://www.youtube.com/embed/6v2L2UGZJAM"
}

};

function mostrarDetalhes(chave){

document.getElementById("tituloIdeia").innerText =
ideias[chave].titulo;

document.getElementById("imagemIdeia").src =
ideias[chave].imagem;

document.getElementById("textoIdeia").innerText =
ideias[chave].texto;

document.getElementById("videoIdeia").src =
ideias[chave].video;
}