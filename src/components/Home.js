import React from 'react';
import '../eventbrite.css';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => (
  <>
    <header>
      <nav className="navbar navbar-expand-sm bg-white border-bottom fixed-top">
        <ul className="navbar-nav flex-row align-items-center">
          <li className="nav-item ml-3">
            <h1 className="text-uppercase p-2 bg-dark rounded text-white font-weight-bold">math magicians</h1>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto align-items-center">
          <li className="nav-item">
            <a href="/calculator" className="p-2 bg-oschool text-white rounded nav-link">
              Use calculator
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" id="navbardrop" data-toggle="dropdown">
              <img className="rounded-circle img-fluid user-avatar" src="https://secure.gravatar.com/avatar/9c275cba24f7c939201cda28f832f8e0?s=80" alt="User" />
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/">Link 1</a>
              <a className="dropdown-item" href="/">Link 2</a>
              <a className="dropdown-item" href="/">Link 3</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>

    <main className="bg-white main">
      <div className="container-fluid pb-5">
        <div className="row jumbotron bg-white">

          <div className="col-md-6 main-content pt-5">
            <p className="display-6 text-danger font-weight-bold">Keep in touch with</p>
            <p className="display-3 font-weight-bold">virtual events</p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F99891082%2F174963144412%2F1%2Foriginal.20200430-164830?w=1016&auto=format%2Ccompress&q=75&sharp=10&s=be5cc9aa4646e8daeb55c374bc923a05" alt="" />
          </div>

        </div>
      </div>
    </main>
  </>

);
export default Home;
