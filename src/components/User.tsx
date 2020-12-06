import React from 'react';
import styled from 'styled-components/macro';
import { Card, Followers } from '../components';

const User: React.FC = () => {
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Card />
        <Followers />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default User;
