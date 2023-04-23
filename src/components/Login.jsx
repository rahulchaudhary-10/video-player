import { VStack, Container, Heading , Input} from '@chakra-ui/react';
import React from 'react'

const Login = () => {
  return <Container maxW={"Container.xl"} h={"100vh"} p={"16"}>

    <form>
        <VStack alignItems={'stretch'}
        spacing={'8'}
        w={'96'}
        m={'auto'}
        my={'16'}
        >
            <Heading>Welcome Back</Heading>
            <Input placeholder={"Email"} type={"email"} />
        </VStack>
    </form>
  </Container>
}

export default Login;