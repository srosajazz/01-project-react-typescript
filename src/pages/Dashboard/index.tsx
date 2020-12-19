/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect, FormEvent } from 'react';
import logoImg from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import api from '../../services/api';
import Repository from '../repository/index';
import { Title, Form, Repositories, Error } from './styles';

/**
 * todo: Interfaces Data from -> https://api.github.com/repos/srosajazz/EnsHelpConnector
 */
// eslint-disable-next-line @typescript-eslint/no-redeclare
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  //todo: Create a state only to save the input in the form
  const [newRepo, setNewRepo] = useState('');

  const [inputError, setInputError] = useState('');

  const [repositories, setRepositories] = useState(() => {
    const storageRepositories = localStorage.getItem('@Github:respositories');

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@Github:respositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(e) {
    e.preventDefault();

    if (!newRepo) {
      return setInputError('Digite o autor/nome do repositório.');
    }

    try {
      const { data } = await api.get(`/repos/${newRepo}`);

      setRepositories([...repositories, data]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      return setInputError('Erro ao buscar este repositório.');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repository on Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Type repository name"
        />
        <button type="submit">Search</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(
          (repository: { 
            id: string | number | null | string;
            owner: { avatar_url: string | string };
            full_name: React.ReactNode;
            description: React.ReactNode;
          }) => (
            <Link key={repository.id} to={'/repository'}>
              <img
                src={repository.owner.avatar_url}
                alt={`repositories/>${repository.full_name}`}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={20} />
            </Link>
          ),
        )}
      </Repositories>
    </>
  );
};

export default Dashboard;
