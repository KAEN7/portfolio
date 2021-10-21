import React from "react";
import styled from "styled-components";
import { flexCenter, color } from "../utils/theme";

// 이미지
import name from "../img/name.svg";
import email from "../img/@.svg";
import birthday from "../img/birthday.svg";
import address from "../img/address.svg";

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
	}
`;

const About = () => {
	return (
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
	);
};

export default About;
