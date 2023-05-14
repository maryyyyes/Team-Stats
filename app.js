const team = {
  _players:[
    {firstName: 'Mary', lastName: 'Someone', age: 22 }, 
    {firstName: 'Bright', lastName: 'Plearn', age:33}, 
    {firstName: 'Lily', lastName: 'Natalie', age:'18'},
  ],
  _games: [ {
    opponent: 'Robots', teamPoints: 5, opponentPoints: 3}, { opponent: 'Monsters', teamPoints: 70, opponentPoints: 8}, {opponent: 'Cats', teamPoints: 2, opponentPoints: 20}], 
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game)
  }
};
team.addPlayer('Bugs', 'Bunny', 76)
team.addGame('Titans', 100, 98)
console.log(team.game);
console.log(team.players);