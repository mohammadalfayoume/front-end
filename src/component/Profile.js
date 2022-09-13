import React from "react";
import { withAuth0 } from '@auth0/auth0-react';


class Profile extends React.Component {

  render() {
    const { user } = this.props.auth0;
    console.log(user)
    /* TODO: render information about the developers */
    return (<>
      <p>hello {user.name} </p>
      <p>email {user.email} </p>
      {/* <img src= {user.picture}> </img> */}
      
      </>
      )
  }
};

export default withAuth0(Profile);