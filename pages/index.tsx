import React from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import DefaultLayout from '../layouts/default';
import Viewer from '../components/viewer';

const Home: NextPage = () => {
  return (
    <div aria-label="Home Page">
      <Head>
        <title>Sorting Algorithm Visualizer - Alviz</title>
        <meta
          name="description"
          content="A visualizer for array sorting algorithms"
        />
        <meta name="author" content="Mel jatau, meljatau@gmail.com" />

        <meta
          property="og:image"
          content="https://i.ibb.co/RS9wz5x/Artboard-1-2x.png"
        />
        <meta name="og:site_name" content="Alviz" />
        <meta name="og:title" content="Sorting Algorithm Visualizer - Alviz" />
        <meta
          name="og:description"
          content="A visualizer for array sorting algorithms"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <h1 hidden>Sorting Algorithm Visualizer</h1>

      <DefaultLayout>
        <Viewer />
      </DefaultLayout>
    </div>
  );
};

export default Home;
