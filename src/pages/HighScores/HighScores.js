import useAllHighScores from "../../hooks/useAllHighScores";
import styled from "styled-components";
import bgImg from "../../assets/background.png";
import { useState } from "react";
import ScoreCard from "../../components/ScoreCard/ScoreCard";

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${bgImg});
  background-repeat: repeat;
  background-position: 0 0;
  background-size: auto 100%;
  /*adjust s value for speed*/
  animation: animatedBackground 500s linear infinite;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  color: #fff;
  font-size 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 25px;
`;

export default function HighScores() {
  // object destructuring
  const { allScores, deleteScore, isDeleting, updateScore } = useAllHighScores();

  return (
    <PageWrapper>
      <Header>Space Shooter Scores</Header>
      {allScores.map((score, i) => (
        <ScoreCard
          _id={score._id}
          score={score.score}
          name={score.name}
          deleteScore={deleteScore}
          isDeleting={isDeleting}
          updateScore={updateScore}
          key={i}
        />
      ))}
    </PageWrapper>
  );
}