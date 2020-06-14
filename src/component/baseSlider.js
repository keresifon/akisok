import React from "react"
import InfiniteCarousel from "react-leaf-carousel"
import { Card } from "react-bootstrap"
import { Link, graphql, useStaticQuery } from "gatsby"

const BaseSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulABlogPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            slug
            title
            date(formatString: "YYYY-MM-DD")
            category
            excerpt
            featuredImage {
              title
              fluid(maxWidth: 345, maxHeight: 205) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={false}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice={true}
        autoCycle={true}
        slidesSpacing={0}
      >
        {data.allContentfulABlogPost.edges.map(edge => {
          return (
            <div>
              <Card className=" text-black my-2 border-0" key={edge.node.id}>
                <Card.Img
                  src={edge.node.featuredImage.fluid.src}
                  alt={edge.node.featuredImage.title}
                />
                <Card.ImgOverlay>
                  <Card.Title className="history">
                    {" "}
                    <Link to={`/category/${edge.node.category}`}></Link>
                    {edge.node.category}
                  </Card.Title>

                  <Card.Text>
                    <Link to={`/${edge.node.slug}`} className="small">
                      {edge.node.title}
                    </Link>
                  </Card.Text>
                  <Card.Text>
                    <Link to={`/${edge.node.slug}`} className="read-more">
                      Read More &#8594;
                    </Link>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          )
        })}
      </InfiniteCarousel>
    </div>
  )
}

export default BaseSlider
