import Head from 'next/head'
import React from 'react'

const CustomHead = ({ title, description, children }) => {
  return (
    <Head>
      <title>{title} - Mercado Livre</title>
      <meta name="description" content={description} />

      <link rel="icon" href="/favicon.svg" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />

      {children}
    </Head>
  )
}

export default CustomHead
