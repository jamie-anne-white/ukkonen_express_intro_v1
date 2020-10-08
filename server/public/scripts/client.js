console.log("hello from JS");

$(document).ready(onReady);

function onReady(){
    console.log('Hey from jquery');
    //perform GET request 
    getRandomQuote();
    $('#submit').on('click', submitQuote);
    
}

function submitQuote() {
    let quote = $('#quote').val();
    let author = $('#author').val();
    console.log('clicked', quote, author);

    //send data to server via post request 
    $.ajax({
        method: 'POST',
        url: '/submitQuotes'
        data: {
            quote: quote,
            author: author
        }
    }).then(function(response){
        console.log('response', response);     
    }).catch(function(error){
        //notifyinf the user of an error
        alert(error);
    });
    
}

function getRandomQuote(){
    console.log('get the quote');
    //for client to connect to server side we need a special form of communication 
    //Ajax!!
    $.ajax({
        method: 'GET',
        url: '/randomQuote'
    }).then(function(response){
        console.log('response', response);
        appendToDom(response);
    });
    
}

function appendToDom(dataToAppend){
    //take response from server
    //append it to #output so it shows up on the dom
    $("#output").append(`
    <p>${dataToAppend.quote}</p>
    <i>By: ${dataToAppend.author}</i>`
    )

}