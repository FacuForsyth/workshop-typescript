import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { User, fetchUsers } from './actions/actions';
import './App.css';
import { StoreState } from './reducers/reducers';

interface AppProps {
  users: User[];
  fetchUsers(): any;
}

const mapStateToProps = (state: StoreState): {users: User[]} => {
  return {
    users: state.users,
  };
};

function App(props: AppProps): JSX.Element {
  
  //para despachar la acción al renderizar el componente
  useEffect(() => {
    props.fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>Henry Workshop - ts</h1>
      <button onClick={props.fetchUsers}>FETCH USERS!</button>
      {props.users.map((user: User) => {
        return (
          <div key={user.id}>
            {user.id} {user.name}
          </div>
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps, {fetchUsers})(App);
