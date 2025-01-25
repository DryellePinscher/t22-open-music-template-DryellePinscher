// Script Global //

import  { applyInputRangeStyle }  from './inputRange.js';
import  { renderElements } from './albumsDatabase.js';
import  { themeAnalasys } from './theme.js';
import  { newList } from './api.js';

let printList = [];

async function routine() {
  applyInputRangeStyle();
  await loadAlbumsFromAPI();
  setupPriceFilter();
  themeAnalasys();
}

async function loadAlbumsFromAPI() {
  try {
    const albums = await newList();
    printList = albums.map(album => ({
      ...album,
      price: parseFloat(album.price)
    }));
    renderElements(printList);
  } catch (error) {
    console.error("Erro ao carregar os álbuns da API:", error);
  }
}

function setupPriceFilter() {
  const slider = document.querySelector('#range');
  const valueDisplay = document.querySelector('.value');

  const formatPrice = (price) => parseFloat(price).toFixed(2).replace('.', ',');

  slider.addEventListener('input', () => {
    const maxPrice = parseFloat(slider.value);
    valueDisplay.textContent = formatPrice(maxPrice);

    const filteredAlbums = printList.filter(album => album.price <= maxPrice);
    renderElements(filteredAlbums);
  });
}

routine();
