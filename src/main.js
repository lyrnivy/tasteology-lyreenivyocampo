import './css/base.css'
import './css/gallery.css'
import './css/layout.css'
import './css/cards.css'
import { initGallery } from './js/gallery.js'
import { initCards } from './js/cards.js'

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initCards();
});