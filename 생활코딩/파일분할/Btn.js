var Body = {
    nightDayHandler : function (self) {
        var target = document.querySelector('body');
        // document는 객체, querySelector는 함수가 아니라 메소드 객체의 함수를 메소드라한다.
        if (self.value === 'night') {
            target.style.backgroundColor = 'black';
            target.style.color = 'white';
            List.listColor('yellow');
            self.value = 'white';
        } else {
            target.style.backgroundColor = 'white';
            target.style.color = 'black';
            List.listColor('blue');
            self.value = 'night';
        }
    }
};

var List = {
    listColor : function(color){
        var alist = document.querySelectorAll('a');
        for(let i = 0; i < alist.length; i++){
            alist[i].style.color=color;
        }
    }
}