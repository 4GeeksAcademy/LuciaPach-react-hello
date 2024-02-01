import React from "react";
import { MyFooter } from "./MyFooter";
import Navbar from "./Navbar";
import Card from "./Cards";
import { Jumbotron } from "./Jumbotron";

const Home = () => {
			return (
				<><Navbar />
					<div class="container">
						<Jumbotron />
  <div class="row">
    <div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
    <div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
    <div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
    <div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
  </div>
</div>
					<MyFooter /></>
			);
		};

export default Home;
