var newbody = document.body;
let hp = 5;
var i = Math.ceil(Math.random()*9);
var j = Math.ceil(Math.random()*9);

var problem = document.createElement('div');
var hpBar = document.createElement('div');
hpBar.textContent='';
for(let i = 0; i < hp; i++){
    hpBar.textContent+='#';
}


newbody.append(problem);

startGame();


var state = document.createElement('div');
state.textContent='ssfas';
newbody.append(state);
newbody.append(hpBar);



var newinput = document.createElement('input');
newinput.type = 'text'
newinput.id='problem'

var newbtn = document.createElement('input');
newbtn.type='submit';

var newform = document.createElement('form');
newform.append(newinput);
newform.append(newbtn);

newform.addEventListener('submit', judge);
newbody.append(newform);

function judge(event){
    event.preventDefault();
    if(hp <= 1){
        alert('Game Over');
        createRestartBtn();
    }
    let answer = document.getElementById('problem');
    console.log(answer.value);
    console.log(i*j);
    if(parseInt(answer.value) === i*j){
        console.log("맞음");
        state.textContent='맞았습니다';
        startGame();

    }else
    {
        state.textContent='틀렸습니다.';
        hp--;
        hpBar.textContent='';
        for(let i = 0; i < hp; i++){
            hpBar.textContent+='#';
    }
    }
}

function createRestartBtn(){
    var restartBtn = document.createElement('button');
    restartBtn.type='button';
    restartBtn.value='다시시작하기!'
    document.body.append(restartBtn);
}
function startGame(){

    i = Math.ceil(Math.random()*9);
    j = Math.ceil(Math.random()*9);
    problem.textContent = '문제 = ' + i + ' * ' + j;

}
