import React from "react";

import AltLayout from "../components/altLayout";
import SEO from "../components/seo";
import Styles from "../styles/AboutPage.module.scss";

const About = () => (
  <AltLayout>
    <SEO
      title="About"
      description={
        "About Page: Lady Bites Blog. About Lauren Wilder, professional pastry chef."
      }
      isArticle={false}
      keywords={[
        "Lady Bites Food Blog About Lauren Wilder",
        "Lady Bites blog",
        "Lauren Wilder",
        "Professional Pastry Chef",
      ]}
      // ! TSK image
    />
    <header className={Styles.container}>
      <h1>Hi from the About Page</h1>
      <p>I Lady. I Bite Things.</p>
      {/* Contact Form */}
    </header>
  </AltLayout>
);

export default About;
