import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { Bar, Column, Doughnut, Pie } from '../charts';
import { GithubReposModel } from '../models/interface-models';

interface ReposState {
  githubRepos: GithubReposModel;
}

const Repos: React.FC = () => {
  const githubRepos = useSelector((state: ReposState) => state.githubRepos);

  return <div>Repos</div>;
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }

  .fusioncharts-container {
    width: 100% !important;
  }

  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
