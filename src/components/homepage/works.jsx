import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./tatatechnologies.com.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Tata Technologies</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>


						<div className="work">
							<img
								src=".\codingninjas_logo.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Coding Ninjas</div>
							<div className="work-subtitle">
							Teaching Assistant
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>


						<div className="work">
							<img
								src=".\highradius_logo.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">HighRadius</div>
							<div className="work-subtitle">
							Software Tester
							</div>
							<div className="work-duration">Jun 2022 - Sep 2022 </div>
						</div>


						<div className="work">
							<img
								src=".\highradius_logo.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">HighRadius</div>
							<div className="work-subtitle">
							Winter Intern(AI/ML)
							</div>
							<div className="work-duration">Jan 2022 - Apr 2022</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
