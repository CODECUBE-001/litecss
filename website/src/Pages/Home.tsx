import { motion } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Fragment, useRef } from "react";
import scrollOptions from "../Config/scroll";
import { Helmet } from "react-helmet";
import Header from "../Layout/Header";
import Hero from "../Layout/Hero";
import Features from "../Layout/Features";

const Home = () => {
  const containerRef = useRef(null);

  return (
    <Fragment>
      <Helmet>
        <title>Litecss</title>
      </Helmet>

      <LocomotiveScrollProvider
        watch={[]}
        options={scrollOptions}
        containerRef={containerRef}
      >
        <motion.main
          exit={{ opacity: 0 }}
          key="home"
          data-scroll-container
          ref={containerRef}
          id="home"
        >
          <Header />
          <Hero />
          <Features />
        </motion.main>
      </LocomotiveScrollProvider>
    </Fragment>
  );
};

export default Home;
