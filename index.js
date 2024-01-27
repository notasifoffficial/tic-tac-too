const TicTacToe = require('discord-tictactoe')

new TicTacToe({
    token: '',
    language: 'en',
    command: 'tttgame',
    commandOptionName: 'opponent',
    textCommand: '!ttt'
})
    .login()
    .then( () => console.log("The bot is online!"));
    
