import React from 'react'

const LinkText = ({name}) => {
  return (
    <div className=" text-link-text text-lg font-bold hover:underline cursor-pointer ">{name}</div>
  )
}

export default LinkText