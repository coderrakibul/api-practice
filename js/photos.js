function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => displayPhotos(data))
}
loadPhotos()

function displayPhotos(photos) {
    const photoSection = document.getElementById('photos');
    for (const photo of photos) {
        console.log(photo);
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const img = document.createElement('img.src');
        h2.innerText = photo.title;
        img.innerText = photo.url;
        div.appendChild(h2);
        div.appendChild(img);
        photoSection.appendChild(div);
    }
}