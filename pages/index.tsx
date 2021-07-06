import { Box, Flex, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import Pages from '../components/Pages'
import styles from '../styles/Home.module.css'

const Home: React.FC<any> = ({ children, cool }) => {

  return (
    <Flex minH="100vh" direction="column">


      <Box>
        Index page
      </Box>



    </Flex>
  )
}

export default Home
