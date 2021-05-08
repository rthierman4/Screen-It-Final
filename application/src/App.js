import { React, Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid'
import './App.scss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movieData : []
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    let movieData = this.state.movieData;
    let name = this.refs.movieName.value;
    let category = this.refs.movieCategory.value;
    let rating = this.refs.movieRating.value;

    let newMovie = {
      "name" : name,
      "category" : category,
      "rating" : rating
    }

    movieData.push(newMovie);

    this.setState({
      movieData : movieData
    })

    this.refs.movieForm.reset();
  }

  render(){
    let movieData = this.state.movieData;
    return(
      <div className="app-container">      
        <h1 className="title-main">Screen it</h1>

        <form className="movie-form" ref="movieForm">
          <div className="input-row">
            <label htmlFor="movieName">Name</label>
            <input type="text" id="movieName" ref="movieName" placeholder="Name of the movie" required />
          </div>
          <div className="input-row">
            <label htmlFor="movieCategory">Category</label>
            <select id="movieCategory" ref="movieCategory" required>
            <option value="" selected disabled hidden >Select a category</option>
              <option value="Action/Adventure">Action/Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Documentary">Documentary</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="input-row">
            <label>Rating</label>
            <fieldset className="rating-fieldset">
              <label className="star-rating-input">
              <input
                type="radio"
                name="movieRating"
                value="1"
                ref="movieRating"
              />
              <FontAwesomeIcon icon={faStar} className="" />
            </label>
            <label className="star-rating-input">
              <input
                type="radio"
                name="movieRating"
                value="2"
                ref="movieRating"
              />
              <FontAwesomeIcon icon={faStar} className="" />
            </label>
            <label className="star-rating-input">
              <input
                type="radio"
                name="movieRating"
                value="3"
                ref="movieRating"
              />
              <FontAwesomeIcon icon={faStar} className="" />
            </label>
            <label className="star-rating-input">
              <input
                type="radio"
                name="movieRating"
                value="4"
                ref="movieRating"
              />
              <FontAwesomeIcon icon={faStar} className="" />
            </label>
            <label className="star-rating-input">
              <input
                type="radio"
                name="movieRating"
                value="5"
                ref="movieRating"
                defaultChecked={true}
              />
              <FontAwesomeIcon icon={faStar} className="" />
            </label> 
          </fieldset>
          </div>
          <button onClick={e => this.submitHandler(e)} className="submit-button">Add Movie</button>
        </form>

        <div className="movie-list">
          <div className="movie-container">
            <span className="movie-avatar small-letters">DBH</span>
            <div className="movie-info">
              <span className="movie-name">Death Becomes Her</span>
              <span className="movie-category">Comedy</span>
            </div>
            <div className="movie-rating star-rating-3">
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
            </div>
          </div>
          <div className="movie-container">
            <span className="movie-avatar">G</span>
            <div className="movie-info">
              <span className="movie-name">Ghostbusters</span>
              <span className="movie-category">Comedy</span>
            </div>
            <div className="movie-rating star-rating-5">
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
            </div>
          </div>
          <div className="movie-container">
            <span className="movie-avatar small-letters">HPS</span>
            <div className="movie-info">
              <span className="movie-name">Harry Potter - Sorcerer's Stone</span>
              <span className="movie-category">Drama</span>
            </div>
            <div className="movie-rating star-rating-4">
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
            </div>
          </div>
          <div className="movie-container">
            <span className="movie-avatar">JP</span>
            <div className="movie-info">
              <span className="movie-name">Jurassic Park</span>
              <span className="movie-category">Action/Adventure</span>
            </div>
            <div className="movie-rating star-rating-4">
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
            </div>
          </div>
          <div className="movie-container">
            <span className="movie-avatar">S</span>
            <div className="movie-info">
              <span className="movie-name">The Sandlot</span>
              <span className="movie-category">Comedy</span>
            </div>
            <div className="movie-rating star-rating-4">
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
              <FontAwesomeIcon icon={faStar} className="star-rating" />
            </div>
          </div>

          {movieData.map((data, i) => 
            <div key={i} className="movie-container">
              <span className="movie-avatar">{data.name.substr(0, 1)}</span>
              <div className="movie-info">
                <span className="movie-name">{data.name}</span>
                <span className="movie-category">{data.category}</span>
              </div>
              <div className={"movie-rating star-rating-" + data.rating}>
                <FontAwesomeIcon icon={faStar} className="star-rating" />
                <FontAwesomeIcon icon={faStar} className="star-rating" />
                <FontAwesomeIcon icon={faStar} className="star-rating" />
                <FontAwesomeIcon icon={faStar} className="star-rating" />
                <FontAwesomeIcon icon={faStar} className="star-rating" />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

}

export default App;
