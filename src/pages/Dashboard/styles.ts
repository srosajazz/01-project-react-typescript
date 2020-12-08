import styled from 'styled-components';
import { shade } from 'polished';
import Repository from '../repository/index';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 480px;
  line-height: 56px;
  margin-top: 80px;
`;

// Form
export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  // make sure stay side by side
  display: flex;

  //input - > search box size
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    background-color: #fff;
    border: 2px solid #fff;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0px;
    color: #fff;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Respositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    //smoth the hover effect
    transition: transform 0.2s;
    //hover effect
    &:hover {
      transform: translateX(10px);
    }

    //Space multiple div's:
    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      P {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    /* style > icon to the end of the div. */
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
