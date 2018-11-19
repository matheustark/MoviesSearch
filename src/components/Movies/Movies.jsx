import React from 'react'
import axios from  'axios'


import MoviesRows from './MovieRows'


export default class Movies extends React.Component {
    constructor(props){
        super(props)
        this.state = {}

       this.mostPoupularMovies()
    }
  
    
  searchMovieDb(searchMovie){
    const urlSearch = `http://api.themoviedb.org/3/search/movie?api_key=e4f9d04532baba931d7f1166f58ce1a0&query=` + searchMovie
      axios.get(urlSearch)
      .then(resp => {
          const results = resp.data.results
          var movieRows = []
        
          results.map((movie) => {
              console.log(movie.title)
              movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
              const movieRow = <MoviesRows key={movie.id} movie={movie} />    
              movieRows.push(movieRow)
          })

          this.setState({rows: movieRows})
      })
  }

  mostPoupularMovies(){
    const urlMostPopularty = `http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e4f9d04532baba931d7f1166f58ce1a0`
    axios.get(urlMostPopularty)
    .then(resp => {
        const results = resp.data.results
        var movieRows = []
      
        results.map((movie) => {
    //        console.log(movie.title)
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
            const movieRow = <MoviesRows key={movie.id} movie={movie} />
            movieRows.push(movieRow)
        })
        
        this.setState({rows: movieRows})
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchMovie = event.target.value
    boundObject.searchMovieDb(searchMovie)
  }

 
    render(){   
        return(
            <div>  
         <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Search a movie"/>
        <button style={{marginBottom: 20, marginTop: 20, marginLeft: 5, backgroundColor: '#61056198', }} 
         className="pure-button pure-button-primary"
         onClick={this.mostPoupularMovies.bind(this)}> Popular Movies
    </button> 
        {this.state.rows}

    </div>
)}

  }