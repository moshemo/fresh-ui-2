import React from 'react'
import { MainLayout } from 'Layouts'
import { Box } from 'UI'

const HomePage = () => {
  return (
    <MainLayout>
      <h1>Home</h1>
      <Box bg="primary.base" height={8} width={8} mt={7} />
    </MainLayout>
  )
}

export default HomePage
