// Include prompt module.
var prompt = require('prompt');

// This json object is used to configure what data will be retrieved from command line.
var prompt_attributes = [
    {
        name: 'username',
        // The username must match below regular expression.
        validator: /^[a-zA-Z\s\-]+$/,
        // If username is not valid then prompt below message.
        warning: 'Username is not valid, it can only contains letters, spaces, or dashes'
    },
    {
        notes : []
    }
];

// Start the prompt to read user input.
prompt.start();

// Prompt and get user input then display those data in console.
prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    }else {
        console.log('Command-line received data:');

        // Get user input from result object.
        var username = result.username;
        var array = []
        var dummy = 0;
        for(let i=0;i<5;i++){
            dummy = result.notes[i];
            array.push(dummy);
        }

        // Display user input in console log.
        console.log(array);
    }
});