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
        director: 'Matt Duffer, Ross Duffer',
        hover: false,
    },
    {
        name: 'Brooklyn Nine Nine',
        description: 'Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPDs 99th Precinct.',
        image: 'images/brooklyn-nine-nine.PNG',
        comingSoon: 0,
        actors: 'Andy Samberg, Stephanie Beatriz, Terry Crews',
        director: 'Dan Goor, Michael Schur',
        hover: false,      
    },
    {
        name: 'Cobra Kai',
        description: 'Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again.',
        image: 'images/cobra-kai.jpg',
        comingSoon: 0,
        actors: 'Ralph Macchio, William Zabka, Xolo Maridueña',
        director: 'Josh Heald Jon, Hurwitz Hayden Schlossberg',
        hover: false,
    },
    {
        name: 'Squid Game',
        description: 'Hundreds of cash-strapped players accept a strange invitation to compete in childrens games. Inside, a tempting prize awaits with deadly high stakes, A survival game that has a whopping 456 billion won prize at stake.',
        image: 'images/cobra-kai.jpg',
        comingSoon: 0,
        actors: 'Lee Jung-jae, Park Hae-soo, Hoyeon',
        director: 'Hwang Dong-hyuk',
        hover: false,
    },
    {
        name: 'Squid Game',
        description: 'Hundreds of cash-strapped players accept a strange invitation to compete in childrens games. Inside, a tempting prize awaits with deadly high stakes, A survival game that has a whopping 456 billion won prize at stake.',
        image: 'images/cobra-kai.jpg',
        comingSoon: 0,
        actors: 'Ralph Macchio, William Zabka, Xolo Maridueña',
        director: 'Josh Heald Jon, Hurwitz Hayden Schlossberg',
        hover: false,
    }



],

   },
})




}