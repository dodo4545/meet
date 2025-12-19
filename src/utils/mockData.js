// Mock data utility for development when backend is unavailable

export const getMockMovies = () => {
  return [
    {
      id: "1",
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
      genre: "Science Fiction",
      director: "Christopher Nolan",
      imageUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      featured: true
    },
    {
      id: "2",
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
      genre: "Action",
      director: "Christopher Nolan",
      imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      featured: false
    },
    {
      id: "3",
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      genre: "Drama",
      director: "Frank Darabont",
      imageUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      featured: true
    },
    {
      id: "4",
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
      genre: "Crime",
      director: "Quentin Tarantino",
      imageUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      featured: false
    },
    {
      id: "5",
      title: "The Matrix",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      genre: "Science Fiction",
      director: "The Wachowskis",
      imageUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      featured: true
    },
    {
      id: "6",
      title: "Goodfellas",
      description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife and his partners in crime.",
      genre: "Crime",
      director: "Martin Scorsese",
      imageUrl: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
      featured: false
    },
    {
      id: "7",
      title: "The Lord of the Rings: The Fellowship of the Ring",
      description: "A meek Hobbit and eight companions set out on a journey to destroy the One Ring and the Dark Lord Sauron.",
      genre: "Fantasy",
      director: "Peter Jackson",
      imageUrl: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      featured: true
    },
    {
      id: "8",
      title: "Forrest Gump",
      description: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man.",
      genre: "Drama",
      director: "Robert Zemeckis",
      imageUrl: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      featured: false
    },
    {
      id: "9",
      title: "Star Wars",
      description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, and two droids to save the galaxy from the Empire's world-destroying battle station.",
      genre: "Science Fiction",
      director: "George Lucas",
      imageUrl: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
      featured: true
    },
    {
      id: "10",
      title: "The Godfather",
      description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      genre: "Crime",
      director: "Francis Ford Coppola",
      imageUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      featured: true
    }
  ];
};

export const getPosterMap = () => {
  return {
    'Inception': 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    'The Dark Knight': 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    'The Shawshank Redemption': 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    'Pulp Fiction': 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    'The Matrix': 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    'Goodfellas': 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
    'The Lord of the Rings: The Fellowship of the Ring': 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    'Forrest Gump': 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    'Star Wars': 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
    'The Godfather': 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'
  };
};
