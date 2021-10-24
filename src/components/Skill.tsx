import React from "react";
import styled from "styled-components";
import { flexCenter, flexCenterDir, color } from "../utils/theme";

// 이미지
import threeBIG from "../img/3대장.png";
import figma from "../img/figma.jpeg";
import git from "../img/git.png";
import github from "../img/github.png";
import next from "../img/Next.png";
import notion from "../img/Notion.png";
import react from "../img/React.png";
import redux from "../img/redux.png";
import styledComponent from "../img/styled-component.png";
import three from "../img/three.png";
import Typescript from "../img/Typescript.png";
import vercel from "../img/vercel.png";

const SkillBox = styled.li`
	background: ${color.dark};
	color: white;

	.item-box {
		${flexCenter}

		flex-wrap: wrap;
	}
`;

const SkillItem = styled.div`
	${flexCenterDir}

	width: 300px;
	background: white;
	padding: 1rem;
	color: black;
	border-radius: 2vh;
	margin: 2rem;

	&:hover {
		transform: translateY(-20px);
		transition-duration: 0.7s;
	}

	img {
		width: 40%;
		margin: 1rem;
	}
`;

const Skill = () => {
	return (
		<SkillBox className="skill">
			<h1 className="title">Skill</h1>
			<div className="item-box">
				<SkillItem>
					<h2>Front end</h2>
					<img src={threeBIG} />
					<img src={react} />
					<img src={redux} />
					<img src={styledComponent} />
					<img src={Typescript} />
					<img src={three} />
				</SkillItem>
				<SkillItem>
					<h2>Other</h2>
					<img src={git} />
					<img src={github} />
					<img src={figma} />
					<img src={notion} />
					<img src={next} />
					<img src={vercel} />
				</SkillItem>
			</div>
		</SkillBox>
	);
};

export default Skill;
