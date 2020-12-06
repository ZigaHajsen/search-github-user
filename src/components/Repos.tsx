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
    const { language } = item;

    if (!language) {
      return total;
    }

    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }

    return total;
  }, {});

  languages = Object.values(languages)
    .sort((a: any, b: any) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const charData = [
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
  ];

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie data={languages} />
        <Column />
        <Doughnut data={charData} />
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
