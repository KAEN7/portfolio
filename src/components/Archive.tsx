import React from "react";
import styled from "styled-components";
import { flexCenter, flexCenterDir } from "../utils/theme";

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

	a {
		color: gray;
	}
`;

const Archive = () => {
	return (
		<ArchiveBox>
			<h1 className="title">Archive</h1>
			<div className="item-box">
				<ArchiveItem>
					<h2>Github</h2>
					<a href="https://github.com/KAEN7">github.com/KAEN7</a>
				</ArchiveItem>
				<ArchiveItem>
					<h2>velog</h2>
					<a href="https://velog.io/@kusdsuna">velog.io/@kusdsuna</a>
				</ArchiveItem>
				<ArchiveItem>
					<h2>Github blog</h2>
					<a href="https://kaen7.github.io/">kaen7.github.io</a>
				</ArchiveItem>
			</div>
		</ArchiveBox>
	);
};

export default Archive;
