window.onload = function() {

let movies = new Vue({
    el: '#display-video',
    data: {

        vid: {
        name: 'Jujutsu Kaisen',
        description: 'Follow the story of Yuta Okkotsu, a high schooler who gains control of an extremely powerful Cursed Spirit and gets enrolled in the Tokyo Prefectural Jujutsu High School by Jujutsu Sorcerers to help him control his power and keep an eye on him.',
        video: 'video/Jujutsu-Kaisen.mp4',
        fileType: 'video/mp4',
        image: 'images/jujutsu-kaisen.jpg',
        comingSoon: 0,
        actors: 'Chinatsu Akasaki(voice), Aya Endô(voice), Kana Hanazawa(voice)'
    },

    trending: [{

        name: 'Stranger Things S4',
        description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
        image: 'images/stranger-things.jpg',
        comingSoon: 0,
        actors: 'Millie Bobby Brown, Finn Wolfhard, Winona Ryder',
        director: 'Matt Duffer, Ross Duffer',
        hover: false,
    },
    {
        name: 'Brooklyn Nine Nine',
        description: 'Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPDs 99th Precinct.',
        image: 'images/brooklyn-nine-nine.jpg',
        comingSoon: 0,
        actors: 'Andy Samberg, Stephanie Beatriz, Terry Crews',
        director: 'Dan Goor, Michael Schur',
        hover: false,      
    },
    {
        name: 'Umberella Academy',
        description: 'A family of former child heroes, now grown apart, must reunite to continue to protect the world.',
        image: 'images/umbrella-academy.jpg',
        comingSoon: 0,
        actors: 'Elliot Page, Tom Hopper, David Castañeda',
        director: 'Steve Blackman, Jeremy Slater',
        hover: false,
    },
    {
        name: 'Squid Game',
        description: 'Hundreds of cash-strapped players accept a strange invitation to compete in childrens games. Inside, a tempting prize awaits with deadly high stakes, A survival game that has a whopping 456 billion won prize at stake.',
        image: 'images/squid-game.jpg',
        comingSoon: 0,
        actors: 'Lee Jung-jae, Park Hae-soo, Hoyeon',
        director: 'Hwang Dong-hyuk',
        hover: false,
    },
    {
        name: 'Doctor Strange and the Multiverse of Madness',
        description: 'Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.',
        image: 'images/doctor-strange.jpg',
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

    dramaList: [
    {
        name: 'Donnie Darko',
        description: 'After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.',
        image: 'images/donnie-darko.jpg',
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
        name: 'DearM',
        description: 'A search takes place for "M" who wrote something on the community board of Seoyeon Universitys website.The writing turned the university upside down.',
        image: 'images/dear-m.jpg',
        comingSoon: 0,
        actors: 'Hye-soo Park, (NCT) Jaehyun, No Jeong-ee',
        director: 'Park Jin-woo, Seo Joo-wan',
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

    animation: [
    {
        name: 'Naruto',
        description: 'Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the villages leader and strongest ninja.',
        image: 'images/naruto.jpg',
        comingSoon: 0,
        actors: 'Junko Takeuchi, Maile Flanagan, Kate Higgins',
        director: 'Masashi Kishimoto',
        hover: false,
    },
    {
        name: 'Road to El-dorado',
        description: 'Two swindlers get their hands on a map to the fabled city of gold, El Dorado.',
        image: 'images/road-to-eldorado.jpg',
        comingSoon: 0,
        actors: 'Kevin Kline(voice), Kenneth Branagh(voice), Rosie Perez(voice)',
        director: 'Bibo Bergeron, Don Paul',
        hover: false,
    },
    {
        name: 'Dragon Prince',
        description: 'Two human princes forge an unlikely bond with the elfin assassin sent to kill them, embarking on an epic quest to bring peace to their warring lands.',
        image: 'images/dragon-prince.jpg',
        comingSoon: 0,
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
    },
    {
        name: 'Rick n Morty',
        description: 'An animated series that follows the exploits of a super scientist and his not-so-bright grandson.',
        image: 'images/rick-and-morty.jpg',
        comingSoon: 0,
        actors: 'Justin Roiland, Chris Parnell, Spencer Grammer',
        director: 'Dan Harmon, Justin Roiland',
        hover: false,
    },
    {
        name: 'White Snake',
        description: 'A love story between a snake spirit and a snake hunter.',
        image: 'images/white-snake.jpg',
        comingSoon: 0,
        actors: 'Vincent Rodriguez III(English version), Matthew Moy(English version) ',
        director: 'Amp Wong Ji Zhao',
        hover: false,
    }],

    actionList: [{
        name: 'Lock Stock and two Smoking Barrels',
        description: 'Eddy persuades his three pals to pool money for a vital poker game against a powerful local mobster, Hatchet Harry. Eddy loses, after which Harry gives him a week to pay back 500,000 pounds.',
        image: 'images/lock-stock.jpg',
        comingSoon: 0,
        actors: 'Jason Flemyng, Dexter Fletcher, Nick Moran',
        director: 'Guy Ritchie',
        hover: false,
    },
    {
        name: 'Everything Everywhere All At Once',
        description: 'An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.',
        image: 'images/everything-everywhere.jpg',
        comingSoon: 0,
        actors: 'Michelle Yeoh, Stephanie Hsu, Ke Huy Quan',
        director: 'Dan Kwan, Daniel Scheinert',
        hover: false,
    },
    {
        name: 'The Boys',
        description: 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.',
        image: 'images/the-boys-3.jpg',
        comingSoon: 0,
        actors: 'Karl Urban, Jack Quaid, Antony Starr',
        director: 'Eric Kripke',
        hover: false,
    },
    {
        name: 'Fight Club',
        description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
        image: 'images/fight-club.jpg',
        comingSoon: 0,
        actors: 'Brad Pitt, Edward Norton, Meat Loaf',
        director: 'David Fincher',
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
        name: 'Pulp Fiction',
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        image: 'images/pulp-fiction.jpg',
        comingSoon: 0,
        actors: 'John Travolta, Uma Thurman, Samuel L. Jackson',
        director: 'Quentin Tarantino',
        hover: false,
    }],

    fantasyList: [
    {
        name: 'Lord of the Rings',
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        image: 'images/lord-of-the-ringd.jpg',
        comingSoon: 0,
        actors: 'Elijah Wood, Ian McKellen, Orlando Bloom',
        director: 'Peter Jackson',
        hover: false,
    },
    {
        name: 'Merlin',
        description: 'These are the brand new adventures of Merlin, the legendary sorcerer as a young man, when he was just a servant to young Prince Arthur on the royal court of Camelot, who has soon become his best friend, and turned Arthur into a great king and a legend.',
        image: 'images/merlin.jpg',
        comingSoon: 0,
        actors: 'John Hurt, Colin Morgan, Bradley James',
        director: 'Johnny Capps, Julian Jones, Jake Michie',
        hover: false,
    },
    {
        name: 'Sucker Punch',
        description: 'A young girl institutionalized by her abusive stepfather retreats to an alternative reality as a coping strategy and envisions a plan to help her escape.',
        image: 'images/sucker-punch.jpg',
        comingSoon: 0,
        actors: 'Emily Browning, Vanessa Hudgens, Abbie Cornish',
        director: 'Zack Snyder',
        hover: false,
    },
    {
        name: 'Dirk Gently Holistic Detective Agency',
        description: 'Holistic detective Dirk Gently investigates cases involving the supernatural.',
        image: 'images/dirk-gentley.jpg',
        comingSoon: 0,
        actors: 'Samuel Barnett, Elijah Wood, Hannah Marks',
        director: 'Max Landis',
        hover: false,
    },
    {
        name: 'Nezha Reborn',
        description: 'A normal young deliveryman Li Yunxiang, though coming from the slum area, is living a satisfying life but when the arrogant wealthy son of Boss beats him down, his deep anger turns into a blast of Truth Fire.',
        image: 'images/nezha-reborn.jpg',
        comingSoon: 0,
        actors: 'Nicole Fong(voice), Victoria Grace(voice), Jason Ko(English version)',
        director: 'Ji Zhao',
        hover: false,
    },
    {
        name: 'All of Us are Dead',
        description: 'A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out or turn into one of the rabid infected.',
        image: 'images/all-of-us-are-dead.jpg',
        comingSoon: 0,
        actors: 'Ji-hu Park, Chan-Young Yoon, Yi-Hyun Cho',
        director: 'Chun Sung-il, Lee Jae-kyoo, Kim Nam-su',
        hover: false,
    }],
    comingSoonList: [
        {
            name: 'Avatar 2',
            description: 'Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Navi race to protect their planet.',
            image: 'images/avatar2.jpg',
            comingSoon: 1,
            actors: 'Michelle Yeoh, Kate Winslet, Zoe Saldana',
            director: 'James Cameron',
            hover: false,
        },
        {
            name: 'Jurassic World Dominion',
            description: 'Four years after dinosaurs have been set loose on the mainland, humans have had to adjust to their presence.',
            image: 'images/jurassic-world-dominion.jpg',
            comingSoon: 1,
            actors: 'Chris Pratt, Bryce Dallas Howard, Laura Dern',
            director: 'Colin Trevorrow',
            hover: false,
        },
        {
            name: 'Thor Love and Thunder',
            description: 'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.',
            image: 'images/thor-love-and-thunder.jpg',
            comingSoon: 1,
            actors: 'Chris Hemsworth, Natalie Portman, Christian Bale',
            director: 'Taika Waititi',
            hover: false,
        },
        {
            name: 'My Name 2',
            description: 'The story about a woman who joins an organized crime ring and infiltrates the police as an undercover agent in order to find out the truth about her fathers death.',
            image: 'images/my-name.jpg',
            comingSoon: 1,
            actors: 'Hee-soon Park, Ahn Bo-Hyun, Han So-hee',
            director: 'Kim Jin-min',
            hover: false,
        },
        {
            name: 'Minions Rise of Gru',
            description: 'The untold story of one twelve-year-olds dream to become the worlds greatest supervillain.',
            image: 'images/minions.jpg',
            comingSoon: 1,
            actors: 'Steve Carell(voice), Pierre Coffin(voice), Alan Arkin(voice)',
            director: 'Kyle Balda, Brad Ableson, Jonathan del Val',
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
    ],

    watchList: [],
    searchKey: "",
    toggle: true,
   },

   methods: {
    //add item to watchlist and save to local storage.
        saveItem: function (movieName, movieDesc, movieImg, movieComingSoon, movieActors, movieDirector) {

            if (this.watchList.some(m => m.name === movieName)) {
                alert("This title is already on your list");
            }

         /*   else if (this.watchList.some(c => c.comingSoon === movieComingSoon)) {
                alert("This title has not been released as yet"); 
            }*/

            else {
                //create the movie object
                let movieObj = {
                    name: movieName,
                    description: movieDesc,
                    image: movieImg,
                    comingSoon: movieComingSoon,
                    actors: movieActors,
                    director: movieDirector,

                }
                this.watchList.push(movieObj);

                let movieArray = JSON.stringify(movieObj);
                localStorage.setItem(movieName, movieArray);
            };
        },

        removeItem: function (movieName) {

            const index = this.watchList.map(function (e) {return e.name}).indexOf(movieName);
            
            if (index > -1) {
                this.watchList.splice(index,1);
                localStorage.removeItem(movieName);
            }
        },

   },

   computed: {

        filterMovies() {


            let movieSearch = this.trending.concat(this.dramaList, this.actionList, this.fantasyList, this.comingSoonList);
            movieSearch = movieSearch.filter((item) => {
                return item.name.toLowerCase().includes(this.searchKey.toLowerCase()) || item.director.toLowerCase().includes(this.searchKey.toLowerCase()) || item.actors.toLowerCase().includes(this.searchKey.toLowerCase())
            });

            return movieSearch; 
        },

     /*   Upcoming() {

            let upcomingMovies = this.treaning.concat(this.dramaList, this.actionList, this.fantasyList, this.comingSoonList);
            upcomingMovies = upcomingMovies.filter((item) => movieComingSoon === 1)
                return upcomingMovies;
            },*/

          
   },
    
   mounted() {
            let movieItemStorage = [];
            for (let key in localStorage) {
                movieItemStorage.push(key);
            };

            movieItemStorage.splice(-6,6);

            for (i = 0; i < movieItemStorage.length; i++) {
                let movieArray = localStorage.getItem(movieItemStorage[i]);
                let data = JSON.parse(movieArray);
                this.watchList.push(data);
            };
        }

})

}
