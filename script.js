navigator.serviceWorker.register('sw.js');

const btn = document.querySelector('#btn-install');
btn.style.display = 'none';
btn.onclick = install;

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevents the default mini-infobar or install dialog from appearing on mobile
  e.preventDefault();
  // Save the event because you'll need to trigger it later.
  deferredPrompt = e;
  console.log('before install');
  btn.style.display = 'block';
  // Show your customized install prompt for your PWA
  // Your own UI doesn't have to be a single element, you
  // can have buttons in different locations, or wait to prompt
  // as part of a critical journey.
  console.log('install');
});

function install(e) {
  console.log('INstall inited', deferredPrompt);
  deferredPrompt.prompt();
}
