import React from 'react'
import logo4 from '../image/logo4.jpg'
import logo5 from '../image/logo5.jpg'
import logo6 from '../image/logo6.jpg'
import logo7 from '../image/logo7.jpg'
import { NavLink } from 'react-router-dom'
const HomePage = (props) => {
    return (
        <div className="container">
 


  {/* Marketing messaging and featurettes
================================================== */}
  {/* Wrap the rest of the page in another container to center all the content. */}
  <div className="container-marketing">
    {/* Three columns of text below the carousel */}
   
    {/* START THE FEATURETTES */}
    <hr className="featurette-divider" />
    <div className="row featurette">
      <div className="col-md-7 ">
        <h2 className="featurette-heading">
Summer's latest collection. <span className="text-muted">It'll blow your mind.</span></h2>
        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div className="col-md-5">
 <NavLink to="/category/60ba42e0c4e9a4041063f763">  <img className="featurette-image img-fluid mx-auto"src={logo4}  alt="" /></NavLink>
      </div>
    </div>
    <hr className="featurette-divider" />
    <div className="row featurette">
      <br/>
      <div className="col-md-7 order-md-2 mb-4">
        <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        <br/>
      </div>
      <div className="col-md-5 order-md-1">
      <NavLink to="/category/60ba2f3dc4e9a4041063f75f">  <img className="featurette-image img-fluid mx-auto"src={logo7}  /></NavLink>
      </div>
    </div>
    <hr className="featurette-divider" />
    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div className="col-md-5">
      <NavLink to="/category/60ba4208c4e9a4041063f760">  <img className="featurette-image img-fluid mx-auto"src={logo5} /></NavLink>
      </div>
    </div>
    <hr className="featurette-divider" />
    {/* /END THE FEATURETTES */}
  </div>{/* /.container */}


       
        </div>
    )
}

export default HomePage
