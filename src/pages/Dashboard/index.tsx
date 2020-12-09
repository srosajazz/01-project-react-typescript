/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, FormEvent } from 'react';
import logoImg from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import Repository from '../repository/index';
import { Title, Form, Repositories } from './styles';

/**
 * todo: Interfaces Data from -> https://api.github.com/repos/srosajazz/EnsHelpConnector
 */
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

  //todo: useState([]) - > Save the repository in same place.
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // todo: fuction to add repositories
  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    /**
     * todo - Save new repositorie inside of state
     * todo - Add new repository
     * todo - consume github API
     * todo:  Call api.ts*/
    const response = await api.get<Repository>(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    // ! clear the input
    setNewRepo('');
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repository on Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Type repository name"
        />
        <button type="submit">Search</button>
      </Form>
      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="test">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
             <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
