import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(255, 208, 161);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 70%;
    height: 50%;
    padding: 20px;
    background-color: white;
    border-radius: 20px;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 50px;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0 ;
    padding: 10px;
`

const Button = styled.button`
    width: 30%;
    border: none;
    padding: 15px 20px ;
    margin-top: 30px;
    background-color: teal;
    color: white;
    cursor: pointer;
`


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register