import React, { FunctionComponent } from "react";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const Index: FunctionComponent<IndexPageProps> = (
  props: IndexPageProps,
  context: any
) => (
  <div>
    <h1>Steven Archer</h1>
    <p>this is WIP</p>
  </div>
);

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
