import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { SampleComponent } from '../components/SampleComponent'

export default function Home() {
  return (
    <Box>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <SampleComponent />
      </Container>
    </Box>
  )
}
