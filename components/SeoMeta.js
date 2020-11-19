import Head from 'next/head'

const SeoMeta = ({ pageTitle }) => {
  return (
    <Head>
      <title>{pageTitle} | Info Covid</title>

      <meta name="author" content="Zahniar Adirahman" />
      <meta name="title" content={`${pageTitle} | Info Covid`} />
      <meta name="description" content="Monitoring virus corona secara global" />
    </Head>
  )
}

export default SeoMeta