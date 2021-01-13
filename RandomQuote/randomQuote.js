let quoteList = '내가 매순간 생산자가 될지 소비자가 될지 결정한다. 그결정이 모여서 나는 생산자가 되던지 소비자가 된다.,' +
    '이렇게 평온할수 있는 이유는 내 가족들과 현재 이 세상에 살아있기 때문이다.,' +
    '정말 기분나쁘고 너무나도 슬픈꿈을 꿨었다. 1월 13일날 가족을 잃는 꿈을꾸었다 정말 억장이 무너진다.,' +
    '답을 위인들한테서 찾는것도 좋지만 답은 내안에있다.';

let quote =document.createElement('h1');
let quoteListReal = quoteList.split(',');
let size = Math.floor(Math.random()*Math.floor(quoteListReal.length));

quote.textContent=quoteListReal[size];
console.log(quoteListReal[size]);
document.body.append(quote);
console.log(quoteListReal);





