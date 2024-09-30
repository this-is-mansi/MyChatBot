function getBotResponse(input) {
   input = input.toLowerCase();
    //rock paper scissors
    if (input.indexOf('play')>=0) {
        return "rock";
    }
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input.indexOf('hi')>=0||input.indexOf('hii')>=0||input.indexOf('hey')>=0||input.indexOf('hello')>=0) {
        return "Hello there!";
    } 
    else if (input.indexOf('contact')>=0) {
        return "Oh! sure...";
    }
     
    else if (input.indexOf('bye')>=0) {
       
        return "Ok bye talk to you later!";
    }
    else if (input.indexOf('name')>=0) {
       
        return "My name is Mansi";
    }
    else if (input.indexOf('age')>=0) {
       
        return "I am 18";
    }
    else if (input.indexOf('service')>=0) {
       
        return "I do provide freelancing.... for further details contact me";
    }
    
    else if (input.indexOf('touch')>=0) {
       
        return "Sure! why not.... Add me on";
    }

    else if (input.indexOf('love')>=0) {
        return "Thanks a lot";
    }
    else {
        return "Sorry couldn't get that... Can i help you any of the following ways";
    }
}












