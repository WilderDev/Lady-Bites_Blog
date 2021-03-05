import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Styles from "../styles/LearningPage.module.scss";
import SEO from "../components/seo";
import AltLayout from "../components/altLayout";
import { AiFillDownCircle } from "@react-icons/all-files/ai/AiFillDownCircle";
import { AiFillUpCircle } from "@react-icons/all-files/ai/AiFillUpCircle";

const Learning = () => {
  return (
    <AltLayout id="top">
      <SEO
        title="Learning"
        description={
          "Lady Bites Blog All Learning: Lady Bites Blog Videos, Courses & Instructional Blog Posts."
        }
        isArticle={false}
        keywords={[
          "Lady Bites Blog",
          "Learning Lady Bites Blog",
          "Videos Lady Bites Posts",
          "Lady Bites Lauren Wilder Courses",
        ]}
      />
      ;
      <div className={Styles.container}>
        <section id="vid" className={Styles.videoSection}>
          <h2>Videos</h2>
          <p>
            I post regularly on Youtube. If you would like to join in making
            tasty treats go <a href="#"> Here!</a>
          </p>
          <h3>Most Recent Video</h3>
          <section className={Styles.contentContainer}></section>
          <a
            href="#courses"
            className={Styles.downArrow}
            name="arrow"
            rel="search"
            type="button"
            title="down arrow"
          >
            <AiFillDownCircle className={Styles.arrowIcon} />
          </a>
        </section>
        <section id="courses" className={Styles.courseSection}>
          <h2>Courses</h2>
          <p>
            If you are insterested in improving your baking skills and
            knowledge, check out my featured courses <a href="#">Here!</a>
          </p>
          <h3>Coming Soon. . .</h3>
          <section className={Styles.contentContainer}></section>
          <a
            href="#articles"
            className={Styles.downArrow}
            name="arrow"
            rel="search"
            type="button"
            title="down arrow"
          >
            <AiFillDownCircle className={Styles.arrowIcon} />
          </a>
        </section>
        <section id="articles" className={Styles.articleSection}>
          <h2>Articles</h2>
          <p>
            Dive inside the mind of how a pastry chef thinks. . . Come join my
            learning journey{" "}
            <AniLink paintDrip hex="#003d4e" to="/blog">
              Here!
            </AniLink>
          </p>
          <h3>Ladies Favorite Article For You!</h3>
          <section className={Styles.contentContainer}></section>
          <a
            href="#top"
            className={Styles.downArrow}
            name="arrow"
            rel="search"
            type="button"
            title="up arrow"
          >
            <AiFillUpCircle className={Styles.arrowIcon} />
          </a>
        </section>
      </div>
    </AltLayout>
  );
};

export default Learning;
