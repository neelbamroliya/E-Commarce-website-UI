import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0 20px", display: "flex", flexDirection: "column" })}
`

const FilerText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0" })}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0" })}
`

const Option = styled.option`
`

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilerText>Filter Products:</FilerText>
                    <Select defaultValue="Color">
                        <Option disabled >Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select defaultValue="Size">
                        <Option disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilerText>Sort Products:</FilerText>
                    <Select defaultValue="Newest">
                        <Option>Newest</Option>
                        <Option>Price (ASC)</Option>
                        <Option>Price (DESC)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList