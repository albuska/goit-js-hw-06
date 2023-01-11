const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesListEl = document.querySelector('.gallery');

for(let i = 0; i < images.length; i += 1) {
const imagesItemEl = `<li><img src="${images[i].url} alt="${images[i].alt}" width="450" height="320"/></li>`;
  // onsole.log(imagesItemEl);c  
  imagesListEl.insertAdjacentHTML("afterbegin", imagesItemEl); 
}


imagesListEl.style.display = "flex"; 
imagesListEl.style.gap= "30px";
images.style.listStyle = "none"; 


// const imageEl2 = document.createElement('img');
// imageEl2.src = images[1].url;
// imageEl2.alt = images[1].alt; 
// console.log(imageEl2); 

// const imageEl3 = document.createElement('img');
// imageEl3.src = images[2].url;
// imageEl3.alt = images[2].alt; 
// console.log(imageEl3);

// imagesEl.insertAdjacentHTML("afterbegin", imageEl1);
