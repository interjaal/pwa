window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('https://interjaal.github.io/pwa/sw.js');
  }
}
