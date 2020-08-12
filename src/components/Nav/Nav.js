import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button/Button'

const Navigation = styled.nav`
width: 90%;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
padding: 20px;
`


const Nav = ({prev, next}) => {
    return (  
        <>
        <Navigation>
            <Button  value="Prev" onClick={prev}>Prev</Button>
            <Button  value="Next" onClick={next}>Next</Button>
        </Navigation>
        </>
    );
}

export default Nav