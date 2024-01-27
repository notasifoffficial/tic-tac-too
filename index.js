const TicTacToe = require('discord-tictactoe')

new TicTacToe({
    token: 'MTE5MjExNTUwODExNjQ3MTk1MQ.GKFW2a.8vXNfLii3cv77GGGvkHBAQPMrqTZn4NNJZMu7s',
    language: 'en',
    command: 'tttgame',
    commandOptionName: 'opponent',
    textCommand: '!ttt'
})
    .login()
    .then( () => console.log("The bot is online!"));
    