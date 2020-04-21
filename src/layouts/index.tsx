import React, { FunctionComponent, PureComponent, Fragment } from "react";
import Helmet from "react-helmet";
import { Container } from "react-grid-system";

const Header = () => (
  <div>
    <h1 style={{ margin: 0 }}>Header</h1>
  </div>
);

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children }) => (
  <Fragment>
    <Helmet
      title="Steven Archer"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <Container>{children}</Container>
  </Fragment>
);

export default DefaultLayout;
