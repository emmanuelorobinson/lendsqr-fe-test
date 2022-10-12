import React from 'react'

import { User } from '../../../utils/localStorage'


interface Props {
  user: User | undefined;
}

const Body = ({user}: Props) => {
  return (
    <div>Body</div>
  )
}

export default Body