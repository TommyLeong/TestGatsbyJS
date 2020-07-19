import React from "react";
// import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
// import { Link } from "gatsby";

const SystemCardDetails = ({ languagePack }) => {
  const systemCards = [
    {
      value: 0,
      image: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1.25,
            src: "/static/7de80b5f57f779d116b3a186b9a9268e/1a97c/tutorials.png",
          },
        },
      },
      title: "Complete Online Food Ordering and Delivery System. On demand.",
      featureDescription:
        "Our food ordering and delivery system centralizes all pick-up, delivery & dine in orders, so you can easily be in full control of your business",
    },
    {
      value: 1,
      image: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1.25,
            src: "/static/7de80b5f57f779d116b3a186b9a9268e/1a97c/tutorials.png",
          },
        },
      },
      title:
        "Take unlimited orders from your website, Facebook page or mobile app",
      featureDescription:
        "Who said that online order has to be complicated? With our free restaurant ordering system, you can set up an account & start taking online orders within minutes, straight from your Website, Facebook page and mobile app. It's easy to boost your profits & save on food portal commission fees when rely on a powerful ordering sytem",
    },
    {
      value: 2,
      image: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1.25,
            src: "/static/7de80b5f57f779d116b3a186b9a9268e/1a97c/tutorials.png",
          },
        },
      },
      title: "Accepting incoming orders on the from any Smartphone or Tablet",
      featureDescription:
        "Download our free restaurant order taking app on your own smartphone & confirm orders in one tap of the screen. Experience how great it is to have order taking at your fingertips",
    },
  ];

  const renderImageLeft = (item) => {
    return (
      <div style={{ borderBottom: "thin solid black" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: 300,
            backgroundColor: "blue",
            marginLeft: 100,
            marginRight: 100,
          }}
        >
          <div
            style={{
              backgroundColor: "pink",
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "yellow",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ fontWeight: "bold" }}>{item.title}</div>
            <div style={{ paddingTop: 20 }}>{item.featureDescription}</div>
          </div>
        </div>
        {/* <div style={{ backgroundColor: "black", height: 1 }} /> */}
      </div>
    );
  };

  const renderImageRight = (item) => {
    return (
      <div style={{ borderBottom: "thin solid black" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: 300,
            backgroundColor: "blue",
            marginLeft: 100,
            marginRight: 100,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "yellow",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ fontWeight: "bold" }}>{item.title}</div>
            <div style={{ paddingTop: 20 }}>{item.featureDescription}</div>
          </div>
          <div
            style={{
              backgroundColor: "pink",
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        </div>
        {/* <div style={{ backgroundColor: "black", height: 1 }} /> */}
      </div>
    );
  };

  return (
    <div>
      {systemCards.map((item) => {
        console.log(item.value);
        console.log(Math.floor(item.value) === item.value);

        const imagePlaceLeft = item.value / 2;

        if (Math.floor(imagePlaceLeft) === imagePlaceLeft) {
          return renderImageLeft(item);
        }
        return renderImageRight(item);
      })}
    </div>
  );
};

export default SystemCardDetails;
