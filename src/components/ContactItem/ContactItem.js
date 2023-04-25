import { Component } from 'react';
import { Button, Item } from './ContactItem.styled';

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
        <p>
          {this.props.name} : {this.props.number}
        </p>
        <Button
          type="button"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </Button>
      </Item>
    );
  }
}
