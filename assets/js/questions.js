const questions = [
    {

        "question": "Who is the creator of ‘The Simpsons’?",
        "answer": "Matt Groening",
        "incorrect1": "Trey Parker and Matt Stone",
        "incorrect2": "Seth MacFarlane",
        "incorrect3": "Hanna-Barbera"

    },
    {

        "question": "What is the name of the clown who hosts a children’s television show in Springfield?",
        "answer": "Krusty the Clown",
        "incorrect1": "Bozo the Clown",
        "incorrect2": "Ronald McDonald",
        "incorrect3": "Pennywise"
    },
    {

        "question": "Who shot Mr. Burns?",
        "answer": "Maggie Simpson",
        "incorrect1": "Bart Simpson",
        "incorrect2": "Homer Simpson",
        "incorrect3": "Mrs. Krabappel"
    },
    {

        "question": "Which Springfield resident has a twin brother named Herb?",
        "answer": "Homer Simpson",
        "incorrect1": "Ned Flanders",
        "incorrect2": "Moe",
        "incorrect3": "Sideshow Bob"
    },
    {

        "question": "Who voices Moe in The Simpson?",
        "answer": "Hank Azaria",
        "incorrect1": "Robert Downey Jr.",
        "incorrect2": "Chris Evans",
        "incorrect3": "Christopher Collins"
    },
    {

        "question": "Who is the teacher of Bart’s class at Springfield Elementary?",
        "answer": "Mrs. Krabappel",
        "incorrect1": "Mrs. Vanderbilt",
        "incorrect2": "Miss Hoover",
        "incorrect3": "Mrs. Glick"
    },
    {

        "question": "What is the name of the school bus driver?",
        "answer": "Otto Mann",
        "incorrect1": "Barney Gumble",
        "incorrect2": "Kent Brockman",
        "incorrect3": "Troy McClure"
    },
    {

        "question": "What instrument does Lisa play in her school band?",
        "answer": "Saxophone",
        "incorrect1": "Clarinet",
        "incorrect2": "Flute",
        "incorrect3": "Trombone"
    },
    {

        "question": "What is the name of the elephant Bart wins in a radio contest?",
        "answer": "Stampy",
        "incorrect1": "Trunky",
        "incorrect2": "Jumbo",
        "incorrect3": "Horton"
    },
    {

        "question": "In Season 6, Homer joins an ancient secret society called what?",
        "answer": "The Stonecutters",
        "incorrect1": "The Freemasons",
        "incorrect2": "The Illuminati",
        "incorrect3": "The Knights Templar"
    },
    {

        "question": "What is the name of the bowling instructor Marge develops a crush on?",
        "answer": "Jacques",
        "incorrect1": "Lionel",
        "incorrect2": "Francois",
        "incorrect3": "Jean"
    },
    {

        "question": "Which character is obsessed with getting revenge on Bart?",
        "answer": "Sideshow Bob",
        "incorrect1": "Krusty the Clown",
        "incorrect2": "Fat Tony",
        "incorrect3": "Nelson Muntz"
    },
    {

        "question": "What is the full name of Moe, the owner of Moe’s Tavern?",
        "answer": "Moe Szyslak",
        "incorrect1": "Moe Slovak",
        "incorrect2": "Moe Sawicki",
        "incorrect3": "Moe Sadowski"
    },
    {

        "question": "What is the vehicle Homer designs called?",
        "answer": "The Homer",
        "incorrect1": "Convert-a-Car",
        "incorrect2": "The Buzzwagon",
        "incorrect3": "Turbo Donut"
    },
    {

        "question": "In which season did Ralph Wiggum first appear?",
        "answer": "Season 1",
        "incorrect1": "Season 2",
        "incorrect2": "Season 3",
        "incorrect3": "Season 4"
    },
    {

        "question": "Which pop artist’s Super Bowl half-time show was supposedly predicted in ‘The Simpsons’?",
        "answer": "Lady Gaga",
        "incorrect1": "The Rolling Stones",
        "incorrect2": "Madonna",
        "incorrect3": "Beyoncé"
    },
    {

        "question": "What is Springfield’s local newspaper called?",
        "answer": "The Springfield Shopper",
        "incorrect1": "The Springfield Times",
        "incorrect2": "The Springfield Post",
        "incorrect3": "The Springfield Journal"
    },
    {

        "question": "Which acclaimed physicist made a guest appearance as himself?",
        "answer": "Stephen Hawking",
        "incorrect1": "Peter Higgs",
        "incorrect2": "Alan Guth",
        "incorrect3": "Edward Witten"
    },
    {

        "question": "Who voiced Bart’s girlfriend Jessica?",
        "answer": "Meryl Streep",
        "incorrect1": "Emma Thompson",
        "incorrect2": "Goldie Hawn",
        "incorrect3": "Helen Mirren"
    },
    {

        "question": "In what year did The Simpsons first air?",
        "answer": "1989",
        "incorrect1": "1987",
        "incorrect2": "1990",
        "incorrect3": "1992"
    },
    {

        "question": "What fruit does Homer build out of ham cubes?",
        "answer": "Apple",
        "incorrect1": "Pear",
        "incorrect2": "Orange",
        "incorrect3": "Pineapple"
    },
    {

        "question": "Bart and Milhouse’s favourite comic book character is known as what?",
        "answer": "Radioactive Man",
        "incorrect1": "Bumblebee Man",
        "incorrect2": "Spiderman",
        "incorrect3": "Batman"
    },
    {

        "question": "What is the secret ingredient in the Flaming Moe cocktail?",
        "answer": "Cough syrup",
        "incorrect1": "Maple syrup",
        "incorrect2": "Mouthwash",
        "incorrect3": "Golden syrup"
    },
    {

        "question": "What is the name of Ned Flanders’s first wife?",
        "answer": "Maude",
        "incorrect1": "Martha",
        "incorrect2": "Mildred",
        "incorrect3": "Madison"
    },
    {

        "question": "What is the name of the amusement park in Springfield?",
        "answer": "Krustyland",
        "incorrect1": "Neverland",
        "incorrect2": "Scratchyland",
        "incorrect3": "Homerland"
    },
    {

        "question": "Which character’s catchphrase is “Ha-Ha!”?",
        "answer": "Nelson Muntz",
        "incorrect1": "Squeaky-Voiced Teen",
        "incorrect2": "Ralph Wiggum",
        "incorrect3": "Grampa Simpson"
    },
    {

        "question": "Which store is located right next to Moe’s Tavern?",
        "answer": "King Toot’s Music Store",
        "incorrect1": "Kwik-E-Mart",
        "incorrect2": "The Leftorium",
        "incorrect3": "Lard Lad Donuts"
    },
    {

        "question": "Who is the leader of the infamous Springfield Mafia?",
        "answer": "Fat Tony",
        "incorrect1": "Luigi Risotto",
        "incorrect2": "Frankie the Squealer",
        "incorrect3": "Johnny Tightlips"
    },
    {

        "question": "What is the name of Springfield’s resident news anchor?",
        "answer": "Kent Brockman",
        "incorrect1": "Krusty the Clown",
        "incorrect2": "Brent Stockman",
        "incorrect3": "Godfrey Jones"
    },
    {

        "question": "In what year was ‘The Simpsons Movie’ released?",
        "answer": "2007",
        "incorrect1": "2004",
        "incorrect2": "2008",
        "incorrect3": "2005"
    }
];