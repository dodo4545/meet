// Mock data utility for development when backend is unavailable

export const getMockMovies = () => {
  return [
    {
      id: "1",
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
      genre: "Science Fiction",
      director: "Christopher Nolan",
      image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      featured: true
    },
    {
      id: "2",
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
      genre: "Action",
      director: "Christopher Nolan",
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      featured: false
    },
    {
      id: "3",
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      genre: "Drama",
      director: "Frank Darabont",
      image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      featured: true
    },
    {
      id: "4",
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
      genre: "Crime",
      director: "Quentin Tarantino",
      image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      featured: false
    }
  ];
};