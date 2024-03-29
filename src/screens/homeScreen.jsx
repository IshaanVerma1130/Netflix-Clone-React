import React from "react";
import Banner from "../components/banner";
import "./homeScreen.css";
import Nav from "../components/nav";
import Row from "../components/row";
import requests from "./../service/request";

const HomeScreen = (props) => {
  return (
    <div className="homescreen">
      <Nav></Nav>
      <Banner></Banner>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
};

export default HomeScreen;
