var axios = require('axios');

const API = {
    getUser: function(username){
        return axios.get('http://api.github.com/users/' + username)
    }
}

module.exports = API;