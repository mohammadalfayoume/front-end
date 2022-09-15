import React from "react";
import { withAuth0 } from '@auth0/auth0-react';
import "../style/profile.css"


class Profile extends React.Component {

  render() {
    const { user } = this.props.auth0;
    console.log(user)
    return (
      <>
      <div class="card11">
      <div class="cover-photo">
          <img src={user.picture} class="profile" alt='profile pic'/>
      </div>
      <h3 class="profile-name">{user.name}</h3>
      <p class="about">{user.email}</p>
      <button class="btn11">Edit Profile</button>
      <button class="btn11">My Posts</button>

  </div>
  </>
      )
  }
};

export default withAuth0(Profile);
