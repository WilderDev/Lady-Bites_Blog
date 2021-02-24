import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../../components/Header";
import "../../styles/global.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Lady-Bites Blog`} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
