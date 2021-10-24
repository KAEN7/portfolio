import { css } from "styled-components";

// 기기 사이즈
export const size = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopM: "1240px",
	laptopL: "1440px",
	desktop: "2560px",
};

// 미디어 스타일
const theme = {
	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopM: `(max-width: ${size.laptopM})`,
	laptopL: `(max-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`,
};

// color
export const color = {
	dark: "#1a1a1a",
	point: "#ffe221",
	warring: "#ff5b4f",
};

// 스크롤
export const overflowing = css`
	overflow: auto;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		display: none;
	}
`;

// flex 디자인
export const flexCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const flexCenterDir = css`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const buttonStyle = css`
	${flexCenter}

	width: 10rem;
	height: 4rem;
	background: white;
	box-shadow: 2px 2px 2px darkgray;
	border-radius: 2vh;
	font-size: 2rem;
	color: ${color.point};
	text-shadow: 2px 2px 2px darkgray;
	margin-left: 2rem;

	&:hover {
		transform: translateY(-10px);
		transition-duration: 0.7s;
	}
`;

export default theme;
