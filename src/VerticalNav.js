import React from 'react'
import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledVerticalNav = styled.div`
    height: 100vh;
    line-height: 3em;
    padding-left: 1em;
    width: 200px;
`

const VerticalNav = () => {
    return (
        <StyledVerticalNav>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Link to="/home">Active</Link>
                <Link to="/link2">Link</Link>
                <Link to="/link3">Link</Link>
            </Nav>
        </StyledVerticalNav>
    )
}

export default VerticalNav