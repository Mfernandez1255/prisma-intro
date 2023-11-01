const prisma = require('../prisma');
const seed = async () => {
    const result = await prisma.authors.createMany({
        data: [
            {
                id: 1,
                name: 'Ayn Rand',
                books: ['The God of the Machine', 'Atlas Shrugged', 'The Fountainhead'], 
            },
            {
                id: 2,
                name: 'William Shakespeare',
                books: ['Hamlet', 'Romeo and Juilet', 'Macbeth'], 
            },
            {
                id: 3,
                name: 'J.R.R. Tolkien',
                books: ['The Hobbit', 'The Lord of the Rings', 'The Silmarillion'], 
            },
            {
                id: 4,
                name: 'John Greene',
                books: ['Looking for Alaska', 'Paper Towns', 'The Fault in Our Stars'], 
            },
            {
                id: 5,
                name: 'David Foster Wallace',
                books: ['Infinite Jest', 'Consider the Lobster', 'Oblivion'], 
            },
            {
                id: 6,
                name: 'Carl Jung',
                books: ['Man and His Symbols', 'Modern Man in Search of a Soul', 'Psychology of the Unconscious'], 
            },
            {
                id: 7,
                name: 'Viktor Frankl',
                books: ['Yes to Life', 'The Doctor and the Soul', 'The Unheard Cry for Meaning'], 
            },
            {
                id: 8,
                name: 'Alan Watts',
                books: ['Behold the Spirit', 'The Way of Zen', 'Nonsense'], 
            },
            {
                id: 9,
                name: 'J.K. Rowling',
                books: ['The Order of the Pheonix', 'The Deathly Hallows', 'The Chrismas Pig'], 
            },
            {
                id: 10,
                name: 'Mark Twain',
                books: ['Adventures of Huckleberry Finn', 'The Adventures of Tom Sawyer', 'The Prince and the Pauper'], 
            },
            {
                id: 11,
                name: 'George Orwell',
                books: ['1989', 'Animal Farm', 'Homage to Catalonia'], 
            },
            {
                id: 12,
                name: 'Charles Dickens',
                books: ['Great Expectations', 'A Tale of Two Cities', 'Oliver Twist'], 
            },
            {
                id: 13,
                name: 'Agatha Christie',
                books: ['Murder on the Orient Express', 'The Murder of Roger Ackroyed', 'Death on the Nile'], 
            },
            {
                id: 14,
                name: 'F.Scott Fitzgerald',
                books: ['The Great Gatsby', 'Tender is the Night', 'This Side of Paradise'], 
            },
            {
                id: 15,
                name: 'Toni Morrison',
                books: ['Song of Solomon', 'Beloved', 'The Bluest Eye'], 
            },
            {
                id: 16,
                name: 'Jane Austen',
                books: ['Pride and Prejudice', 'Sense and Sensibility', 'Emma'], 
            },
            {
                id: 17,
                name: 'Ernest Hemmingway',
                books: ['The Old Man and the Sea', 'A Farewll to Arms', 'For Whom the Bell Tolls'], 
            },
            {
                id: 18,
                name: 'Gabriel Garcia Marquez',
                books: ['One Hundred Years of Solitude', 'Love in the Time of Cholera', 'Chronicles of a Death Foretold'], 
            },
            {
                id: 19,
                name: 'Virginia Woolf',
                books: ['Mrs. Dalloway', 'To the Lighthouse', 'Orlando'], 
            },
            {
                id: 20,
                name: 'Kurt Vonnegut',
                books: ['Slaughterhouse-Five', 'Cats Cradle', 'Breakfast of Champions'], 
            },       
        ],
    })
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });