stories = [
    "Im Buchladen hast du keine Idee, welches Buch du kaufen möchtest. Du bittest die Verkäuferin um Rat und sie fragt dich, welches Genre dich anspricht. Romance oder Abenteuer?",
    "Für Romance kann dir die Verkäuferin zwei Bücher empfehlen. Icebreaker oder Twisted Games?",
    "Für Abenteuer kann dir die Verkäuferin zwei Bücher empfehlen. Die Tribute von Panem oder Shatter Me?",
    "Du hast dich endlich entschieden und dein neues Lieblingsromancebuch entdeckt!",
    "Du hast dich endlich entschieden und dein neues Lieblingsabenteuerbuch entdeckt! "

]


let state = 0;

const input = document.querySelector(".intputForm_field")
const output = document.getElementById("output");

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") { 
        if (state == 0)
            book()
        else if (state == 1)
            book()
    }
    if( state == 2)
    book()
else if (state == 3)
    book()
 })

function book() {
    if (input.value == "Romance" || input.value == "romance") {
        output.innerHTML = stories[1]
        state = 1
        input.value = ""
    } else if (input.value == "Abenteuer" || input.value == "abenteuer") {
        output.innerHTML = stories[2]
        state = 2
    }
    input.value = ""

}


input.addEventListener("keydown", function (event) {
    console.log("test");
    if (event.key == "Enter") {
        if (input.value == "Icebreaker" || input.value == "icebreaker"
            || input.value == "Twisted Games" || input.value == "twisted games") {
            output.innerHTML = stories[3]
            state = 3
            input.value = ""
        } else if (input.value == "Die Tribute von Panem " || input.value == "die tribute von panem"
            || input.value == "Shatter Me" || input.value == "shatter me")
            output.innerHTML = stories[4]
            state = 4
        input.value = ""

    }

})

