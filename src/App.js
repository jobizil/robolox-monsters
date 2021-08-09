import React, { Component } from 'react'
import './App.css'
import { CardList } from './components/card-list/card-list-component'
import { SearchBox } from './components/search-box/search-box-component'
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  // componentDidMount is Called immediately after a component is mounted.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  } //Using the Arrow function allows you to have access to the this keywoard in the Class Component.
  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return (
        monster.name.toLowerCase().includes(searchField.toLowerCase()) ||
        monster.email.toLowerCase().includes(searchField.toLowerCase())
      )
      // return monster.name.toLowerCase().includes(searchField.toLowerCase()) //Original from tutorial.
    })
    return (
      <div className="App">
        <h1 className="title">Rolobox Monsters</h1>
        {/* THe Searchbox Component */}
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        />
        {/* Card List Compnent */}
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
