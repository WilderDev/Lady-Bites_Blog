import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { StaticImage } from "gatsby-plugin-image";

import Styles from "../../styles/BlogPost.module.scss";
import AltLayout from "../../components/altLayout";
import SEO from "../../components/seo";

const BlogPost = ({ data }) => {
  const {
    title,
    keywordTags,
    introduction,
    featuredImage,
  } = data.contentfulBlogPost;

  return (
    <AltLayout>
      <SEO
        title={title}
        author="Lauren Wilder"
        description={introduction.introduction}
        // ! keywords
      />
      <article className={Styles.container}>
        <h1>{title}</h1>
        {/* Tags */}
        <Img
          fixed={featuredImage.fixed}
          alt={
            featuredImage.description
              ? featuredImage.description
              : featuredImage.title
          }
        />
        <hr />
        <main>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          totam labore vero dolor excepturi obcaecati architecto voluptate
          corrupti voluptatem dolorem eos dolorum ullam sapiente aut quod quos
          voluptas laborum nam, rerum cupiditate eligendi ad magnam fugit. Quod
          repudiandae explicabo sequi, fugiat libero quasi ut in laborum dolorum
          officia id quo blanditiis voluptatibus non, neque laboriosam. Itaque
          vero in nostrum tempora commodi iste sed architecto, inventore
          perspiciatis. Consectetur nostrum, aut recusandae temporibus expedita,
          doloremque, quod in sed cum placeat minus. Excepturi expedita eveniet
          quas facere nihil rem voluptate ab dignissimos delectus nostrum.
          Facilis delectus natus tempora sed? Nobis asperiores eum aliquam iure
          illum repudiandae ut, ducimus officiis rem corporis quas facere culpa
          perferendis amet impedit voluptatum consectetur odit! Pariatur
          repellat ad totam, animi voluptatem et delectus laudantium aspernatur
          asperiores cumque, quaerat eum quas beatae quos quisquam ut dolor
          officia, eius sapiente nobis corrupti facere. Laudantium blanditiis
          iure quisquam! Veritatis quo rerum aspernatur, architecto pariatur
          earum mollitia minus iure cumque corrupti deleniti eum facere quidem
          tempora sint provident ullam obcaecati dolor. Ut sunt eos ea quas
          beatae accusamus vitae, incidunt aperiam ipsa dolore impedit tempore
          accusantium ullam vero consequatur minima eveniet debitis harum sint
          quos amet totam eum saepe dolorem? Magnam necessitatibus mollitia
          velit minima praesentium! Esse aut ratione quae deleniti. Nemo amet
          nisi facilis! Dolore impedit asperiores atque non numquam. Dolorem
          earum ipsum autem quo rem nulla eum, architecto repellat sit magni.
          Minus reprehenderit velit asperiores ratione rem a nobis nisi at
          tempora distinctio suscipit deserunt possimus consectetur, alias totam
          iusto libero magnam voluptas corporis? Aperiam, facere nam. Harum modi
          magni eaque eligendi dicta optio est veritatis quasi. Quidem, earum!
          Error, beatae fugiat? Voluptas tenetur placeat reiciendis vel? Iusto,
          voluptatum. Esse quisquam veniam eius, facere voluptas excepturi
          libero voluptatem perferendis mollitia, ullam atque eligendi officiis
          tempora blanditiis voluptatibus illo nostrum quo! Reiciendis amet,
          cumque consectetur esse nobis suscipit inventore aut, eius sint dolore
          reprehenderit laudantium in natus cupiditate numquam assumenda labore
          velit ad temporibus cum facere blanditiis nulla aperiam! Iste, quidem,
          error ea inventore consequuntur expedita rerum quaerat delectus sint
          atque laudantium. Voluptas accusantium in ipsam, iusto quo vitae error
          iste consequuntur explicabo est dolor, culpa quidem delectus nam
          assumenda fugiat laboriosam nesciunt! Corrupti illum quo debitis!
          Accusamus neque velit, nulla tempore vel laborum itaque cum obcaecati
          nostrum, earum vitae explicabo nesciunt beatae, omnis in. Aspernatur
          quasi vel sapiente ipsam accusantium voluptate nostrum debitis, harum
          blanditiis consectetur, a libero veniam? Vel modi, molestias quidem ea
          quis dolorem debitis, consectetur alias voluptates in delectus
          deserunt unde aspernatur impedit expedita laudantium illo? Ab eligendi
          incidunt eaque, harum aspernatur vitae necessitatibus alias suscipit
          quae iure accusamus natus repellendus delectus odit at dolores?
          Perspiciatis ea tempora corrupti excepturi itaque et veniam ducimus?
          Excepturi maiores ipsum officia asperiores facere atque laudantium
          ratione commodi inventore dicta nam, doloribus neque rem iure debitis
          voluptatum reprehenderit quos tempore. Deleniti consectetur repellat,
          recusandae odit impedit neque fuga minima architecto, optio modi totam
          iste velit suscipit distinctio quod. Odit, voluptates ipsa eveniet,
          itaque quisquam eos optio asperiores maiores nobis assumenda quae!
        </main>
        <aside className={Styles.author}>
          <StaticImage
            src="../images/angel.jpg"
            alt="Headshot of Lauren Wilder"
            placeholder="blurred"
            layout="fixed"
            width={100}
            height={100}
          />
          <h5>Lauren Wagner</h5>
          <p>Professional Pasty Chef & Happy Goofball</p>
        </aside>
      </article>
    </AltLayout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      attachedToRecipe
      publishDate(formatString: "MMMM DD, YYYY")
      slug
      title
      mainText {
        raw
      }
      keywordTags
      introduction {
        introduction
      }
      featuredImage {
        fixed(width: 800, height: 300) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
  }
`;

// ! Add connected recipe
