import React from "react";
import background from './star-wars-order.png'

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={background}
              alt="star-wars"
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Home</h1>
            <p>
            Star Wars is an American epic space opera media franchise created by George Lucas,
             which began with the eponymous 1977 film 
            and quickly became a worldwide pop-culture phenomenon. 
            Click above for more info. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;