const clock = document.querySelector("#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); // 한 자리 숫자 두 자리로 나타내기 (.padStart())
  const minutes = String(date.getMinutes()).padStart(2, "0"); // 2자리로 나타내면서 앞에 숫자 0 추가
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //바로 함수 호출하기
setInterval(getClock, 1000); // 함수 반복하기 setInterval(함수명, 밀리초 동안)