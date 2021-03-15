import styled from "styled-components";

export const StyledDiv = styled.div`
	min-width: 100%;
	max-width: 100%;
	width: 100%;
	min-height: ${(props) => props.h};
	max-height: ${(props) => props.h};
	height: auto;
	overflow-x: ${(props) => (props.x === "hidden" ? "hidden" : "auto")};
	overflow-y: ${(props) => (props.y === "hidden" ? "hidden" : "auto")};

	::-webkit-scrollbar {
		width: 7px;
	}
	::-webkit-scrollbar-thumb {
		background: #555;
		border-radius: 5px;
	}
`;
