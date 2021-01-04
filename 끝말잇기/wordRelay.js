var word = "자동차";
var go = prompt('제시어 : ' + word);
var hp = 3;

while(true){

    if(word[word.length-1] === go[0] && parseInt(go.length) === 3){
        alert('정답입니다!');
        word = go;
    }else if(go.length < 3){
        if(go.length === 0){
            alert('아무것도 입력하시지 않으셨습니다. 남은 목숨 : ' + --hp);
        }else
            alert('글자수가 작습니다! 남은 목숨 : ' + --hp);
        go = word;
    }else if(go.length > 3){
        alert('글자수가 3글자 이상입니다! 남은 목숨 : ' + --hp);
        go = word;
    }else{
        alert('틀렸습니다 ! 남은 목숨 : ' + --hp);
        go = word;
    }

    if(hp === 0){
        alert('운명을 다하셨습니다.');
        break;
    }else
        go = prompt('제시어 : ' + word);
}
