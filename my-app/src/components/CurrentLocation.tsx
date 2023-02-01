import React from 'react';
import axios from 'axios';

type Props = {};
type State = {
  city: string
};

export class CurrentLocation extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {city: ''};
  }

  API_key = '8d382830-904e-11ed-97d5-0de223189653';
  API_endpoint = `https://geolocation-db.com/json/${this.API_key}`;


  componentDidMount(): void {
    axios.get(this.API_endpoint).then((response => {
      this.setState({city: response.data.city});
    }));
  }
  render(): React.ReactNode {
    return (this.state.city);
  }
}