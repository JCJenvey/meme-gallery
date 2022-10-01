const $gallery = document.querySelector('main');

const imgUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://c.tenor.com/uYP_Nkq8VPsAAAAd/coding-hello-world.gif',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg'
];

const $imgUrlInput = document.querySelector('input');
const $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imgUrlInput.value !== '') {
    imgUrls.push($imgUrlInput.value);
    $imgUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (let i = 0; i < imgUrls.length; i++) {
    const $imgElement = document.createElement('img');
    $imgElement.className = 'gallery-image';
    $imgElement.src = imgUrls[i];
    $gallery.appendChild($imgElement);
  }
}

updateGallery();
