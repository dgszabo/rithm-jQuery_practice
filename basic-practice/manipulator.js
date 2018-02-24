$(document).ready(function() {
    // 1
    console.log('Let\'s get ready to party with jQuery!');
    // 2
    $('article img').addClass('image-center');
    // 3
    $('p:last-of-type').remove()
    // 4
    var randomSize = Math.floor(Math.random() * 100);
    $('h1[id="title"]').css('font-size', randomSize);
    // 5
    var newListElement = $('<li>').text('whatever you want');
    $('ol').append(newListElement);
});