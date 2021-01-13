let wholeBody = document.body;
let basicArray = [];
let randomArray = [];
let resetBtn = document.createElement('button');

for(let i = 1; i < 10; i++){
    basicArray.push(i);
}
console.log(basicArray);
for(let i = 0; i < 4; i++){
    let value = basicArray.splice(Math.floor(Math.random()*(8-i)),1);
    console.log(value);
    randomArray.push(value);
}
let result = document.createElement('h1');
result.textContent='결과'
wholeBody.append(result);

let hpBarDiv = document.createElement('div')
let textHp = document.createElement('h3');
let hpBar = document.createElement('progress');
hpBar.value=100;

hpBar.max=100;
textHp.textContent='현재 체력: ' + hpBar.value;
hpBar.style.height='20px';

hpBarDiv.append(textHp);
hpBarDiv.append(hpBar);
wholeBody.append(hpBarDiv);


let form = document.createElement('form');

let inputSomething = document.createElement('input');
inputSomething.maxLength=4;

let submitBtn = document.createElement('button');
submitBtn.textContent='제출하기'

form.append(inputSomething);
form.append(submitBtn);

wholeBody.append(form);
console.log(randomArray.join(''));

form.addEventListener('submit', function (event){
    event.preventDefault();
    let submittedValue = inputSomething.value;
    let answer = randomArray.join('');

    if(isDuplicated(submittedValue)){
        result.textContent = '입력하신 수에 중복된 숫자가 있습니다.';
        hpBar.value-=10;
    }
    else if(submittedValue===answer){
        result.textContent='정답입니다';
        resetBtn.textContent='다시하기';
        resetBtn.onclick= function (){
            location.reload();
        }
        document.body.append(resetBtn);

    }else{
        hpBar.value-=20;
        let information = ballOrStrike(submittedValue,answer);
        if(information.ball === 0 && information.strike === 0){
            result.textContent='아웃!';
        }else{
            result.textContent='볼 : ' + information.ball + ' 스트라이크 : ' + information.strike;
        }
    }

    if(hpBar.value===0){
        alert('패배하였습니다.');
        resetBtn.textContent='다시하기';
        resetBtn.onclick= function (){
            location.reload();
        }
        document.body.append(resetBtn);
    }
    textHp.textContent='현재 체력: ' + hpBar.value;
})

function isDuplicated(number){
    const set = new Set(number);
    if(number.length === set.size){
        return false;
    }else
        return true;
}

function ballOrStrike(digit, answer){
    let strike = 0;
    let ball = 0;
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            if(i===j){
                if(digit[i]===answer[j]){
                    strike+=1;
                }
            }else{
                if(digit[i]===answer[j]){
                    ball+=1;
                }
            }
        }
    }
    return {strike : strike, ball : ball};
}
