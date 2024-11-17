import Head from 'next/head'
import React from 'react'
import { SampleComponent } from '../components/SampleComponent'
import { Box, Container } from '@mantine/core'

export default function Home() {
  return (
    <Box>
      <Container>
        <SampleComponent />
      </Container>
    </Box>
  )
}
