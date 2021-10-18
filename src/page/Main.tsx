import React from "react";
import styled from "styled-components";
import { overflowing, flexCenter, flexCenterDir, color } from "../utils/theme";

// 컴포넌트
import Nav from "./Nav";
import Three from "../components/Three";
import About from "../components/About";
import Skill from "../components/Skill";
import Archive from "../components/Archive";
import Project from "../components/Project";

const MainSection = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	position: absolute;
	${overflowing}

	li {
		${flexCenterDir}

		justify-content: flex-start;
		min-width: 100%;
		/* min-height: 100vh; */
		padding: 1rem;
		box-sizing: border-box;
	}

	.title {
		margin-top: 2rem;
		text-shadow: 1px 1px 3px lightgray;

		&:hover {
			text-shadow: 2px 2px 5px ${color.point};
		}
	}
`;

const FirstBox = styled.li`
	color: white;
	background: ${color.dark};

	h2 {
		margin-top: 1rem;
	}

	span {
		color: white;
		text-align: center;
		margin-top: 2rem;
		padding: 3rem 0;
		border-top: 1px solid ${color.point};
		border-bottom: 1px solid ${color.point};
		line-height: 2;
	}
`;

const Main = () => {
	return (
		<MainSection>
			<Nav />
			<FirstBox>
				<h1 className="title">{`< 이성훈 />`}</h1>
				<h2>프론트엔드 포트폴리오</h2>
				<span>
					리액트에 매력을 느껴 코딩을 접하고 <br />
					자동화와 작은 컴포넌트를 만드는 재미로 코딩하고있는 <br />
					이성훈이라고 합니다
				</span>
				<Three />
			</FirstBox>
			<About />
			<Skill />
			<Archive />
			<Project />
			{/* <li>
				<h1 className="title">Career</h1>
			</li> */}
		</MainSection>
	);
};

export default Main;
