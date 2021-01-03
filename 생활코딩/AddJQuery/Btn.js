var Body = {
    nightDayHandler : function (self) {
        var target = document.querySelector('body');
        // document는 객체, querySelector는 함수가 아니라 메소드 객체의 함수를 메소드라한다.
        if (self.value === 'night') {
            $('body').css('backgroundColor', 'black');
            $('body').css('color', 'white');
            List.listColor('yellow');
            self.value = 'white';
        } else {
            $('body').css('backgroundColor','white');
            $('body').css('color','black');
            List.listColor('blue');
            self.value = 'night';
        }

    }
};

var List = {
    listColor : function(color){
        $('a').css('color', color);
        // var alist = document.querySelectorAll('a');
        // for(let i = 0; i < alist.length; i++){
        //     alist[i].style.color=color;
        // }
    }
}