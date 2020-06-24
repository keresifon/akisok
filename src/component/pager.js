import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Card , CardDeck} from "react-bootstrap"

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
<>
<Container>
            <Row>
    <nav aria-label="...">
    <ul className="pagination">
    {previousPagePath && (
      <li className="page-item ">
        <Link to={previousPagePath} className="page-link" >Previous</Link>
      </li>
       )}
      {/* <li className="page-item"><a className="page-link" href="#">1</a></li>
      <li className="page-item active">
        <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
      </li>
      <li className="page-item"><a className="page-link" href="#">3</a></li> */}
      {nextPagePath && (
      <li className="page-item">
        < Link to={nextPagePath} className="page-link" >Next</Link>
      </li>
      )}
    </ul>
  </nav>
  </Row>
  </Container>
    {/* <div>
      {previousPagePath && (
        <span>
          <Link to={previousPagePath}>Previous</Link>
        </span>
      )}
      
      {nextPagePath && (
        <span>
          <Link to={nextPagePath}>Next</Link>
        </span>
      )}
    </div> */}
    </>
  )
}

export default Pager
