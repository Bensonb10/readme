const prompt = [
    {
        name: 'github',
        type: 'input',
        message: 'What is your github name?'
    },
    {
        name: 'color',
        type: 'list',
        message: 'favorite colors',
        choices: [
            'red',
            'blue',
            'yellow'
        ]
    }
]

module.exports = prompt;