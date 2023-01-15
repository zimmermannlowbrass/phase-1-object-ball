function gameObject() {
    const game = {
        'home' : 
            {'teamName' : "Brooklyn Nets", 'colors' : ['Black', 'White'], 
            'players' : 
                {"Alan Anderson" : 
                    {'number' : 0, 'shoe' : 16, 'points': 22, 'rebounds' : 12, 'assists': 12, 'steals': 3, 'blocks' : 1, 'slamDunks' : 1},
                "Reggie Evans" :
                    {'number' : 30, 'shoe' : 14, 'points': 12, 'rebounds' : 12, 'assists': 12, 'steals': 12, 'blocks' : 12, 'slamDunks' : 7},
                "Brook Lopez" :
                    {'number' : 11, 'shoe' : 17, 'points': 17, 'rebounds' : 19, 'assists': 10, 'steals': 3, 'blocks' : 1, 'slamDunks' : 15},
                "Mason Plumlee" :
                    {'number' : 1, 'shoe' : 19, 'points': 26, 'rebounds' : 12, 'assists': 6, 'steals': 3, 'blocks' : 8, 'slamDunks' : 5},
                "Jason Terry" :
                    {'number' : 31, 'shoe' : 15, 'points': 19, 'rebounds' : 2, 'assists': 2, 'steals': 4, 'blocks' : 11, 'slamDunks' : 1}}},
        'away' : 
            {'teamName' : "Charlotte Hornets", 'colors' : ['Turquiose', 'Purple'], 
            'players' : 
                {"Jeff Adrien" : 
                    {'number' : 4, 'shoe' : 18, 'points': 10, 'rebounds' : 1, 'assists': 1, 'steals': 2, 'blocks' : 7, 'slamDunks' : 2},
                "Bismak Biyombo" :
                    {'number' : 0, 'shoe' : 16, 'points': 12, 'rebounds' : 4, 'assists': 7, 'steals': 7, 'blocks' : 15, 'slamDunks' : 10},
                "DeSagna Diop" :
                    {'number' : 2, 'shoe' : 14, 'points': 24, 'rebounds' : 12, 'assists': 12, 'steals': 4, 'blocks' : 5, 'slamDunks' : 5},
                "Ben Gordon" :
                    {'number' : 8, 'shoe' : 15, 'points': 33, 'rebounds' : 3, 'assists': 2, 'steals': 1, 'blocks' : 1, 'slamDunks' : 0},
                "Brendan Haywood" :
                    {'number' : 33, 'shoe' : 15, 'points': 6, 'rebounds' : 12, 'assists': 12, 'steals': 22, 'blocks' : 5, 'slamDunks' : 12}}},
    };
    return game;
}

function homeTeamName() {
    let object = gameObject();
    let homeInfo = Object.values(object)[0];
    let homeName = Object.values(homeInfo)[0];
    return homeName;
}

function numPointsScored(playerName) {
    let object = gameObject();
    let homePlayers = object['home']['players'];
    let awayPlayers = object['away']['players'];
    for (let k = 0; k < (Object.keys(homePlayers).length); k++) {
        if (Object.keys(homePlayers)[k] === playerName) {
            return homePlayers[playerName]['points'];
        }
    };
    for (let j = 0; j < Object.keys(awayPlayers).length; j++) {
        if (Object.keys(awayPlayers)[j] === playerName) {
            return awayPlayers[playerName]['points'];
        } 
    };
    return 'Cannot find this player';
}

function shoeSize(playerName) {
    let homePlayers = gameObject()['home']['players'];
    let awayPlayers = gameObject()['away']['players'];
    let players = { ...homePlayers, ...awayPlayers};
    for (let i = 0; i < (Object.keys(players).length); i++) {
        if (Object.keys(players)[i] === playerName) {
            return players[playerName]['shoe'];
        }
    };
    return 'Cannot find this player';
}

function teamColors(teamName) {
    let object = gameObject();
    if (object['home']['teamName'] === teamName) {
        return object['home']['colors'];
    } else if (object['away']['teamName'] === teamName) {
        return object['away']['colors'];
    } else {
        return 'Cannot find this team';
    }
}

function teamNames() {
    return Object.keys(gameObject());
}

function playerNumbers(teamName) {
    let object = gameObject();
    if (object['home']['teamName'] === teamName) {
        where = 'home';
    } else if (object['away']['teamName'] === teamName) {
        where = 'away';
    } else {
        return 'Cannot find this team';
    }
    
    let players = object[where]['players'];
    let numbers = []
    for (const key in players) {
        numbers.push(players[key]['number']);
    }
    return numbers;
}

function playerStats (playerName) {
    let homePlayers = gameObject()['home']['players'];
    let awayPlayers = gameObject()['away']['players'];
    let players =  {...homePlayers, ...awayPlayers};
    for (const player in players) {
        if (player === playerName) {
            return players[playerName];
        }
    }
    return 'Cannot find this player\'s stats';
}

function bigShoeRebounds() {
    let homePlayers = gameObject()['home']['players'];
    let awayPlayers = gameObject()['away']['players'];
    let players =  {...homePlayers, ...awayPlayers};
    biggestShoe = 0
    biggestShoedPlayer = ''
    for (const player in players) {
        if (players[player]['shoe'] > biggestShoe) {
            biggestShoe = players[player]['shoe']
            biggestShoedPlayer = player
        }
    }
    return players[biggestShoedPlayer]['rebounds'];
}

function mostPointsScored() {
    let homePlayers = gameObject()['home']['players'];
    let awayPlayers = gameObject()['away']['players'];
    let players =  {...homePlayers, ...awayPlayers};
    mostPoints = 0
    playerWithMostPoints = '';
    for (const player in players) {
        if (players[player]['points'] > mostPoints) {
            mostPoints = players[player]['points']
            playerWithMostPoints = player;
        }
    }
    return playerWithMostPoints;
}

function winningTeam() {
    let homeTotal = 0;
    let awayTotal = 0;
    let homePlayers = gameObject()['home']['players'];
    let awayPlayers = gameObject()['away']['players'];
    for (const player in homePlayers){
        homeTotal += homePlayers[player]['points'];
    }
    for (const player in awayPlayers) {
        awayTotal += awayPlayers[player]['points'];
    }
    if (homeTotal > awayTotal) {
        return 'home';
    } else if (awayTotal < homeTotal) {
        return 'away';
    } else {
        return 'it is a tie!'
    }
}

function playerWithLongestName() {
    let object = gameObject();
    let longestName = ''
    let maxLength = 0
    let homePlayers = gameObject()['home']['players'];
    let awayPlayers = gameObject()['away']['players'];
    for (const player in homePlayers) {
        if (player.length > maxLength) {
            maxLength = player.length;
            longestName = player
        } else if (player.length === maxLength) {
            longestName += player
        }
    }
    for (const player in awayPlayers) {
        if (player.length > maxLength) {
            maxLength = player.length;
            longestName = player
        } else if (player.length === maxLength) {
            longestName += player
        }
    }
    return longestName;

}

function doesLongNameStealATon() {
    let longName = playerWithLongestName();
    let homePlayers = gameObject()['home']['players'];
    let awayPlayers = gameObject()['away']['players'];
    let players =  {...homePlayers, ...awayPlayers};
    let longNameSteal = players[longName]['steals'];
    for (const player in players) {
        if ((players[player]['steals'] > longNameSteal) && (player != longName)) {
            return 'no'
        }
    }
    return 'yes';
}