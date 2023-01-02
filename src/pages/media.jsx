import React from "react";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

function Gallery() {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "images" } }) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData(width: 1200, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const imgArray = [];
  data.images.nodes.forEach((img) => {
    imgArray.push(img.childImageSharp.gatsbyImageData);
  });

  const [imageDisplay, setImageDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState(``);

  const showImage = (image) => {
    setImageToShow(image);
    setImageDisplay(true);
  };

  const hideImage = () => {
    setImageDisplay(false);
  };

  const showNext = (e) => {
    e.stopPropagation();
    const currentIndex = imgArray.indexOf(imageToShow);
    if (currentIndex >= imgArray.length - 1) {
      setImageDisplay(false);
    } else {
      const nextImage = imgArray[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    const currentIndex = imgArray.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setImageDisplay(false);
    } else {
      const nextImage = imgArray[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [imagePerPage] = useState(9);
  const indexOfLastImage = currentPage * imagePerPage;
  const indexOfFirstImage = indexOfLastImage - imagePerPage;
  const currentImgArray = imgArray.slice(indexOfFirstImage, indexOfLastImage);
  const paginate = (pageNum) => setCurrentPage(pageNum);

  const prevIconAttributes = useMemo(
    () => ({ size: "2em", className: "mr-1" }),
    []
  );
  const nextIconAttributes = useMemo(
    () => ({ size: "2em", className: "ml-1" }),
    []
  );
  const closeIconAttributes = useMemo(() => ({ size: "1.5em" }), []);
  return (

    <Layout title="Gallery">
    <div className="media-container">
      <div>
        <Row className="justify-content-center">
          {currentImgArray.map((image) => (
            <Col lg="4" md="6" sm="6" xs="6" onClick={() => showImage(image)}>
              <div className="media-img">
                {" "}
                <GatsbyImage
                  image={image}
                  imgStyle={{
                    transform: "none",
                  }}
                />
              </div>
            </Col>
          ))}

          {imageDisplay ? (
            <div className="media-modal">
              <div className="lightbox">
                <div>
                  <button
                    type="button"
                    className="btn btn-lg btn-primary font-weigth-bolder rounded-circle media-button"
                    onClick={showPrev}
                  >
                    {" "}
                    <IconContext.Provider value={prevIconAttributes}>
                      <FaCaretLeft />
                    </IconContext.Provider>
                  </button>
                </div>

                <div className="align-items-center">
                  <Col className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-lg btn-primary rounded-circle media-button-cancel"
                      onClick={hideImage}
                    >
                      <IconContext.Provider value={closeIconAttributes}>
                        <ImCross />
                      </IconContext.Provider>
                    </button>
                  </Col>

                  <div>
                    <GatsbyImage
                      image={imageToShow}
                      id="lightbox-img"
                      onClick={hideImage}
                      className="m-4"
                      imgStyle={{ boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)" }}
                    />
                  </div>
                </div>

                <div className="">
                  <button
                    type="button"
                    className="btn btn-lg btn-primary ml-3 font-weigth-bolder rounded-circle media-button"
                    onClick={showNext}
                  >
                    <IconContext.Provider value={nextIconAttributes}>
                      <FaCaretRight />
                    </IconContext.Provider>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </Row>
      </div>
      <MediaPagination
        imagePerPage={imagePerPage}
        totalImages={imgArray.length}
        paginate={paginate}
        currentSlider={currentPage}
      />
    </div>
  </Layout>
  );
}

export default Gallery;

export function Head() {
  return <SEO title={`Media | ${config.siteTitle}`} />;
}
