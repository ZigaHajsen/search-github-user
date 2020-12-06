import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { Bar, Column, Doughnut, Pie } from '../charts';
import { GithubReposModel } from '../models/interface-models';

interface ReposState {
  githubRepos: GithubReposModel[];
}

const Repos: React.FC = () => {
  const githubRepos = useSelector((state: ReposState) => state.githubRepos);

  let languages = githubRepos.reduce((total: any, item: GithubReposModel) => {
    const { language, stargazers_count } = item;

    if (!language) {
      return total;
    }

    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }

    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a: any, b: any) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const mostPopular = Object.values(languages)
    .sort((a: any, b: any) => {
      return b.stars - a.stars;
    })
    .map((item: any) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  /* const charData = [
    {
      label: 'HTML',
      value: '13',
    },
    {
      label: 'CSS',
      value: '160',
    },
    {
      label: 'JavaScript',
      value: '80',
    },
  ]; */

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie data={mostUsed} />
        <Column />
        <Doughnut data={mostPopular} />
        <Bar />
      </Wrapper>
    </section>
  );
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
