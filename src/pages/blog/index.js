import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import SystemCardDetails from "../../components/SystemCardDetails";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
            marginBottom: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "#f40",
              color: "white",
              padding: "1rem",
            }}
          >
            Ordering System
          </h1>
          <div style={{ textAlign: "left", color: "white", padding: 10 }}>
            Zero commission unlimited orders
          </div>
        </div>
        <SystemCardDetails />
        {/* <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section> */}
      </Layout>
    );
  }
}
