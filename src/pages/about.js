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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus est
            atque fugit eius numquam soluta necessitatibus possimus aperiam
            inventore <strong>aspernatur</strong> architecto, id, sequi
            excepturi iure.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus est
            atque fugit eius <strong>numquam</strong> soluta necessitatibus
            possimus aperiam inventore aspernatur architecto, id, sequi
            excepturi iure. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Vitae, reprehenderit! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut qui tempore quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem
            error eaque <i>aliquid recusandae fugiat</i> consequuntur
            distinctio, quas dignissimos beatae maiores, non et sed repudiandae,
            dolores temporibus sequi optio corporis? Iusto dignissimos provident
            voluptates consequatur error, aspernatur{" "}
            <strong> velit architecto et.</strong>
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
