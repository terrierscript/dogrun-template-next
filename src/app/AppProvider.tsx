"use client"
import { ChakraProvider } from "@chakra-ui/react"
import App, { AppProps } from "next/app"
import React, { FC, PropsWithChildren } from "react"

export const Provider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <ChakraProvider>
    {children}
  </ChakraProvider>
}

