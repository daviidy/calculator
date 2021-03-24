import React from 'react';
import '../eventbrite.css';
import 'bootstrap/dist/css/bootstrap.css';

const Quote = () => (
  <>
    <main className="bg-white main">
      <div className="container-fluid pb-5">
        <div className="row jumbotron bg-white">
          <div className="col-md-6 main-content pt-5">
            <p className="display-3 font-weight-bold">Quote of the day</p>
            <p className="mb-3">
              Mathematics is not about numbers, equations,
              computations, or algorithms: it is about
              understanding.
              –William Paul Thurston.
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" alt="" />
          </div>

        </div>
      </div>
    </main>
  </>

);
export default Quote;
