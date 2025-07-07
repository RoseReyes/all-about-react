import { Component, Fragment } from 'react';

import Users from './Users';
import UsersContext from '../store/user-context';
import classes from './UserFinder.module.css';

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    this.state = {
      filteredUsers: this.context.users,
      searchTerm: '',
    };
  }

  componentDidMount() {
    // Send http request...
    // only run once
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.setState.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input
            type='search'
            onChange={this.searchChangeHandler.bind(this)}
          />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;
