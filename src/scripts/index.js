// Script Global //

import  { applyInputRangeStyle }  from './inputRange.js';
import  { albumList }  from './albumsDatabase.js';
import  { renderElements } from './albumsDatabase.js';
import  { themeAnalasys } from './theme.js';

function routine() {
    applyInputRangeStyle();
    renderElements(albumList);
    inptRange();
    filtraAlbuns();
    themeAnalasys();
}

function inptRange () {
  const slider = document.querySelector('#range');
  const value = document.querySelector('.value');
}

  value.textContent = slider.value;
  slider.oninput = function(){
      value.textContent = this.value;
  }
  
  function filtraAlbuns() {
    const input = document.getElementById('range');
    input.addEventListener("input", (event) => {
    const albumFiltrado = albumList.filter(album => album.price <= parseInt(input.value));
    renderElements(albumFiltrado);
    });
}

routine();
