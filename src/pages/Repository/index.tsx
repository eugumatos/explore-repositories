import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={LogoImg} alt="GitHub Explores" />
        <Link to="/dashboard">
          <FiChevronLeft size={16}/>
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src='https://avatars0.githubusercontent.com/u/47457583?s=460&u=06508422456c0aa9d4508131c8f8c1e5a2e1e1d3&v=4' />
            <div>
              <strong>rocketseat/unform</strong>
              <p>descrição do repositório</p>
            </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to='wcdg'>
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FiChevronRight  size={16}/>
        </Link>
      </Issues>
    </>
  );
};

export default Repository;