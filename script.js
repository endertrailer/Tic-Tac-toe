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

  const player = document.querySelector('.player');

  const changePlayer = () => {
    if(activePlayer.token === 'X'){
        player.textContent = "Player 1's Turn";
    }
    else if(activePlayer.token === 'O'){
        player.textContent = "Player 2's Turn";
    }
  }
  let count = 0;
  let continueGame = true;
    function endGame(value){
        if(value === 'end'){
            if(activePlayer.token === 'O'){
                player.textContent = 'Player 1 Wins!';
                continueGame = false;
            }
            else if(activePlayer.token === 'X'){
                player.textContent = "Player 2 Wins!";
                continueGame = false;
            }
        }
        else if(value === 'Tie'){
            player.textContent = "It's a Tie!"
            continueGame = false;
        }
    }

    function addMark(){
        const container = document.querySelector('.board');
        
            if (container.firstChild) {
               
                const cells = container.querySelectorAll('.cell');
                let cellNo = 0;
                
                for (let i = 0; i < column; i++) {
                    for(let j = 0; j < row; j++){
                    const cell = cells[cellNo];
                    cell.addEventListener('click', () => {
                       if(cell.textContent === '' && continueGame === true){
                        cell.textContent = getPlayerMark();
                        board[i][j] = getPlayerMark();
                        count++;
                        console.log(count);
                        switchPlayerTurn();
                        changePlayer();
                        getWinner(i,j);
                       }
                       
                    });
                    cellNo++;
                    }
                }
            }
    }
    
    function getWinner(column, row){
        if(board[column][0] === board[column][1] && board[column][1] === board[column][2]){
            endGame('end');
        }
        else if(board[0][row] === board[1][row] && board[1][row] === board[2][row]){
            endGame('end');
        }
        else if(board[0][0] === board[1][1] && board[1][1]  && board[0][0] !== '' && board[1][1] === board[2][2] && board[2][2] !== '' || board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1] !== '' && board[2][0] !== ''){
            endGame('end');

        }
        else if(count === 9){
            endGame('Tie');
        }
    }


    render();
    addMark();
    const getBoard = () => board;
}

gameBoard();