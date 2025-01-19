export const albumList = [
    {
      title: "Acabou o Chorare",
      genre: "MPB",
      band: "Novos Baianos",
      price: "137.91",
      img: "./src/assets/imgs/cover-1.png",
    },

    {
      title: "The Wall",
      genre: "Rock",
      band: "Pink Floyd",
      price: "123.56",
      img: "./src/assets/imgs/cover-2.png",
    },

    {
      title: "To Pimp a Butterfly",
      genre: "Rap",
      band: "Kendrick Lamar",
      price: "102.66",
      img: "./src/assets/imgs/cover-3.png",
    },

    {
      title: "Thriller",
      genre: "Pop",
      band: "Michael Jackson",
      price: "142.32",
      img: "./src/assets/imgs/cover-4.jpg",
    },

    {
      title: "All Eyez on Me",
      genre: "Hip-Hop",
      band: "2Pac",
      price: "50.13",
      img: "./src/assets/imgs/cover-5.jpg",
    },
    
    {
      title: "Dom de Sambar",
      genre: "Samba",
      band: "Turma do Pagode",
      price: "51.67",
      img: "./src/assets/imgs/cover-6.jpg",
    },
  ];

  export function renderElements (arr) {
    const lista = document.querySelector('ul');
  
    lista.innerHTML = '';
  
    for(let i = 0; i < arr.length; i++) {
      const li = createItem(arr[i]);
  
      lista.appendChild(li);
    }
  }
  
  function createItem (album) {
    const listaAlbum = document.createElement('li');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const p = document.createElement('p');
    const p2= document.createElement('p');
    const span = document.createElement('span');
    const button = document.createElement('button');
  
    listaAlbum.classList.toggle('itens-list');
    div.classList.toggle('infos');
    div2.classList.toggle('buy');
  
    img.src = album.img;
    h3.innerText = album.title;
    p.innerText = album.band;
    p2.innerText = album.price;
    span.innerText = album.genre;
    button.innerText = 'Comprar';
  
    listaAlbum.appendChild(img);
    listaAlbum.appendChild(h3);
    listaAlbum.appendChild(div);
    div.appendChild(p)
    div.appendChild(span);
    listaAlbum.appendChild(div2);
    div2.appendChild(p2);
    div2.appendChild(button);
  
    return listaAlbum;
  
  }