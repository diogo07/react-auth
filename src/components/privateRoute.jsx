import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Route } from 'react-router-dom';
import { validateToken } from '../actions/login/actions';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, validToken } = rest.auth;

  useEffect( async () => {
    if (user) {
      rest.validateToken(user.token);
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        {
          if(user && validToken){
            return (<Component {...props} />);
          } else {
            return (<Redirect
              to={{
                pathname: '/',
                state: { from: props.location },
              }}
            />);
          }
        }
      }
    />
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);