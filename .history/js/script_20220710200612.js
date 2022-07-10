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

    trending: [{
        name: 'All of Us are Dead',
        description: 'A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out or turn into one of the rabid infected.',
        image: 'images/all-of-us-are-dead.jpg',
        comingSoon: 0,
        actors: 'Ji-hu Park, Chan-Young Yoon, Yi-Hyun Cho',
        director: 'Chun Sung-il, Lee Jae-kyoo, Kim Nam-su',
        hover: false,
    },
    {
        name: 'Stranger Things S4',
        description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
        image: 'images/stranger-things.PNG',
        comingSoon: 0,
        actors: 'Millie Bobby Brown, Finn Wolfhard, Winona Ryder',
        director: 'Matt Duffer Ross Duffer',
        hover: false,
    }



],

   },
})




}