var LaunchDarkly = require('ldclient-node');
var request = require('request');
var client = LaunchDarkly.init('');
var user = {
    'firstName': 'Bob',
    'lastName': 'Loblaw',
    'key': 'bob@example.com',
    'custom': { 'groups': 'beta_testers' }
};
client.once('ready', function () {
    {
        client.flush(function () {
            client.close();
        });
        {
            console.log('Showing your feature to ' + user.key);
        }
    }
});
var options = {
    url: 'https://app.launchdarkly.com/api/v2/flags/default',
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        'Authorization': ''
    }
};
request(options, function (error, response, body) {
    console.log('Status code: ' + response.statusCode);
    console.log(body);
});