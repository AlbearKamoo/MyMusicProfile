var genres = [ {orchestral: {
    name: "Orchestral",
    audioInfo: "Star Wars, The Throne Room - John Williams",
    audio: "/audio/orchestral.mp3",
    color: "#663300",
    text: "Notice I didn't write 'Classical'. Although I do\
    appreciate some Chopin and Vivaldi here and there, the 'Orchestral' genre I refer to\
    encompasses musical scores written for an orchestral ensemble of classic instruments,\
    but that aren't of the classical style itself. Examples of this are movie soundtracks and\
    modern scores by artists such as Two Steps From Hell."
}}, { jazz: {
    name: "Jazz",
    audioInfo: "Moanin' - Art Blakey and the Jazz Messengers",
    audio: "/audio/jazz.mp3",
    color: "#b5a642",
    text: "Jazz is actually one of my most recent musical discoveries. I had always known it\
    existed, and just thought of it as a more complicated version of blues. However, I\
    took a history of jazz class at university and I was surprised at how much depth the\
    genre has. Today I'm glad that I can truly appreciate jazz music, although I do tend\
    to prefer the classics; no be-bop for me."
}}, { blues: {
    name: "Blues",
    audioInfo: "Sweet Home Chicago - Robert Johnson, cover by Eric Clapton",
    audio: "/audio/blues.mp3",
    color: "#241d4d",
    text: "Blues notes and chord progressions were the the first things I learned when I took guitar\
    lessons. I was, and still am, amazed by the iconic rhythm and mesmerizing soul of blues music.\
    It is the genre of music that I think has the most 'feeling' associated with it, so it's a\
    favorite of mine for improvisation because it allows for so much emotional expression."
}}, { southernrock: {
    name: "Southern Rock",
    audioInfo: "Sweet Home Alabama - Lynyrd Skynyrd",
    audio: "/audio/southernrock.mp3",
    color: "#c60000",
    text: "What do you get when you mix the riffs and power chords of classic rock with the\
    themes and traditions of country music? Southern Rock! This unique genre originated\
    in the southern United States, and although it's not as well-known as other rock genres,\
    it is championed by prominent bands such as Lynyrd Skynyrd and ZZ Top."
}}, { hardrock: {
    name: "Hard Rock",
    audioInfo: "Back in Black - AC/DC",
    audio: "/audio/hardrock.mp3",
    color: "#dc4821",
    text: "Hard rooock"
}}, { progrock: {
    name: "Progressive Rock",
    audioInfo: "Comfortably Numb - Pink Floyd",
    audio: "/audio/progrock.mp3",
    color: "#079885",
    text: "Progressive Rock is a mess; it is a musical amalgamation that emerged from the bowels\
    of classic rock with heavy influence from other musical styles. The bands that made this genre\
    their own vary widly in their execution of it. From the folk elements of Ian Anderson's\
    Jethro Tull to the sci-fi-esque synth infusion of Pink Floyd, prog-rock never ceases to\
    surprise."
}}, { metal: {
    name: "Heavy Metal",
    audioInfo: "Iron Man - Black Sabbath",
    audio: "/audio/metal.mp3",
    color: "#200620",
    text: "Curiously, this was the genre that drove my progress in electric guitar. Heavy Metal\
    was the soundtrack of my teen years, with bands such as Iron Maiden, Black Sabbath,\
    Whitesnake, Jorn and Dio constantly blasting from my headphones. It is the backbone of my\
    foray into music, and even though I don't listen to it as much anymore, I regard it with fondness."
}}, { progmetal: {
    name: "Progressive Metal",
    audioInfo: "The Glass Prison - Dream Theater",
    audio: "/audio/progmetal.mp3",
    color: "#3a1a50",
    text: "Progressive Metal is actually a big departure from regular metal in a technical sense.\
    It is more melodic, more intricate, and emphasizes musical\
    phrases and exchanges between instruments. However, it does all that while mantainting that\
    gritty and heavy essence of metal. It's one of my favorite genres nowadays because of the\
    musical complexity of the songs."
}}]

function getGenre(id){
    for(var i = 0;i < genres.length;i++){
        if(Object.keys(genres[i])[0] == id){
            return genres[i][id];
        }
    }
}

var gridItems = document.getElementsByClassName("grid-item")

function gridSelect(){
    var genre = getGenre(this.id)
    console.log(genre.audio)
    $(".grid-item").each(function() {
        $(this).children().removeClass("selected");
    });
    $(this).children().addClass("selected");

    $("#audioInfo").text(genre.audioInfo);
    $("#genreTitle").text(genre.name);
    $("#genreText").text(genre.text);
    $("#genreContainer").css("background-color", genre.color);

    var audio = document.getElementById('audio');
    var source = document.getElementById('genreAudio');
    source.src = genre.audio;

    audio.load();
    audio.play();
}

for(var i = 0;i < gridItems.length;i++){
    gridItems[i].addEventListener('click', gridSelect)
}

$("#home-nav").on("click", function() {
    $("html, body").animate({
        scrollTop: 0
    }, 700)
})
$("#instruments-nav").on("click", function() {
    $("html, body").animate({
        scrollTop: $("#instrumentsTitle").offset().top - 80
    }, 700)
}),
$("#genres-nav").on("click", function() {
    $("html, body").animate({
        scrollTop: $("#genresTitle").offset().top - 80
    }, 700)
    return false;
})
