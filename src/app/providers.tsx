'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

import { theme } from './common/theme'

interface IProviders {
    children: ReactNode
}

const Providers: FC<IProviders> = ({ children }) => {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    )
}

export default Providers
