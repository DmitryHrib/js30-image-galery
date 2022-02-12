const url = 'https://api.unsplash.com/search/photos?query=constellation&per_page=30&page=1&orientation=landscape&client_id=U1oScaJA2OtHiB-_m02aS2FAZvD1nI7q-m2i5-QIHZQ';
const submit = document.querySelector('button');
//////Изображения
async function getData(url) {  
    const res = await fetch(url);
    const data = await res.json();
    for (let key in data) {
        let arr = data[key];
        for (let key in arr) {
            let plus = arr[key].urls.regular;
            getImage(plus);
        }
    }          
  }
  getData(url)

function getImage(plus) {
 const main__content = document.querySelector('.main__content');
    const imgEL = document.createElement('img');
    imgEL.classList.add('gallery-img')
    imgEL.src = `${plus}`;
    imgEL.alt = `image`;
    main__content.append(imgEL);   
}


const input = document.querySelector('.input');
const form = document.querySelector('form');
form.addEventListener('submit', (event) => { 
    event.preventDefault();   
    const start = `https://api.unsplash.com/search/photos?query=${input.value}&per_page=30&page=1&orientation=landscape&client_id=U1oScaJA2OtHiB-_m02aS2FAZvD1nI7q-m2i5-QIHZQ`;
    if (input.value) {
        getData(start); 
        console.log(input.value);       
    }    
});
