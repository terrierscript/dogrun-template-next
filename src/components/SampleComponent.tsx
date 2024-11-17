"use client"
import { Box, Button, Stack } from "@mantine/core"
import { FC } from "react"

export const SampleComponent: FC<{}> = () => {
  return <Box>
    <Stack>
      <Box>hello</Box>
      <Button>Click</Button>
    </Stack>

  </Box>
}