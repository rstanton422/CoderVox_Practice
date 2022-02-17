//function is defined, but needs to be called
function message () {
    document.write("I got your message. Tell me what to do. ")
}

//need to place functionName();
message();

function message2() {
    document.write("I got your other message. Tell me what to do. ");

    var message = "";
    var i = 1;

    while(i <= 10) {
        message = "<p>I am number " + i + "!</p>";
        document.write(message);
        i++;
    }

    console.log("Do you need to repent?")
}

message2();