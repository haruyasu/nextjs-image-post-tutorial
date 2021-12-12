import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'

const Index = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const user = useSelector((state) => state.auth.user)

  return (
    <>
      <Head>
        <title>Instagram Clone</title>
      </Head>
    </>
  )
}

export default Index
