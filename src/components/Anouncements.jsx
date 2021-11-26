import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 height: 30px;
 background-color: teal;
 color: white;
 display: flex;
   align-items: center;
   justify-content: center;
   font-size: 14px;
   font-weight: 500;
`
const Anouncements = () => {
    return (
        <Container>
            Super Deal! free shipping for orders over 50$
        </Container>
                )
}

export default Anouncements
