const TicTacToe = require('discord-tictactoe')

new TicTacToe({
    token: 'MTE5MjExNTUwODExNjQ3MTk1MQ.GUBHnJ.EY28R0n9SLm9bHOOnjr_uaQX8SkmUfgTJdQKes',
    language: 'en',
    command: 'tttgame',
    commandOptionName: 'opponent',
    textCommand: '!ttt'
})
    .login()
    .then( () => console.log("The bot is online!"));
    
