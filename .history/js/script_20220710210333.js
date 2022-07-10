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
        comingSoon: 1,
        actors: 'Ralph Macchio, William Zabka, Xolo Maridueña',
        director: 'Josh Heald Jon, Hurwitz Hayden Schlossberg',
        hover: false,
    },
    {
        name: 'Squid Game',
        description: 'Hundreds of cash-strapped players accept a strange invitation to compete in childrens games. Inside, a tempting prize awaits with deadly high stakes, A survival game that has a whopping 456 billion won prize at stake.',
        image: 'images/squid-game.PNG',
        comingSoon: 0,
        actors: 'Lee Jung-jae, Park Hae-soo, Hoyeon',
        director: 'Hwang Dong-hyuk',
        hover: false,
    },
    {
        name: 'House of the Dragon',
        description: 'The story of the House Targaryen set 200 years before the events of Game of Thrones (2011).',
        image: 'images/house-of-the-dragon.jpg',
        comingSoon: 1,
        actors: 'Paddy Considine, Olivia Cooke, Emma DArcy',
        director: 'Ryan J Condal, George RR Martin',
        hover: false,
    },
    {
        name: 'Doctor Strange and the Multiverse of Madness',
        description: 'Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.',
        image: 'images/doctor-strange.PNG',
        comingSoon: 0,
        actors: 'Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor',
        director: 'Sam Raimi',
        hover: false,
    },
    {
        name: 'Love Death & Robots',
        description: 'A collection of animated short stories that span various genres including science fiction, fantasy, horror and comedy.',
        image: 'images/love-death-robots.jpg',
        comingSoon: 0,
        actors: 'Fred Tatasciore, Scott Whyte, Nolan North',
        director: 'Tim Miller',
        hover: false,
    }],

    dramaList: [{

        name: 'Jodhaa Akbar',
        description: 'A sixteenth century love story about a marriage of alliance that gave birth to true love between a great Mughal emperor, Akbar, and a Rajput princess, Jodha.',
        image: 'images/jodhaa-akbar.jpg',
        comingSoon: 0,
        actors: 'Hrithik Roshan, Aishwarya Rai Bachchan, Sonu Sood',
        director: 'Ashutosh Gowariker',
        hover: false,
    },
    {
        name: 'Donnie Darko',
        description: 'After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.',
        image: 'images/donnie-darko.PNG',
        comingSoon: 0,
        actors: 'Jake Gyllenhaal, Jena Malone, Mary McDonnell',
        director: 'Richard Kelly',
        hover: false,
    },
    {
        name: 'Bajirao Mastani',
        description: 'An account of the romance between the Maratha general, Baji Rao and Mastani, princess of Bundelkhand.',
        image: 'images/bajirao-mastani.jpg',
        comingSoon: 0,
        actors: 'Ranveer Singh, Deepika Padukone, Priyanka Chopra Jonas',
        director: 'Sanjay Leela Bhansali',
        hover: false,
    },
    {
        name: 'The Big Bang Theory',
        description: 'A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.',
        image: 'images/big-bang-theory.jpg',
        comingSoon: 0,
        actors: 'Johnny Galecki, Jim Parsons, Kaley Cuoco',
        director: 'Chuck Lorre Bill Prady',
        hover: false,
    },
    {
        name: 'DearM',
        description: 'A search takes place for "M" who wrote something on the community board of Seoyeon Universitys website.The writing turned the university upside down.',
        image: 'images/dear-m.jpg',
        comingSoon: 1,
        actors: 'Hye-soo Park, (NCT) Jaehyun, No Jeong-ee',
        director: 'Park Jin-woo, Seo Joo-wan',
        hover: false,
    },
    {
        name: 'RamLeela',
        description: 'Modern adaptation of William Shakespeares, Romeo and Juliet with an Indian twist, the film focuses on the story of Ram and Leela, their love, lust and the drama afterwards.',
        image: 'images/ram-leela.jpg',
        comingSoon: 0,
        actors: 'Ranveer Singh, Deepika Padukone, Supriya Pathak',
        director: 'Sanjay Leela Bhansali',
        hover: false,
    },
    {
        name: 'Modern Family',
        description: 'Three different but related families face trials and tribulations in their own uniquely comedic ways.',
        image: 'images/modern-family.jpg',
        comingSoon: 0,
        actors: 'Ed O Neill, Sofía Vergara, Julie Bowen',
        director: 'Steven Levitan, Christopher Lloyd',
        hover: false,
    },
    {
        name: 'Never Have I Ever',
        description: 'The complicated life of a modern-day first generation Indian American teenage girl, inspired by Mindy Kalings own childhood.',
        image: 'images/never-have-i-ever.jpg',
        comingSoon: 0,
        actors: 'Ed O Neill, Sofía Vergara, Julie Bowen',
        director: 'Steven Levitan, Christopher Lloyd',
        hover: false,
    }],

    animation: [{
        name: 'Minions Rise of Gru',
        description: 'The untold story of one twelve-year-olds dream to become the worlds greatest supervillain.',
        image: 'images/minions.jpg',
        comingSoon: 1,
        actors: 'Steve Carell(voice), Pierre Coffin(voice), Alan Arkin(voice)',
        director: 'Kyle Balda, Brad Ableson, Jonathan del Val',
        hover: false,
    },
    {
        name: 'How to train your Dragon',
        description: 'A helpless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.',
        image: 'images/how-to-train-your-dragon.jpg',
        comingSoon: 0,
        actors: 'Jay Baruchel(voice), Gerard Butler(voice) Christopher, Mintz-Plasse(voice)',
        director: 'Dean De Blois, Chris Sanders',
        hover: false,
    },
    {
        name: 'Naruto',
        description: 'Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the villages leader and strongest ninja.',
        image: 'images/naruto.PNG',
        comingSoon: 0,
        actors: 'Junko Takeuchi, Maile Flanagan, Kate Higgins',
        director: 'Masashi Kishimoto',
        hover: false,
    },
    {
        name: 'Road to El-dorado',
        description: 'Two swindlers get their hands on a map to the fabled city of gold, El Dorado.',
        image: 'images/road-to-eldorado.PNG',
        comingSoon: 0,
        actors: 'Kevin Kline(voice), Kenneth Branagh(voice), Rosie Perez(voice)',
        director: 'Bibo Bergeron, Don Paul',
        hover: false,
    },
    {
        name: 'Dragon Prince',
        description: 'Two human princes forge an unlikely bond with the elfin assassin sent to kill them, embarking on an epic quest to bring peace to their warring lands.',
        image: 'images/dragon-prince.jpg',
        comingSoon: 1,
        actors: 'Paula Burrows, Jack De Sena, Sasha Rojen',
        director: 'Aaron Ehasz, Justin Richmond',
        hover: false,
    },
    {
        name: 'One Piece',
        description: 'Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named "One Piece".',
        image: 'images/one-piece.jpg',
        comingSoon: 0,
        actors: 'Mayumi Tanaka, Tony Beck, Laurent Vernin',
        director: 'Eiichiro Oda',
        hover: false,
    }




]

   },
})




}