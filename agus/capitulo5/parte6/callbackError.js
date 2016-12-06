function perform(a, b, callback) {
    // do processing
    var errorCode = 102;
    callback(errorCode, 'Internal server error');
}

perform(10, 5, function (errCode, msg) {
    if (errCode) {
        console.log(msg);
    }
})
