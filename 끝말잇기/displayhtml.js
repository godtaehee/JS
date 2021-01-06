var newbody = document.body;

var newword = document.createElement('div'); // 단어 제시창 생성
newword.textContent = '제로';
newbody.append(newword);

var newform = document.createElement('form'); // 마우스로 버튼을 클릭해서 정답을 제출하지 않고 Enter키를 이용해서 빠르게 제출할수 있다.
newbody.append(newform);

var newinput = document.createElement('input'); // 입력창성 생성
newform.append(newinput);

var btn = document.createElement('button'); // 버튼 생성
btn.textContent = '버튼';
newform.append(btn);

var result = document.createElement('div'); // 결과창 생성
result.textContent = '';
newbody.append(result);

newform.addEventListener('submit', function (event){ //
    event.preventDefault();
    if(newword.textContent[newword.textContent.length-1] === newinput.value[0]){
        result.textContent = '맞음';
        newword.textContent = newinput.value;
    }else
        result.textContent = '틀림';
    newinput.value ='';
    newinput.focus(); // focus가 input창으로 되돌아온다
})
