import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import { GithubUserModel } from '../models/interface-models';

interface UserState {
  githubUser: GithubUserModel;
}

const Card: React.FC = () => {
  const githubUser = useSelector((state: UserState) => state.githubUser);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;

  return (
    <Wrapper>
      <Header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || 'no twitter'}</p>
        </div>
        <a href={html_url}>follow</a>
      </Header>
      <Bio>{bio}</Bio>
      <Links>
        <p>
          <MdBusiness /> {company || 'no business'}
        </p>
        <p>
          <MdLocationOn /> {location || 'no location'}
        </p>
        <a href={`https://${blog}`}>
          <MdLink /> {blog || 'no blog'}
        </a>
      </Links>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;

  &::before {
    content: 'user';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 1rem;

  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }

  h4 {
    margin-bottom: 0.25rem;
  }

  p {
    margin-bottom: 0;
  }

  a {
    color: var(--clr-primary-5);
    border: 1px solid var(--clr-primary-5);
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    cursor: pointer;

    &:hover {
      background: var(--clr-primary-5);
      color: var(--clr-white);
    }
  }
`;

const Bio = styled.p`
  color: var(--clr-grey-3);
`;

const Links = styled.div`
  p,
  a {
    margin-bottom: 0.25rem;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
      font-size: 1.3rem;
    }
  }

  a {
    color: var(--clr-primary-5);
    transition: var(--transition);

    svg {
      color: var(--clr-grey-5);
    }

    &:hover {
      color: var(--clr-primary-3);
    }
  }
`;

export default Card;
