import React from 'react';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'Search Food'
    };
  }
  
  render(): React.ReactNode {
    return (
      <div className="searchBar">
      <input 
        type="search" 
        placeholder={this.state.placeholder} 
        className="searchBar__input"
        onFocus={() => this.setState({placeholder: ''})}
      />
    </div>

    )
  }
}