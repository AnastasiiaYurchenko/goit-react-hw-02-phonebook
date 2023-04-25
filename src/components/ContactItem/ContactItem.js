import { Component } from 'react';
import { Item } from './ContactItem.styled';

export class ContactItem extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    // const { name, number } = this.state;
    // const { name, number } = this.props;
    return (
      <Item>
        {this.props.name} : {this.props.number}
      </Item>
    );
  }
}
