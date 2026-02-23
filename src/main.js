import '../css/base.css'
import '../css/gallery.css'
import '../css/layout.css'
import '../css/cards.css'
import { initGallery } from './gallery.js'
import { initCards } from './cards.js'

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initCards();
});