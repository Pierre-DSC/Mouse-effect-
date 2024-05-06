// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

document.addEventListener('mousemove', (e) => {
  const customCursor = document.querySelector('#cursor');
  customCursor.style.top = e.clientY + "px";
  customCursor.style.left = e.clientX + "px";
});
document.addEventListener('mousemove', (e) => {
  const customCursor = document.querySelector('#mouse1');
  customCursor.style.top = e.clientY + "px";
  customCursor.style.left = e.clientX + "px";
});
document.addEventListener('mousemove', (e) => {
  const customCursor = document.querySelector('#mouse2');
  customCursor.style.top = e.clientY + "px";
  customCursor.style.left = e.clientX + "px";
});