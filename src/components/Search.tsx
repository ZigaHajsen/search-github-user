import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { MdSearch } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { searchUserData } from '../redux/actions/userActions';
import { GithubRequestsModel, ErrorsModel } from '../models/interface-models';

interface RequestsState {
  githubRequests: GithubRequestsModel;
}

interface ErrorsState {
  errors: ErrorsModel;
}

const Search: React.FC = () => {
  const [user, setUser] = useState('');

  const githubRequests = useSelector(
    (state: RequestsState) => state.githubRequests
  );
  const errors = useSelector((state: ErrorsState) => state.errors);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user) {
      dispatch(searchUserData(user));
      setUser('');
    }
  };

  useEffect(() => {
    dispatch(searchUserData('ZigaHajsen'));
    // eslint-disable-next-line
  }, []);

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {errors.show === true && (
          <ErrorWrapper>
            <p>{errors.msg}</p>
          </ErrorWrapper>
        )}
        <Form onSubmit={handleSubmit}>
          <div className='form-control'>
            <MdSearch />
            <input
              type='text'
              placeholder='enter github user'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {githubRequests.remaining > 0 && (
              <button type='submit'>search</button>
            )}
          </div>
        </Form>
        <h3>
          requests: {githubRequests.remaining} / {githubRequests.limit}
        </h3>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;

    h3 {
      padding: 0 0.5rem;
    }
  }

  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`;

const Form = styled.form`
  .form-control {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;

    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
    }

    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }

    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;

      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }

    svg {
      color: var(--clr-grey-5);
    }

    input,
    button,
    svg {
      font-size: 1.3rem;
    }

    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
`;

const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;

  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;

export default Search;
