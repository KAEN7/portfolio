import * as THREE from "three";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { color } from "../utils/theme";
import { Canvas, useFrame } from "@react-three/fiber";
//import {OrbitControls} from '@react-three/drei';

const ThreeSection = styled.div`
	width: 100%;
	height: 550px;
	background: ${color.dark};
`;

function Box(props: JSX.IntrinsicElements["mesh"]) {
	// This reference will give us direct access to the mesh
	const mesh = useRef<THREE.Mesh>(null!);
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	// Rotate mesh every frame, this is outside of React without overhead
	useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
		>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
		</mesh>
	);
}

const Three = () => {
	return (
		<ThreeSection>
			<Canvas>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Box position={[-1.5, 0, 0]} />
				<Box position={[1.5, 0, 0]} />
			</Canvas>
		</ThreeSection>
	);
};

export default Three;
