const quotes = [
    {
        quote:"상처에 의해 정신은 고양되고, 새 힘은 솟아 오른다.",
        author:"니체"
    },
    {
        quote:"너 자신이 돼라. 다른 사람은 이미 있으니까.",
        author:"오스카 와일드"
    },
    {
        quote:"인생은 가까이서 보면 비극,멀리서 보면 희극이다.",
        author:"찰리 채플린"
    },
    {
        quote:"인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.",
        author:"나딘 스테어"
    },
    {
        quote:"아무것도 하지 않으면 아무 일도 일어나지 않는다.",
        author:"기시미 이치로"
    },
    {
        quote:"일단 시작해라. 나중에 완벽해지면 된다",
        author:"론 무어"
    },
    {
        quote:"인격은 그 사람의 운명이다.",
        author:"헤라클레이토스"
    },
    {
        quote:"참을 인 세 번이면 호구다. ",
        author:"박명수"
    },
    {
        quote:"겨울이 오면 봄이 멀지 않으리.",
        author:"셸리"
    },
    {
        quote:"가장 큰 위험은 위험 없는 삶이다.",
        author:"스티븐 코비"
    },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()* quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author