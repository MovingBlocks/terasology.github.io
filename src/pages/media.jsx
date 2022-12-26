import React from "react";
import Layout from "../layout";
import Media from "../components/Media/Media";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

const media = () => (
  <Layout>
    <div className="media-container">
      <Media />
    </div>
  </Layout>
);

export default media;

export const Head = () => <SEO title={`Media | ${config.siteTitle}`} />;
