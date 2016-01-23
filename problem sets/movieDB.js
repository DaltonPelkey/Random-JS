var movies = [
  {
    title: "Frozen",
    seen: true,
    rating: 5
  },
  {
    title: "Despicable Me",
    seen: false,
    rating: 3
  },
  {
    title: "Finding Dory",
    seen: false,
    rating: "-"
  }
]

movies.forEach(function(movie){
  console.log(buildString(movie));
});


function buildString(movie){
    var result = "You have ";
    if(movie.seen){
      result += "watched ";
    } else {
      result += "not watched ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}