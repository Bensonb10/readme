var inquirer = require('inquirer');
var API = require('./utils/API')
var questions = require('./utils/prompts');
var fs = require('fs')

start();

function start() {
    inquirer.prompt(questions)
        .then(function (answers) {
            API.getUser(answers.github)
                .then(function (user) {

                    var pageObj = {
                        color: answers.color,
                        login: user.data.login,
                        avatar_url: user.data.avatar_url
                    }

                    console.log(pageObj)

                    fs.readFile('./utils/template.md', 'utf8', function(err, template){
                        if (err) throw err;

                        console.log(template)                        
                        for(var key in pageObj){
                            template = template.replace('{{' + key + '}}', pageObj[key])
                        }
                        
                        fs.writeFile('./output/readMe.md', template, function(err){
                            if(err) throw err;
                        })

                    })
                })
        })
}