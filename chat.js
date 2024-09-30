











 

// Collapsible
var coll = document.getElementsByClassName("collapsible");


for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
       
           
             this.classList.toggle("active");     

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
           

        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
     firstBotMessage();
        
    });    
}

function getTime() {    
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Hey Mansi here...";
     setTimeout(() => {
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
     }, 100);
     setTimeout(() => {
        document.getElementById("botsecStarterMessage").innerHTML = '<p class="botText"><span>' + "Let me know how can i help you" + '</span></p>';
     }, 1000);
     
    document.getElementById("userInput").scrollIntoView(true);
}

let time = getTime();

$("#chat-timestamp").append(time);




// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    // let extra = '<p class="botText"><span>' + "Can i help you any of the following ways" + '</span></p>'; 
     
    $("#chatbox").append(botHtml);
   
     if(botResponse.indexOf('bye')<0 && botResponse.indexOf('sure')<0 && botResponse.indexOf('why not')<0 && botResponse.indexOf('rock')<0 && botResponse.indexOf('paper')<0&& botResponse.indexOf('scissors')<0 && botResponse.indexOf('play')<0 && botResponse.indexOf('always')<0 && botResponse.indexOf('Hello')<0 && botResponse.indexOf('provide freelancing'))
     {
        // $("#chatbox").append(extra);
        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + "Would you like to ....   "+ "contact me" + '</span></p>');
            $("#chatbox").append('<p class="botText"><span>' + "Get in touch with me" + '</span></p>');
            $("#chatbox").append('<p class="botText"><span>' + "Services i provide" + '</span></p>');
            $("#chatbox").append('<p class="botText"><span>' + "play roshambo" + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }, 300);
       
     }
     if(botResponse.indexOf('I do provide freelancing')>=0){
        $("#chatbox").append('<p class="botText"><span>' + 'Call me : <a class="diff" href="tel:+91 8262990252" target="_blank"><button></button></a>'  + '</span></p>');
        $("#chatbox").append('<p class="botText"><span>' + 'Whatsapp :    <a href="https://api.whatsapp.com/send/?phone=+918262990252&text=Hello%20Mansi %20!!  "   target="_blank"><button class="btn"><i class="fab fa-whatsapp"></i></button></a>'  + '</span></p>');         
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }

     if(botResponse.indexOf('why not')>=0)
    {        setTimeout(() => {

            $("#chatbox").append('<p class="botText"><span>' + 'linked in:   <a href="https://www.linkedin.com/in/mansi-kothale-b90581201/"><button class="btn"><i class="fab fa-linkedin-in"></i></button></a>'  + '</span></p>');  
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
           
         }, 500);
          setTimeout(() => {

            $("#chatbox").append('<p class="botText"><span>' + 'Whatsapp :    <a href="https://api.whatsapp.com/send/?phone=+918262990252&text=Hello%20Mansi %20!!  "   target="_blank"><button class="btn"><i class="fab fa-whatsapp"></i></button></a>'  + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
  
          }, 700);
        
           setTimeout(() => {
            
            $("#chatbox").append('<p class="botText"><span>' + 'Github :  <a href="https://github.com/this-is-mansi"><i class="fab fa-github text-dark fa-2x"></i></a>'  + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);

           }, 1000);       
           
     }

     if(botResponse.indexOf('Oh! sure...')>=0)
     {
         setTimeout(() => {

            $("#chatbox").append('<p class="botText"><span>' + 'Mail me :     <a href="mailto:mansikothale@gmail.com" target="_blank"><i class="fab fa-facebook"></i></a>'  + '</span></p>');       document.getElementById("chat-bar-bottom").scrollIntoView(true);        
         }, 500);
          setTimeout(() => {

            $("#chatbox").append('<p class="botText"><span>' + 'Whatsapp me :    <a href="https://api.whatsapp.com/send/?phone=+918262990252&text=Hello%20Mansi %20!!  "   target="_blank"><button class="btn"><i class="fab fa-whatsapp"></i></button></a>'  + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
          }, 700);
        
           setTimeout(() => {
            
            $("#chatbox").append('<p class="botText"><span>' + 'Call me : <a class="diff" href="tel:+91 8262990252" target="_blank"><button></button></a>'  + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
           }, 1000);       

         

     }
     
    
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love your website!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    // buttonSendText("I love your website!");
    getResponse();
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});