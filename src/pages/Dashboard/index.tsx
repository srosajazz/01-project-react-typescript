import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Respositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repository on Github</Title>
      {/* Form */}
      <Form>
        <input placeholder="Type repository name" />
        <button type="submit">Search</button>
      </Form>
      {/* List */}
      <Respositories>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/42471460?s=460&u=d8266ec25d17d375e01ae625cb93b947c57451bd&v=4"
            alt="Sergio Rosa"
          />
          <div>
            <strong>Sergio Rosa</strong>
            <p>
              "Practice does not make perfect. Only perfect practice makes
              perfect."
            </p>
          </div>
          {/* icons -  > */}
           <FiChevronRight size={20} />
        </a>
        {/* 2 */}
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/42471460?s=460&u=d8266ec25d17d375e01ae625cb93b947c57451bd&v=4"
            alt="Sergio Rosa"
          />
          <div>
            <strong>Sergio Rosa</strong>
            <p>
              "Practice does not make perfect. Only perfect practice makes
              perfect."
            </p>
          </div>
          {/* icons -  > */}
           <FiChevronRight size={20} />
        </a>
        {/* 3 */}
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/42471460?s=460&u=d8266ec25d17d375e01ae625cb93b947c57451bd&v=4"
            alt="Sergio Rosa"
          />
          <div>
            <strong>Sergio Rosa</strong>
            <p>
              "Practice does not make perfect. Only perfect practice makes
              perfect."
            </p>
          </div>
          {/* icons -  > */}
           <FiChevronRight size={20} />
        </a>
      </Respositories>
    </>
  );
};

export default Dashboard;
