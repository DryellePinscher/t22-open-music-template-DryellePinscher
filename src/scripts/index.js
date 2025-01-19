// Script Global //

import  { applyInputRangeStyle }  from './inputRange.js';

import  { albumList }  from './albumsDatabase.js';

function routine() {
    applyInputRangeStyle();
    renderElements(albumList);
}

function renderElements (arr) {
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

routine();
