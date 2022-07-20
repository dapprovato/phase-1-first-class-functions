function jolly() {
    console.log("My cat!");
}

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    function functionLab() {
        console.log("This is tuff!")
    }
        return functionLab
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("Hi")
    }
}