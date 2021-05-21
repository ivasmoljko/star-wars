import React, { Component } from "react";
import { CardList } from "./pages/characters-page/components/card-list/card-list.component.jsx";


class Characters extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((users) => this.setState({ characters: users.results }));
  }
  render() {
    return (
      <div className="characters" >
        <CardList characters={this.state.characters} />
      </div>
    );
  }
}
export default Characters;
