
import React from "react";

//include images into your bundle
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Navbar } from "./Navbar.jsx";

//create your first component
let year = new Date().getFullYear();
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Jumbotron />
					</div>
				</div>
				<div className="row pb-5">
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://img.europapress.es/fotoweb/fotonoticia_20230419115440_690.jpg"
							cardTitle="Charles Darwin"
							cardDescription="Naturalista inglés (1809-1882), propuso la teoría de la evolución por selección natural, revolucionando la biología con su obra El origen de las especies."
							buttonUrl="https://en.wikipedia.org/wiki/Charles_Darwin"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://pymstatic.com/96478/conversions/Nikola-Tesla-default.jpg"
							cardTitle="Nikola Tesla"
							cardDescription="Inventor e ingeniero eléctrico (1856-1943), pionero en el desarrollo de la corriente alterna, radio, y tecnología inalámbrica. Contribuyó significativamente a la electrificación."
							buttonUrl="https://en.wikipedia.org/wiki/Nikola_Tesla"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/800px-Aristotle_Altemps_Inv8575.jpg"
							cardTitle="Aristoteles"
							cardDescription=" Filósofo griego (384-322 a.C.), estudiante de Platón y tutor de Alejandro Magno. Sus obras abarcan la ética, lógica, política, y ciencia, fundamentando el pensamiento occidental."
							buttonUrl="https://es.wikipedia.org/wiki/Arist%C3%B3teles"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://www.ngenespanol.com/wp-content/uploads/2023/07/Napoleon-Bonaparte.jpg"
							cardTitle="Napoleon Bonaparte"
							cardDescription="Militar y emperador francés (1769-1821), lideró reformas en Europa tras la Revolución Francesa. Conquistó gran parte de Europa antes de su caída."
							buttonUrl="https://es.wikipedia.org/wiki/Napole%C3%B3n_Bonaparte"
							buttonLabel="Go to Wikipedia"
						/>
					</div>

					
				</div>
			</div>
			<footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						Builded with ❤️ using React.js - {year}
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;
