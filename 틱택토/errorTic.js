let mybody = document.body;
let table = document.createElement('table');
let gameBoard = []
let turn = ['X','O'];
let turnDigit = 1;
for(let i = 0; i < 3; i++){
    let tr = document.createElement('tr');
    gameBoard.push([])
    for(let j = 0; j < 3; j++){
        let td = document.createElement('td');
        gameBoard[i].push(td);

        td.addEventListener('click', function (event){
          console.log(i + ' ' + j);
          console.log(td.textContent);
          if(td.textContent === '')
              td.textContent=turn[1-turnDigit];
          turnDigit = 1-turnDigit;
        })
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
mybody.append(table);
