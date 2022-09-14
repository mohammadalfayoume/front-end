import React from "react";
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import "../style/profile.css"


class Profile extends React.Component {

  render() {
    const { user } = this.props.auth0;
    console.log(user)
    /* TODO: render information about the developers */
    return (
    <>
        <Card id="innerCard"  className="card2" style={{ width: '25rem' }} >
        <Card.Img className="img-me" variant="top" src='data:image/jpeg;base64,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' />
        <Card.Body class="card align-items-center" >
        <Card.Title>
                <h6>NickName :{user.name}</h6>
            </Card.Title>
        <Card.Text><h6>  Email:{user.email}.</h6></Card.Text>
        <Card.Text><h6> Welcom{user.name}</h6></Card.Text>

        </Card.Body>
    </Card>

      </>
      )
  }
};

export default withAuth0(Profile);