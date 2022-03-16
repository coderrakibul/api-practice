function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPosts(data))
}
loadPosts()

function displayPosts(posts){
   const postContainer = document.getElementById('posts');
   for(const post of posts){
       const div = document.createElement('div');
       const h2 = document.createElement('h2');
       const p = document.createElement('p');
       h2.innerText = post.title;
       p.innerText = post.body;
       div.appendChild(h2);
       div.appendChild(p);
       postContainer.appendChild(div);
       div.style.backgroundColor = 'lightpink';
       div.style.padding = '10px';
       div.style.margin = '10px';
       div.style.borderRadius = '10px';
   }

};

