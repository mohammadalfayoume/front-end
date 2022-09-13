import React, { Component } from "react";
import SideBarCommunityModal from "./SideBarCommunityModal";

import { withAuth0 } from '@auth0/auth0-react'; 


class CommunitySideBar extends Component {
  render() {
    return (
      <>
      <SideBarCommunityModal />
      </>
    );
  }
}

export default withAuth0(CommunitySideBar)