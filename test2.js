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
    client.variation('sample-feature', user, false, function (err, showFeature) {
        if (showFeature) {
            console.log('Showing your feature to ' + user.key);
        } else {
            console.log('Not showing your feature to ' + user.key);
        }
        client.flush(function () {
            client.close();
        });
    });
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