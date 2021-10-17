import React from "react";
import styled from "styled-components";
import { overflowing, flexCenter, flexCenterDir, color } from "../utils/theme";
import Three from "../components/Three";
import Nav from "./Nav";

// 이미지
import name from "../img/name.svg";
import email from "../img/@.svg";
import birthday from "../img/birthday.svg";
import address from "../img/address.svg";

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
		min-height: 100vh;
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

const AboutBox = styled.li`
	${flexCenter}

	.item-box {
		${flexCenter}

		flex-wrap: wrap;
	}

	.title {
		margin-bottom: 3rem;
	}
`;

const AboutItem = styled.div`
	display: flex;
	width: 250px;
	height: 80px;
	margin: 3rem;
	padding: 1rem;
	border-radius: 2vh;
	box-shadow: 5px 5px 5px 2px lightgray;

	&:hover {
		transform: translateY(15px);
		transition-duration: 0.7s;
	}

	.imgbox {
		min-width: 80px;
		min-height: 80px;
		width: 80px;
		height: 80px;
		margin-right: 1rem;
	}

	img {
		width: 100%;
		height: 100%;
	}

	.item {
		display: flex;
		flex-direction: column;
		justify-content: center;

		span {
			text-align: left;
			font-size: 1rem;
		}
	}

	.sub-title {
		font-weight: bold;
		margin-bottom: 1rem;

		&:hover {
			border-bottom: 4px solid ${color.point};
		}
	}
`;

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
`;

const ArchiveBox = styled.li`
	.item-box {
		${flexCenter}

		flex-wrap: wrap;
	}
`;

const ArchiveItem = styled.div`
	${flexCenterDir}

	width: 300px;
	background: white;
	padding: 1rem;
	color: black;
	border-radius: 2vh;
	margin: 2rem;
	box-shadow: 5px 5px 5px lightgray;

	&:hover {
		transform: translateY(-20px);
		transition-duration: 0.7s;
	}
`;

const ProjectBox = styled.li`
	background: #1e90ff;
`;

const ProjectItem = styled.div`
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
			<AboutBox>
				<h1 className="title">About</h1>
				<div className="item-box">
					{[
						{ img: name, title: "이름", description: "이성훈" },
						{ img: email, title: "이메일", description: "kusdsuna@naver.com" },
						{ img: birthday, title: "생년월일", description: "96. 02. 26" },
						{ img: address, title: "주소", description: "경기도 의왕" },
					].map((el) => {
						return (
							<AboutItem>
								<div className="imgbox">
									<img src={el.img} alt="img" />
								</div>
								<div className="item">
									<span className="sub-title">{el.title}</span>
									<span>{el.description}</span>
								</div>
							</AboutItem>
						);
					})}
				</div>
			</AboutBox>
			<SkillBox>
				<h1 className="title">Skill</h1>
				<div className="item-box">
					<SkillItem>
						<h2>Front end</h2>
						React, HTML5, CSS3, JavaScript, TypeScript, Styled-components,
						Next.js
					</SkillItem>
					<SkillItem>
						<h2>other</h2>
						Git, Github, Notion, Figma, Vercel
					</SkillItem>
				</div>
			</SkillBox>
			<ArchiveBox>
				<h1 className="title">Archive</h1>
				<div className="item-box">
					<ArchiveItem>
						<h2>Github</h2>
					</ArchiveItem>
					<ArchiveItem>
						<h2>velog</h2>
					</ArchiveItem>
				</div>
			</ArchiveBox>
			<ProjectBox>
				<h1 className="title">Project</h1>
				<div className="item-box">
					<ProjectItem>
						<h2>프로젝트명</h2>
					</ProjectItem>
				</div>
			</ProjectBox>
			{/* <li>
				<h1 className="title">Career</h1>
			</li> */}
		</MainSection>
	);
};

export default Main;
