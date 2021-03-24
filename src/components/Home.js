import React from 'react';
import '../eventbrite.css';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => (
  <>
    <main className="bg-white main">
      <div className="container-fluid pb-5">
        <div className="row jumbotron bg-white">
          <div className="col-md-6 main-content pt-5">
            <p className="display-6 text-danger font-weight-bold">Welcome to</p>
            <p className="display-3 font-weight-bold">Math Magicians</p>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit,
              sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit,
              sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="https://images.unsplash.com/photo-1511377107391-116a9d5d20b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
          </div>

        </div>
      </div>
    </main>
  </>

);
export default Home;
