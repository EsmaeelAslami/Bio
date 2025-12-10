/* assets/js/main.js */
// Simple lightbox for images with class .lightbox
document.addEventListener('DOMContentLoaded', function(){
  // create overlay
  var overlay = document.createElement('div');
  overlay.id = 'lightboxOverlay';
  overlay.innerHTML = '<img src="" alt="preview"><button aria-hidden="true" style="position:absolute;top:20px;right:24px;font-size:28px;background:none;border:none;color:#fff;cursor:pointer;">✕</button>';
  document.body.appendChild(overlay);

  var overlayImg = overlay.querySelector('img');
  var closeBtn = overlay.querySelector('button');

  document.querySelectorAll('[data-lightbox]').forEach(function(el){
    el.addEventListener('click', function(e){
      e.preventDefault();
      var src = el.getAttribute('data-large') || el.getAttribute('href') || el.querySelector('img')?.src;
      overlayImg.src = src;
      overlay.style.display = 'flex';
    });
  });

  overlay.addEventListener('click', function(e){
    if(e.target === overlay || e.target === closeBtn) overlay.style.display = 'none';
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') overlay.style.display = 'none';
  });
});

