import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                discription = "Order Online for Touchless Deliveryrder"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />

            <Section 
                title="Model Y"
                discription = "Order Online for Touchless Deliveryrder"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />

            <Section 
                title="Model X"
                discription = "Order Online for Touchless Deliveryrder"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />


            
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`