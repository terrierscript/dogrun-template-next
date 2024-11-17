"use client"
import { MantineProvider, createTheme } from "@mantine/core"
import React, { FC, PropsWithChildren } from "react"

const theme = createTheme({
})

export const Provider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <MantineProvider theme={theme}>
    {children}
  </MantineProvider>
}

