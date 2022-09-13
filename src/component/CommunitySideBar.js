import React, { Component } from "react";
import SideBarCommunityModal from "./SideBarCommunityModal";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
} from "cdbreact";

import "../style/sideBar.css";
import { withAuth0 } from '@auth0/auth0-react'; 


class CommunitySideBar extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            height: "100vh",
            overflow: "scroll initial",
          }}
          className="sidebar"
        >
          <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                Community
              </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                {/* <NavLink exact to="/" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">
                  
                  </CDBSidebarMenuItem>
                </NavLink> */}
                <SideBarCommunityModal addPost={this.props.addPost}/>

               
                
                  
                
              </CDBSidebarMenu>
            </CDBSidebarContent>

           
          </CDBSidebar>
        </div>
      </div>
    );
  }
}

export default withAuth0(CommunitySideBar)