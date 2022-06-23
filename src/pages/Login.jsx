import styled from "styled-components"
import Navbar from "../components/Navbar"
import { mobile, teblet } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(255, 208, 161);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 50%;
    height: 50%;
    padding: 20px;
    background-color: white;
    border-radius: 20px;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    ${mobile({ width: "75%" })}
    ${teblet({ width: "80%", height: "40%" })}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 50px;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${teblet({ marginTop: "150px" })}
`

const Input = styled.input`
    /* flex: 1; */
    width: 60%;
    margin: 20px 10px 0 0 ;
    padding: 10px;
    ${teblet({ margin: "15px 5px 0 0" })}
`

const Button = styled.button`
    width: 30%;
    border: none;
    padding: 15px 20px ;
    margin-top: 30px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

const Link = styled.a`
    margin: 10px 0px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;

`

const Login = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Wrapper>
                    <Title>SIGN IN</Title>
                    <Form>
                        <Input placeholder="username" />
                        <Input placeholder="password" />
                        <Button>LOGIN</Button>
                        <Link>forget password ?</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container>
        </>
    )
}

export default Login