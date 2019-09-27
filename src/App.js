import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import MovieList from './components/MovieList';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movieItemShow: false,
      dropDownOpen: false, // keeps track of the status of the drop down menu
      currChar: null, // keeps track of which character is currently selected
      currMovies: null, // keeps track of the movies in which the currChar was featured in
      characters: [{   // the data 
        "name": "Luke Skywalker",
        "url": "https://swapi.co/api/people/1/"
      }, {
        "name": "Darth Vader",
        "url": "https://swapi.co/api/people/4/"
      }, {
        "name": "Obi-wan Kenobi",
        "url": "https://swapi.co/api/people/10/"
      }, {
        "name": "R2-D2",
        "url": "https://swapi.co/api/people/3/"
      }]
    }

  }

  // Passed down as a prop to the character menu, and will fetch the movies for a particular character. Once all
  // promises have resolved, it will set currMovies state to an array of relevant movies.

  addMovies = async (data) => {

    let promises = data.films.map(film => {
        let response = fetch(film).then(data => data.json());
        return response;
    });

    const films = await Promise.all(promises)

    this.setState({
      currMovies: films
    });
  }

  // Toggles the state of the drop down menu, between open: true and open: false

  toggleOpen = (charName) => {
    this.setState({
      movieItemShow: !this.state.movieItemShow,
      dropDownOpen: !this.state.dropDownOpen,
      currChar: charName,
      // currMovies: []
    })
  }
  
  // Renders the following:
  // App
  //   Header
  //   MainContent
  //     Menu
  //     MovieList

  render () {
    
    const { dropDownOpen, characters, currMovies, currChar, movieItemShow } = this.state;
    
    return (  <div className="App">
                <Header />
                <section className="main-content">
                  <Menu addMovies={ this.addMovies } 
                        open={ dropDownOpen } 
                        chars={ characters }
                        toggleOpen = { this.toggleOpen }
                        currChar={ currChar }
                        />
                  <MovieList movieItemShow={ movieItemShow } currChar={ currChar } movies={ currMovies ? currMovies : [] } />
                </section>
              </div>
    );
  }
}

export default App;
