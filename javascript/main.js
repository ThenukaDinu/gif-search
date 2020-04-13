/*1. Grab the input */

document.querySelector('.js-go').addEventListener('click', function () {
    var input = document.querySelector('.js-userinput').value;
    pushToSearch(input);
})

document.querySelector('.js-userinput').addEventListener('keyup', function (e) {
    var input = document.querySelector('.js-userinput').value;

    // if the key ENTER is pressed...
    if (e.which === 13) {
        pushToSearch(input);
    }

})


/*2. Do the stuff with the API */

function pushToSearch(input) {
    var url = "https://api.giphy.com/v1/gifs/search?api_key=2NlL4cniCIjE0PHTfOwyJ2snk7iC0EZk&q=" + input + "&limit=25&offset=0&rating=G&lang=en";

    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', function (e) {

        var data = e.target.response;
        pushToDom(data);

    });
}
/*2. Show me the GIFs */

function pushToDom(input) {

    var response = JSON.parse(input);
    var imageUrls = response.data;

    var container = document.querySelector('.js-container');
    container.innerHTML = '';

    imageUrls.forEach(function (image) {
        var src = image.images.fixed_height.url;
        container.innerHTML += "<img style=\"padding:20px \" src=\"" + src + "\">";
    });
}
