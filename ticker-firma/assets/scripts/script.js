const output = {
    "messages": [
        {
            "id": "1",
            "title": "Wechsel bei Rapid",
            "text": "Letzter wechsel Rapid. Sax geht aus dem Spiel, neu aufs Feld kommt Demaku.",
            "time": "23'"
        },
        {
            "id": "2",
            "title": "Gelbe Karte gegen Rapid und Austria",
            "text": "Nach einer Austria-Flanke liegt Stebinger am Boden.",
            "time": "35'"
        },
        {
            "id": "3",
            "title": "Wechsel bei Austria",
            "text": "Letzter wechsel Rapid. Sax geht aus dem Spiel, neu aufs Feld kommt Demaku.",
            "time": "40'"
        },
        {
            "id": "4",
            "title": "Rot nach schwerem Foul",
            "text": "F. Klein mit Rettung abtransportiert.",
            "time": "42'"
        },
        {
            "id": "5",
            "title": "Tor für Rapid",
            "text": "Tor in der 50. Minute nach einer Ecke von Schwab.",
            "time": "49'"
        },
        {
            "id": "6",
            "title": "Tor für die Austria",
            "text": "Tor in der 50. Minute nach einer Ecke von Fitz.",
            "time": "54'"
        },
    ]
};

(function showInitialMessages() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    document.querySelector(".badge").innerHTML += output.messages.length;
    document.querySelector(".container").innerHTML += "<div class='tickerMessages'></div>";
    document.querySelector(".updated_at").innerHTML += time;

    let display = '';
    display += "<button class='show btn btn-warning' onclick='showAll();'>Show all</button>";

    for (let i = 0; i < output.messages.length; i++) {
        if (i < 3) {
            document.querySelector(".tickerMessages").innerHTML = display;
            display += "<div class='singleMessage'>"
                + "<h3>" + output.messages[i]["title"] + "</h3>"
                + "<p>" + output.messages[i]["text"] + "</p>"
                + "<span>" + output.messages[i]["time"] + "<span>"
                + "</div>";
        } else {
            document.querySelector(".tickerMessages").innerHTML = display;
            display += "<div class='hidden singleMessage'>"
                + "<h3 class='hidden'>" + output.messages[i]["title"] + "</h3>"
                + "<p class='hidden'>" + output.messages[i]["text"] + "</p>"
                + "<span class='hidden'>" + output.messages[i]["time"] + "<span>"
                + "</div>";
        }
    }
}());

function showAll() {
    generateMessages();
}

function reverseOrder() {
    output.messages.reverse();
    generateMessages();
}

function generateMessages() {
    let display = '';
    display += "<button class=\"show btn btn-warning\" onclick=\"reverseOrder(); \">Reverse Order</button>";


    for (let i = 0; i <= output.messages.length; i++) {
        document.querySelector(".tickerMessages").innerHTML = display;
        display += "<div class='singleMessage'>"
            + "<h3>" + output.messages[i]["title"] + "</h3>"
            + "<p>" + output.messages[i]["text"] + "</p>"
            + "<span>" + output.messages[i]["time"] + "<span>"
            + "</div>";
    }
}
