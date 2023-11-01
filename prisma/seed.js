const prisma = require('../prisma');
const seed = async () => {
    const result = await prisma.authors.createMany({
        data: [
            {
                name: 'Ayn Rand',
                books: ['The God of the Machine', 'Atlas Shrugged', 'The Fountainhead'], 
            },
            {
                name: 'William Shakespeare',
                books: ['Hamlet', 'Romeo and Juilet', 'Macbeth'], 
            },
            {
                name: 'J.R.R. Tolkien',
                books: ['The Hobbit', 'The Lord of the Rings', 'The Silmarillion'], 
            },
            {
                name: 'John Greene',
                books: ['Looking for Alaska', 'Paper Towns', 'The Fault in Our Stars'], 
            },
            {
                name: 'David Foster Wallace',
                books: ['Infinite Jest', 'Consider the Lobster', 'Oblivion'], 
            },
            {
                name: 'Carl Jung',
                books: ['Man and His Symbols', 'Modern Man in Search of a Soul', 'Psychology of the Unconscious'], 
            },
            {
                name: 'Viktor Frankl',
                books: ['Yes to Life', 'The Doctor and the Soul', 'The Unheard Cry for Meaning'], 
            },
            {
                name: 'Alan Watts',
                books: ['Behold the Spirit', 'The Way of Zen', 'Nonsense'], 
            },
            {
                name: 'J.K. Rowling',
                books: ['The Order of the Pheonix', 'The Deathly Hallows', 'The Chrismas Pig'], 
            },
            {
                name: 'Mark Twain',
                books: ['Adventures of Huckleberry Finn', 'The Adventures of Tom Sawyer', 'The Prince and the Pauper'], 
            },
            {
                name: 'George Orwell',
                books: ['1989', 'Animal Farm', 'Homage to Catalonia'], 
            },
            {
                name: 'Charles Dickens',
                books: ['Great Expectations', 'A Tale of Two Cities', 'Oliver Twist'], 
            },
            {
                name: 'Agatha Christie',
                books: ['Murder on the Orient Express', 'The Murder of Roger Ackroyed', 'Death on the Nile'], 
            },
            {
                name: 'F.Scott Fitzgerald',
                books: ['The Great Gatsby', 'Tender is the Night', 'This Side of Paradise'], 
            },
            {
                name: 'Toni Morrison',
                books: ['Song of Solomon', 'Beloved', 'The Bluest Eye'], 
            },
            {
                name: 'Jane Austen',
                books: ['Pride and Prejudice', 'Sense and Sensibility', 'Emma'], 
            },
            {
                name: 'Ernest Hemmingway',
                books: ['The Old Man and the Sea', 'A Farewll to Arms', 'For Whom the Bell Tolls'], 
            },
            {
                name: 'Gabriel Garcia Marquez',
                books: ['One Hundred Years of Solitude', 'Love in the Time of Cholera', 'Chronicles of a Death Foretold'], 
            },
            {
                name: 'Virginia Woolf',
                books: ['Mrs. Dalloway', 'To the Lighthouse', 'Orlando'], 
            },
            {
                name: 'Kurt Vonnegut',
                books: ['Slaughterhouse-Five', 'Cats Cradle', 'Breakfast of Champions'], 
            },       
        ]
    })
}