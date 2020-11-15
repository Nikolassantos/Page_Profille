import styled from 'styled-components'
import theme from '../theme'

export const Container = styled.div`
  .container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: ${theme.colors.background};
    overflow: hidden;
  }
  .container:before {
    content: '';
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #4481eb, #04befe);
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
  }

  .forms-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .signin-signup {
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    width: 50%;
    display: grid;
    grid-template-columns: 1fr;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 5rem;
    overflow: hidden;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .sign-in-form {
    z-index: 1;
    opacity: 0;
  }
  .sign-up-form {
    z-index: 2;
  }
  .title {
    font-size: 2.2rem;
    color: #444;
    margin-bottom: 10px;
  }
  .input-field {
    max-width: 380px;
    width: 100%;
    height: 55px;
    background-color: #f0f0f0;
    margin: 10px 0;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 0.4rem;
  }

  .input-field i {
    text-align: center;
    line-height: 55px;
    color: #acacac;
    font-size: 1.1rem;
  }
  .input-field input {
    background: none;
    outline: none;
    border: none;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
  }
  .input-field input::placeholder {
    color: #aaa;
    font-weight: 500;
  }

  .btn {
    width: 150px;
    height: 49px;
    border: none;
    outline: none;
    border-radius: 49px;
    cursor: pointer;
    background-color: #5995fd;
    color: #fff;
    font-weight: 600;
    margin: 10px 0;
    transition: 0.5s;
  }

  .btn:hover {
    background-color: #4d84e2;
  }
  .social-text {
    padding: 0.7rem 0;
    font-size: 1rem;
    font-family: 'Poppins';
  }
  .social-media {
    display: flex;
    justify-content: center;
  }
  .social-icon {
    height: 46px;
    width: 46px;
    border: 1px solid #333;
    margin: 0 0.45rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
    border-radius: 50%;
    transition: 0.3s;
  }
  .social-icon:hover {
    color: #4481eb;
    border-color: #4481eb;
  }
  .panels-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .image {
  }
`
