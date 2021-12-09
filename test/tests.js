// IMPORT MODULES under test here:
    import { score } from '../game.js';

const test = QUnit.test;
// Test player Rock Com Rock
test('player rock, computer rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'rock';
    const expected = 'tie';


// Test player Scissors Com Scissors
    test('player scissors, computer scissors', (expect) => {
        //Arrange
        // Set up your arguments and expectations
        const player = 'scissors';
        const computer = 'scissors';
        const expected = 'tie';


        // Test player Paper Com Paper
    test('player paper, computer paper', (expect) => {
        //Arrange
        // Set up your arguments and expectations
        const player = 'paper';
        const computer = 'paper';
        const expected = 'tie';
    

       // Test player Paper Com Rock
    test('player paper, computer rock', (expect) => {
        //Arrange
        // Set up your arguments and expectations
        const player = 'paper';
        const computer = 'rock';
        const expected = 'player';

        // Test player Rock Com Paper
    test('player rock, computer paper', (expect) => {
        //Arrange
        // Set up your arguments and expectations
        const player = 'rock';
        const computer = 'paper';
        const expected = 'computer';}

        // Test player Rock Com Scissors
    ('player rock, computer scissors', (expect) => {
        //Arrange
        // Set up your arguments and expectations
        const player = 'rock';
        const computer = 'scissors';
        const expected = 'player';
    

        // Test player Paper Com Scissors
    test('player paper, computer scissors', (expect) => {
        //Arrange
        // Set up your arguments and expectations
        const player = 'paper';
        const computer = 'scissors';
        const expected = 'computer';

        // Test player Scissors Com Paper
    test('player scissors, computer paper', (expect) => {
        //Arrange
        // Set up your arguments and expectations
        const player = 'scissors';
        const computer = 'paper';
        const expected = 'player';

        // Test player Scissors Com Rock
    test('player scissors, computer rock', (expect) => {
        //Arrange
        // Set up your arguments and expectations
        const player = 'scissors';
        const computer = 'rock';
        const expected = 'computer';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = score(player, computer);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
