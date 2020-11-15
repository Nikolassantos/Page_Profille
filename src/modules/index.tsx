import React, { createElement } from 'react'
import { IViewProps } from './types'
import Login from '../pages/index'

function UsersListContainer(): JSX.Element {
  const name = ''
  const signInBtn = document.querySelector('#sign-in-btn')
  const signUpBtn = document.querySelector('#sign-up-btn')
  const container = document.querySelector('.container')

  signUpBtn.addEventListener('click', () => {
    container.classList.add('sign-up-mode')
  })

  signInBtn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode')
  })

  const viewProps: IViewProps = {
    name: name
  }

  return createElement(Login, viewProps)
}

export default UsersListContainer
