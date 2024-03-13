import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { SampleComponent } from '../components/SampleComponent'

export default function Home() {
  return (
    <Box>
      <Container>
        <SampleComponent />
      </Container>
    </Box>
  )
}
