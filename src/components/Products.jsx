import React from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'

const Container = styled.div`
//  height: 100vh;
//  width: 100%;
 display: flex;
 padding: 20px;
 flex-wrap: wrap;
 justify-content: space-between;
// //  background-color: coral;
//  position: relative;
//  overflow: hidden;
`
const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Products
