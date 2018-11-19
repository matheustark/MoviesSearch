import React from 'react'
import { Link } from 'react-router-dom'

import MoviesDetails from './MoviesDetails'


export default class MovieRow extends React.Component {

    viewInWeb() {
      //   console.log("Trying to view movie")
        // console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
      }

    render(){
        return <table key={this.props.movie.id} style={{marginLeft: 20, marginBottom: 30, marginTop: 30}} > 
    <tbody >
      <tr>
        <td>
        
          <img  alt="poster" width="120" src={this.props.movie.poster_src}/>
        </td>
        <td>
        <h3 style={{margin: 20}}>{this.props.movie.title}</h3>
          <p style={{margin: 20}}>{this.props.movie.overview}</p>
          {/* <input className="pure-button pure-button-primary" type="button" 
          style={{marginTop: 20, marginLeft: 10, backgroundColor: '#61056198', borderRadius: 15}}
    onClick={this.viewInWeb.bind(this)} value="Web"/> */}
           <Link
           style={{marginTop: 20, marginLeft: 10, backgroundColor: '#61056198', borderRadius: 15}} 
           className="pure-button pure-button-primary" type="button" 
           to="/details">Details</Link>
        </td>
      </tr>
    </tbody>
  </table>
    }
}