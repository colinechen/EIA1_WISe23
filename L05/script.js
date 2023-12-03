
let genre = prompt("Im Buchladen hast du keine Idee, was du für ein Buch kaufen willst. Du fragst die Verkäuferin nach Rat und sie fragt dich, welches Genre dich anspricht. Romance oder Abenteuer?")

// Mit meiner Abfrage gebe ich dem Nutzer die Möglichkeit, zwischen zwei Genre zu wählen//

if (genre == "Romance") {
    genre=prompt("Für Romance kann dir die Verkäuferin zwei Bücher empfehlen. Icebreaker oder Twisted Games?");
} else if (genre == "Abenteuer") {
    genre=prompt("Für Abenteuer kann dir die Verkäuferin zwei Bücher empfehlen. Die Tribute von Panem oder Shatter Me?");
}
// Mit meiner Abfrage gebe ich dem Nutzer die Möglichkeit, zwischen zwei Büchern zu wählen//

let book = alert("Du hast dich endlich entschieden und dein neues Lieblingsbuch entdeckt!")

