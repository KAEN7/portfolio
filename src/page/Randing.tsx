import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { flexCenter, color, buttonStyle } from "../utils/theme";

const RandingSection = styled.div`
	@import "https://fonts.googleapis.com/css?family=Baloo+Paaji";

	width: 100vw;
	height: 100vh;
	font-family: "Baloo Paaji", cursive;
	background: ${color.dark};
	${flexCenter}

	.container {
		width: 400px;
		height: 220px;
		position: relative;
	}

	h1,
	h2 {
		font-size: 75px;
		text-transform: uppercase;

		span {
			width: 100%;
			float: left;
			color: #ffffff;
			-webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
			clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
			transform: translateY(-50px);
			opacity: 0;
			animation: titleAnimation ease 3s;
		}
	}
	h1 span {
		animation-delay: 0.6s;
		-webkit-animation-fill-mode: forwards;

		&:first-child {
			animation-delay: 0.7s;
		}

		&:last-child {
			color: ${color.point};
			animation-delay: 0.5s;
		}
	}

	h2 {
		top: 0;
		position: absolute;

		span {
			animation-delay: 4.1s;
			-webkit-animation-fill-mode: forwards;

			&:first-child {
				animation-delay: 4.2s;
			}

			&:last-child {
				color: ${color.point};
				animation-delay: 4s;
			}
		}
	}

	.usechrome {
		font-size: 10px;
		color: #fff;
		font-family: helvetica, arial;
		position: absolute;
		bottom: 20px;
		width: 100%;
		text-align: center;
		left: 0;
	}

	@keyframes titleAnimation {
		0% {
			transform: translateY(-50px);
			opacity: 0;
			-webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
			clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
		}
		20% {
			transform: translateY(0);
			opacity: 1;
			-webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
			clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
		}
		80% {
			transform: translateY(0);
			opacity: 1;
			-webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
			clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
		}
		100% {
			transform: translateY(50px);
			opacity: 0;
			-webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
			clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
		}
	}

	.startBtn {
		${buttonStyle}
	}
`;

const Randing = () => {
	return (
		<RandingSection>
			<section className="container">
				<h1 className="title">
					<span>안녕하세요</span>
					<span>찾아주셔서</span>
					<span>감사합니다</span>
				</h1>

				<h2 className="title">
					<span>Front-end</span>
					<span>developer</span>
					<span>이성훈입니다</span>
				</h2>
			</section>
			<Link to="/main" className="startBtn">
				Start
			</Link>
			<span className="usechrome">LSH's portfolio</span>
		</RandingSection>
	);
};

export default Randing;
