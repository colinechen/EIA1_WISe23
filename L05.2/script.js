

let myArray = ["Im Buchladen hast du keine Idee, was du für ein Buch kaufen willst. Du fragst die Verkäuferin nach Rat und sie fragt dich, welches Genre dich anspricht. Romance oder Abenteuer?",
               "Für Romance kann dir die Verkäuferin zwei Bücher empfehlen. Icebreaker oder Twisted Games?",
               "Für Abenteuer kann dir die Verkäuferin zwei Bücher empfehlen. Die Tribute von Panem oder Shatter Me?",
               "Du hast dich endlich entschieden und dein neues Lieblingsbuch entdeckt!"
]

function promptersatz(story) {
    return prompt (story)
}


let genre = prompt(myArray[0])        // Mit meiner Abfrage gebe ich dem Nutzer die Möglichkeit, zwischen zwei Genre zu wählen//

if (genre == "Romance" || genre == "romance") {
    genre=promptersatz(myArray[1]);
} else if (genre == "Abenteuer" || genre == "abenteuer") {
    genre=prompt(myArray[2]);
}                                // Mit meiner Abfrage gebe ich dem Nutzer die Möglichkeit, zwischen zwei Büchern zu wählen//

let book = alert(myArray[3])

 

function bookprice(Preis, Rabatt) {
    let bookprice = Preis - Rabatt;
    return bookprice;
}
    console.log("Book price: " + bookprice(15,5) + " Euros");  // Buchpreis wird in der Konsole ausgegeben//