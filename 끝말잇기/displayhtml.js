var newbody = document.body;
var newword = document.createElement('div');
newword.textContent = '제로';
newbody.append(newword);
var newinput = document.createElement('input');
newbody.append(newinput);
var btn = document.createElement('button');
btn.textContent = '버튼';
document.body.append(btn);
var result = document.createElement('div');
result.textContent = '';
newbody.append(result);

btn.addEventListener('click', function (){
    if(newword.textContent[newword.textContent.length-1] === newinput.value[0]){
        result.textContent = '맞음';
        newword.textContent = newinput.value;
    }else
        result.textContent = '틀림';
})
