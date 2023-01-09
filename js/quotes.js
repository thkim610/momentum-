const quotes = [
  {
    quote: "인생이란 내가 다른 계획을 세우느라 바쁠 때 너에게 일어나는 것이다.",
    author: "존 레논"
  },
  {
    quote: "인생은 가까이서 보면 비극이지만 멀리서 보면 희극이다.",
    author: "찰리 채플린"
  },
  {
    quote: "인생의 비극이란 사람들이 삶을 사는 동안 내면에서 잃어가는 것들이다.",
    author: "알버트 아인슈타인"
  },
  {
    quote: "인생에서 원하는 것을 얻기 위한 첫 번째 단계는 내가 무엇을 원하는지 결정하는 것이다. ",
    author: "벤 스타인"
  },
  {
    quote: "나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 해줄 수 없다.",
    author: "캐롤 버넷"
  },
  {
    quote: "가장 용감한 행동은 자신만을 생각하는 것이다. 큰 소리로.",
    author: "가브리엘 샤넬"
  },
  {
    quote: "우리가 이룬 것 만큼, 이루지 못한 것도 자랑스럽다.",
    author: "스티브 잡스"
  },
  {
    quote: "스스로를 존경하면 다른 사람도 당신을 존경할 것이다.",
    author: "공자"
  },
  {
    quote: "행복은 여정이지, 목적지가 아니라는 점을 기억하라.",
    author: "로이 M. 굿맨"
  },
  {
    quote: "아무것도 배우지 않고 있기보다는 쓸모없는 것이라도 배우는 편이 낫다.",
    author: "세네카"
  }

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // 숫자를 랜덤으로 가져옴 (floor = 소수점을 내림함)

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;