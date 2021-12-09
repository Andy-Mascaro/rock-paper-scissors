export function score(player, computer) {
    if (player === 'rock' && computer === 'rock') {
        return 'tie';
    }
    if (player === 'scissors' && computer === 'scissors'){
        return 'tie';
    }
    if (player === 'paper' && computer === 'paper'){
        return 'tie';
    }
    if (player === 'paper' && computer === 'rock'){
        return 'player';
    }
    if (player === 'rock' && computer === 'paper'){
        return 'computer';
    }
    if (player === 'rock' && computer === 'scissors'){
        return 'player';
    }
    if (player === 'paper' && computer === 'scissors'){
        return 'computer';
    }
    if (player === 'scissors' && computer === 'paper'){
        return 'player';
    }
    if (player === 'scissors' && computer === 'rock'){
        return 'computer';
    }
}


export const characters = [{
    name: 'Rock',
    image: 'assets/avatars/rock.png',
    audio: 'assets/sounds/car.mp3',
}, {
    name: 'Paper',
    image: 'assets/avatars/paper.png',
    audio: 'assets/sounds/rocket.mp3'

}, { name: 'Scissors',
    image: 'assets/avatars/scissors.png',
    audio: 'assets/sounds/boat.mp3'
}];