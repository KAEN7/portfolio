import React from "react";
import styled from "styled-components";
import { flexCenterDir, color } from "../utils/theme";

// 이미지
import heiss from "../img/heiss.gif";
import worsca from "../img/worsca.gif";

const ProjectBox = styled.li`
	background: #1e90ff;
`;

const ProjectItem = styled.div`
	${flexCenterDir}

	width: 50rem;
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
		width: 100%;
		margin: 1rem;
	}

	span {
		min-width: 100%;
		min-height: 0.5rem;
		margin: 1rem;
	}

	a {
		font-weight: bold;
		color: black;
		text-shadow: 3px 3px 3px ${color.point};
	}
`;

const Project: React.FC = () => {
	return (
		<ProjectBox>
			<h1 className="title">Project</h1>
			<div className="item-box">
				<ProjectItem>
					<h2>Heiss</h2>
					<h3>코드스테이츠 파이널 프로젝트 (4인 / 5주)</h3>

					<img src={heiss} alt="heiss" />

					<span>♟ Notion을 이용한 프로젝트 기획 및 개발 현황 관리</span>
					<span>♟ Figma를 이용한 설계 및 애니메이션과 전체적인 디자인</span>
					<span>♟ Fabric으로 메인기능인 케이스 제작 기능 구현</span>
					<span>♟ theme.js를 통한 CSS 코드 리팩토링</span>
					<span>♟ 보관함, 장바구니, 주문내역 axios 구현</span>

					<div>
						<a href="https://heiss.shop">[배포 링크]</a>
						<a href="https://github.com/codestates/Heiss">[깃헙 레포]</a>
						<a href="https://www.notion.so/bece4b8f21a5477586a7c6b64073aee1">
							[기획서]
						</a>
						<a href="https://velog.io/@kusdsuna/%ED%8C%8C%EC%9D%B4%EB%84%90-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0">
							[회고]
						</a>
					</div>
				</ProjectItem>
				<ProjectItem>
					<h2>Worsca</h2>
					<h3>코드스테이츠 퍼스트 프로젝트 (4인 / 2주)</h3>

					<img src={worsca} alt="worsca" />

					<span>♟ Notion을 이용한 프로젝트 기획 및 개발 현황 관리</span>
					<span>♟ Figma를 이용한 설계 및 애니메이션과 전체적인 디자인</span>
					<span>♟ AWS 배포</span>
					<span>♟ 카카오 지도 API 구현</span>
					<span>♟ 마이페이지 및 유저 axios 구현</span>
					<span>♟ 카페 목록 및 카페 모달 구현</span>

					<div>
						<a href="https:// worsca.s3-website.ap-northeast-2.amazonaws.com">
							[배포 링크]
						</a>
						<a href="https://github.com/codestates/worsca">[깃헙 레포]</a>
						<a href="https:// www.notion.so/Worsca-3f28f92d851f43f9a991240b82726710">
							[기획서]
						</a>
						<a href="https://velog.io/@kusdsuna/First-Project-%ED%9B%84%EA%B8%B0">
							[회고]
						</a>
					</div>
				</ProjectItem>
			</div>
		</ProjectBox>
	);
};

export default Project;
