import React, { Component } from "react";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
} from "mdbreact";

class TabsDefault extends Component {
  state = {
    activeItem: "1",
  };

  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  render() {
    return (
      <MDBContainer>
        <MDBNav className="nav-tabs mt-5">
          <MDBNavItem>
            <div className="nav-link" onClick={this.toggle("1")} role="tab">
              Home
            </div>
          </MDBNavItem>
          <MDBNavItem>
            <div className="nav-link" onClick={this.toggle("2")} role="tab">
              Profile
            </div>
          </MDBNavItem>
          <MDBNavItem>
            <div className="nav-link" onClick={this.toggle("3")} role="tab">
              Profile
            </div>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem}>
          <MDBTabPane tabId="1" role="tabpanel">
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              odit magnam minima, soluta doloribus reiciendis molestiae placeat
              unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat
              ratione porro voluptate odit minima.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <p className="mt-2">
              Quisquam aperiam, pariatur. Tempora, placeat ratione porro
              voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Nihil odit magnam minima, soluta doloribus
              reiciendis molestiae placeat unde eos molestias.
            </p>
            <p>
              Quisquam aperiam, pariatur. Tempora, placeat ratione porro
              voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Nihil odit magnam minima, soluta doloribus
              reiciendis molestiae placeat unde eos molestias.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <p className="mt-2">
              Quisquam aperiam, pariatur. Tempora, placeat ratione porro
              voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Nihil odit magnam minima, soluta doloribus
              reiciendis molestiae placeat unde eos molestias.
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default TabsDefault;
