window.onload = function() {

let movies = new Vue({
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
    series: [{
        name: 'All of Us are Dead',
        description: 'A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out or turn into one of the rabid infected.',
        image: 'images/all-of-us-are-dead.jpg',
        comingSoon: false,
        actors: 'Ji-hu Park, Chan-Young Yoon, Yi-Hyun Cho',
        director: 'Chun Sung-il, Lee Jae-kyoo, Kim Nam-su',
    
    }],

   },
})




}