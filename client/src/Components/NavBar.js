import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"

const active = {
    // background: "0E3B43",
    color: "#312509",
    fontWeight: "bold",
    border: "#312509 6px solid"
}

const NavStyle = styled.div`
    display: flex;
    /* width: 35vh; */
    padding: 25px;
    text-align: center;
    font-size: clamp(1.5rem, 3vw + 1rem, .5rem);
    align-items: center;
    margin-bottom: 30px;
    justify-content: space-around;
`
  const StyledLink = styled(NavLink)`
      width: 100%;
      padding: 12px;
      margin:  6px 6px;
      background: #357266;
      border: #312509 6px solid;
      text-decoration: none;
      color: white;
  `


function NavBar() {
  return (
    <div>
      <NavLink
      exact to="/"
      activeStyle={active}
      >
        Home
      </NavLink>
      <NavLink
      exact to="/profile"
      activeStyle={active}
      >
        Account Details
      </NavLink>
      <NavLink
      exact to="/allCards"
      activeStyle={active}
      >
        Browse All Reward Cards
      </NavLink>
      {/* <NavLink
      exact to="/cardDetails"
      >
        See A Card's Details
      </NavLink> */}
      <NavLink
      exact to="/login"
      activeStyle={active}
      >
        Log Out
      </NavLink>
    </div>
  )
}

export default NavBar