"use strict";
const quotes = [
  {
    quote: "승자는 달리면서 계산하고, 패자는 달리기도 전에 계산하느라 바쁘다.",
    author: "세이노의 가르침 단행본",
  },
  {
    quote: "승리는 가장 끈기있는 자에게 돌아간다.",
    author: "나폴레옹 보나파르트",
  },
  {
    quote: "실패가 거듭되는것이 아니다. 성공에 가까워지고 있는 것이다.",
    author: "작자 미상",
  },
  {
    quote: "실패는 성취하지 못했음을 의미하지 않는다. 당신이 무엇인가 새로 배웠음을 의미한다.",
    author: "로버트 해럴드 슐러",
  },
  {
    quote: "성공엔 마법이 필요하지 않다. 노력과 선택 그리고 꾸준함일 뿐이다.",
    author: "미셸 오바마",
  },
  {
    quote: "강물은 바위를 부술 수 있다. 강물이 바위를 부술 수 있는것은 강한 힘이 있어서가 아니고 꾸준하기 때문이다.",
    author: "제임스 왓킨스",
  },
];

const quote = document.querySelector("#quote span:first-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${todaysQuote.quote}　　-${todaysQuote.author}-`;
