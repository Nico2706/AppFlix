const Key = '0fa7c58081da1a28eee101d5f05a8dcd'

const request={
    requestPopulalr:`https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/trending/all/day?api_key=${Key}`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=en-US&page=1`
}

export default request