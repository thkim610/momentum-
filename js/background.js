const images = ["0.jpg", "1.jpg", "2.jpg"];

const myImage = images[Math.floor(Math.random() * images.length)]; // 랜덤으로 이미지 가져오기

const bgImage = document.createElement("img");  //js에서 html 요소 추가하기

bgImage.src = `img/${myImage}`;

document.body.appendChild(bgImage); // body 맨 뒤에 html요소 추가 *prepend -> 맨 앞에 요소 추가

