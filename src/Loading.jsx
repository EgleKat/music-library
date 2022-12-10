import React from "react";
import styled from "styled-components";

const LoadingDiv = styled.div`
  @keyframes dots {
    0%,
    20% {
      color: rgba(0, 0, 0, 0);
      text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
    }
    40% {
      color: black;
      text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
    }
    60% {
      text-shadow: 0.25em 0 0 black, 0.5em 0 0 rgba(0, 0, 0, 0);
    }
    80%,
    100% {
      text-shadow: 0.25em 0 0 black, 0.5em 0 0 black;
    }
  }
  .loading:after {
    content: " .";
    animation: dots 1s steps(5, end) infinite;
  }
`;

export default function Loading() {
  return (
    <LoadingDiv>
      <div className="loading">Loading</div>
    </LoadingDiv>
  );
}
