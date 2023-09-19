function gameBoard() {
    const row = 3;
    const column = 3;
    const board = [['', '', ''], ['', '', ''], ['', '', '']];
    
    function deRender(){
        const container = document.querySelector('.board');
        if(container.firstChild){
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    }

    function render() {
        deRender();
        for (let i = 0; i < column; i++) {
            for (let j = 0; j < row; j++) {
                const container = document.querySelector('.board');
                const cell = document.createElement('div'); 
                cell.classList.add(`cell`); 
                cell.textContent = board[i][j]; 
                container.appendChild(cell); 
            }
        }
    }
    
    const players = [
    {
      name: 'player one',
      token: 'X'
    },
    {
      name: 'player two',
      token: 'O'
    }
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getPlayerMark = () => activePlayer.token;
  let count = 0;
    function addMark(){
        const container = document.querySelector('.board');
        
            if (container.firstChild) {
               
                const cells = container.querySelectorAll('.cell');
                let cellNo = 0;
                
                for (let i = 0; i < column; i++) {
                    for(let j = 0; j < row; j++){
                    const cell = cells[cellNo];
                    cell.addEventListener('click', () => {
                       if(cell.textContent === ''){
                        cell.textContent = getPlayerMark();
                        board[i][j] = getPlayerMark();
                        count++;
                        console.log(count);
                        getWinner(i,j);
                        switchPlayerTurn();
                       }
                       
                    });
                    cellNo++;
                    }
                }
            }
    }
    
    function getWinner(column, row){
        if(board[column][0] === board[column][1] && board[column][1] === board[column][2]){
            console.log(`The winner is ${activePlayer.name}`);

        }
        else if(board[0][row] === board[1][row] && board[1][row] === board[2][row]){
            console.log(`The winner is ${activePlayer.name}`);
        }
        else if(board[0][0] === board[1][1] && board[1][1]  && board[0][0] !== '' && board[1][1] === board[2][2] && board[2][2] !== '' || board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1] !== '' && board[2][0] !== ''){
            console.log(`The winner is ${activePlayer.name}`)

        }
        else if(count === 9){
            console.log('its a tie')
        }
    }


    render();
    addMark();
    const getBoard = () => board;
}

gameBoard();