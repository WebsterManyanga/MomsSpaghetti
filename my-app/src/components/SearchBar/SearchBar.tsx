import React from 'react';
interface State {
  placeholder: string
}

export class SearchBar extends React.Component<{}, State> {
  constructor(props: {}) {
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
        onBlur={() => this.setState({placeholder: 'Search Food'})}
      />
    </div>

    )
  }
}