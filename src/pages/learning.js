import React from "react";

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
          <h1>Learning Center</h1>
          <h2>Videos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            perferendis illo sed eum quis ratione, incidunt animi magnam
            consequatur impedit.
          </p>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            perferendis illo sed eum quis ratione, incidunt animi magnam
            consequatur impedit.
          </p>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            perferendis illo sed eum quis ratione, incidunt animi magnam
            consequatur impedit.
          </p>
          <a
            href="#top"
            className={Styles.upArrow}
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
