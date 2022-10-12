import React from 'react'
import { User } from '../../../utils/localStorage'

interface Props {
  user: User | undefined;
}

const Header = ({user}: Props ) => {
  return (
    <div>{user?.userName}</div>
  )
}

export default Header