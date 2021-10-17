import React from "react";
import styled from "styled-components";
import { color } from "../utils/theme";
import { Link } from "react-router-dom";

const NavSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0;
	width: 100%;
	height: 10vh;
	box-sizing: border-box;
	padding: 1rem;
	box-shadow: 1px 1px 4px lightgray;
	background: white;
	z-index: 1;

	.logo {
		color: black;
		cursor: pointer;
		h1 {
			text-shadow: 2px 2px 5px lightgray;
			&:hover {
				text-shadow: 2px 2px 5px ${color.point};
			}
		}
	}
`;

const Nav = () => {
	return (
		<NavSection>
			<Link to="/" className="logo">
				<h1>LSH's Portfolio</h1>
			</Link>
			<></>
		</NavSection>
	);
};

export default Nav;
