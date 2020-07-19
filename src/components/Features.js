import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Link } from "gatsby";

const FeatureGrid = ({ gridItems, languagePack }) => {
  console.log(gridItems);
  const homepageCards = [
    {
      image: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1.25,
            src: "/static/7de80b5f57f779d116b3a186b9a9268e/1a97c/tutorials.png",
          },
        },
      },
      title: languagePack.OnlineOrderingBrief_Title,
      info: languagePack.OnlineOrderingBrief_Info,
      details: languagePack.OnlineOrderingBrief_Details,
      link: "/blog",
    },
    {
      image: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1.25,
            src: "/static/7de80b5f57f779d116b3a186b9a9268e/1a97c/tutorials.png",
          },
        },
      },
      title: languagePack.TableReservationBrief_Title,
      info: languagePack.TableReservationBrief_Info,
      details: languagePack.TableReservationBrief_Details,
      link: "/blog",
    },
    // {
    //   image: {
    //     childImageSharp: {
    //       fluid: {
    //         aspectRatio: 1.25,
    //         src: "/static/7de80b5f57f779d116b3a186b9a9268e/1a97c/tutorials.png",
    //       },
    //     },
    //   },
    //   title: languagePack.FacebookOrderingBrief_Title,
    //   info: languagePack.FacebookOrderingBrief_Info,
    //   details: languagePack.FacebookOrderingBrief_Details,
    //   link: "/blog",
    // },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: 20,
      }}
    >
      {homepageCards.map((item) => (
        <div
          style={{
            width: 250,
            backgroundColor: "white",
            border: "1px solid grey",
            borderRadius: 5,
            boxShadow: "1px 1px lightgrey",
          }}
        >
          <Link to={item.link}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: 10,
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
              <div>
                <div style={styles.cardTitle}>{item.title}</div>
                <div style={styles.cardInfo}>{item.info}</div>
                <div style={styles.cardInfo}>{item.details}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

const styles = {
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  cardInfo: {
    fontSize: 12,
    textAlign: "center",
    padding: 10,
  },
};

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
