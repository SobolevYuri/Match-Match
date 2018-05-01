var path = require("path");

module.exports = {
    entry: path.resolve('Match-match-game.js'),
    output: {
        filename: 'main.js',
    },
    watch: true,
};