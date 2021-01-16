const materials = [
    'taehee',
    'taeheekim',
    'kingrobin',
    'wonderfulhuman' 
   ];
   
   // map함수는 iterable 객체의 원소들을 다 돌면서 어떤걸 할지 결정하는 함수이다.


let a = 100;
let b = 20;
// 1
function (a){
    return a;
}
(a) => a;


// 2
function (a,b){
    return a+b;
}
(a,b) => a+b;


// 3 코드가 한줄이아니라 저렇게 두줄이상이 되면 괄호를 어쩔수없이 써야함 
// 화살표 함수라고 다 생략이되는건 아니다.
function (a,b){
    console.log(a);
    return a+b;
}

// 함수에 이름이 있을때 변수로 바로 함수선언 가능

function name(a,b){
    return a+b;
}

let name = (a,b) => a+b;
