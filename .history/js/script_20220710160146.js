window.onload = function() {

let display = new Vue({
    el: '#display-video',
    data: {
        vid: {
        name: 'Jujutsu Kaisen',
        description: 'Yuta Okkotsu, a high schooler who gains control of an extremely powerful Cursed Spirit and gets enrolled in the Tokyo Prefectural Jujutsu High School by Jujutsu Sorcerers to help him control his power and keep an eye on him.',
        video: 'video/Jujutsu-Kaisen.mp4',
        fileType: 'video/mp4',
        comingSoon: 0,
        actors: 'Chinatsu Akasaki(voice), Aya Endô(voice), Kana Hanazawa(voice)'
    },

}}) 

movieList: [{
    name:"Jurassic World Dominion",
    description:"Four years after dinosaurs have been set loose on the mainland, humans have had to adjust to their presence",
    image: "images/jurassic-world-dominion.jpg",
    comingSoon: true,
    actors: "Chris Pratt, Bryce Dallas, Howard Laura Dern",
    director:"Colin Trevorrow"
}]




/* let app = new Vue({
    el : '#test',
    data : {
        message :'please work?',
    }
}).mount('#test')*/

}