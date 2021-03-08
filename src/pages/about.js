import React from "react";
import { StaticImage } from "gatsby-plugin-image";

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
    <div className={Styles.container}>
      <h1>Hi, I'm Lauren Wilder :)</h1>
      <section className={Styles.split}>
        <div className={Styles.bio}>
          <h2>A Little About Me.</h2>
          <p>
            Ahhh, the feeling of true <strong>serenity</strong>. . .
          </p>
          <p>
            There have been many moments when this emotion has washed over me -
            most of them are linked to being in the kitchen crafting something
            yummy.
          </p>
          <p>
            Yah know, I believe that{" "}
            <strong>the kitchen is the soul of the home.</strong> It is here
            where we experiment with recipes to better understand how
            ingredients work together. In this space we can make dish after
            dish, feeling completely satisfied when it comes out perfectly as
            planned. Then we get to share our creation with those we love most!
          </p>
          <p>
            Ultimately, I always rediscover a{" "}
            <strong> passion and curiosity</strong> that has been with me since
            I was little. It is not uncommon to reminisce on my younger years,
            climbing onto a chair to reach the counter in order to make a batch
            of shortbread from my <i>Raggedy Anne Cookbook</i>. So many great
            memories!
          </p>
          <p>
            Well, thank you for stopping by! I am so <strong>grateful</strong>{" "}
            we can share in this journey & I hope these recipes bring about many
            loving memories for you to come!
          </p>
          <p>
            <small>
              Feel free to contact me at: <i>LadyBitesBlog@gmail.com</i>
            </small>
          </p>
        </div>
        <div className={Styles.picture}>
          <StaticImage
            src="../images/lady_profile.jpg"
            alt="Lauren Wilder Face Close-up"
            placeholder="blurred"
            layout="fullWidth"
            loading="eager"
            quality={100}
          />
        </div>
      </section>
    </div>
    <section className={Styles.contactForm}>
      <h2>Have Something to Say?</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action=""
      >
        <input className="hidden" name="bot-field" type="hidden" />
        <input
          type="hidden"
          className="hidden"
          name="form-name"
          value="contact"
        />

        <label htmlFor="name">
          Your Name:{" "}
          <input type="text" name="name" placeholder="Jane Doe" id="name" />
        </label>
        <label htmlFor="email">
          Your Email:{" "}
          <input
            type="email"
            name="email"
            placeholder="JaneDoe@gmail.com"
            id="email"
          />
        </label>
        <label htmlFor="message">
          Message:{" "}
          <textarea
            name="message"
            type="text"
            placeholder="Hi Lauren! I Love your work and was wondering . . . "
            id="message"
          ></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  </AltLayout>
);

export default About;
