import React from 'react';

class CharMenu extends React.Component {


    fetchMovies (url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.props.addMovies(data)
            });       
    }

    handleItemClick = (url, charName) => {
        this.fetchMovies(url);
        this.props.toggleOpen(charName);
    }


    render () {
        const { chars, open, toggleOpen, currChar } = this.props;

        const charPhotos = {
            "yoda": "http://espn.go.com/prod/styles/pagetype/otl/20151218_starwars/img/soccer-20.png",
            "Obi-wan Kenobi": "http://espn.go.com/prod/styles/pagetype/otl/20151218_starwars/img/soccer-26.png",
            "R2-D2": "http://espn.go.com/prod/styles/pagetype/otl/20151218_starwars/img/baseball-10.png",
            "Darth Vader": "http://espn.go.com/prod/styles/pagetype/otl/20151218_starwars/img/baseball-30.png",
            "Luke Skywalker": "http://espn.go.com/prod/styles/pagetype/otl/20151218_starwars/img/cricket-14.png"
        };

        const charDet = chars.map(char => {
            return <li
                className="char-list-item"
                key={ char.name }
                onClick={ () => this.handleItemClick(char.url, char.name) }>
                { char.name }
            </li>
        })
        
        return (
            <div className="menu-container">
                <div className="menu">
                    <img src={currChar ? charPhotos[currChar] : charPhotos["yoda"]} alt={`char-${currChar}`} />
                    <div className="char-select"
                        onClick={() => toggleOpen(null) }>Select a character you will &nbsp;
                        <i className={ open ? "fas fa-angle-down" : "fas fa-angle-right"}></i>
                    </div>
                </div>
                <div className={open ? null : "char-list-hidden"}>
                    <ul id="char-menu" className="char-list">
                        {charDet}
                    </ul>
                </div>
            </div>
        )
    }

}

export default CharMenu;