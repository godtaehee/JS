function sayHello(){
    return "Hello, ";
}

//다른 함수의 인자로 들어가는 함수를 CallBack함수라고 한다 여기선 sayHello()가 콜백함수다.

function greeting(helloFunc, name){
    console.log(helloFunc(), "Tahee");
}

greeting(sayHello(), "Taehee");
