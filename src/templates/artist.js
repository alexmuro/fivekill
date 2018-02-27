import React from "react";
import Helmet from "react-helmet";
import Screen from '../components/Screen'

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <section className='content'>
      <Screen title={post.frontmatter.name}>
        <Helmet title={`${post.frontmatter.name} - Fivekill Records`} />
        <div className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </Screen>
    </section>
  );
}

export const pageQuery = graphql`
  query ArtistByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        name
        title
        website
        facebook
        twitter
        press_landscape
        press_sq
      }
    }
  }
`;
