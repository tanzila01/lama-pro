import React from 'react'
import styled from 'styled-components'
import {categories} from '../data'
import CategoryItem from './CategoryItem'
const Container = styled.div`
//  height: 100vh;
//  width: 100%;
 display: flex;
 padding: 20px;
 justify-content: space-between;
// //  background-color: coral;
//  position: relative;
//  overflow: hidden;
`
const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem item={item}/>
            ))}
        </Container>
    )
}

export default Categories
