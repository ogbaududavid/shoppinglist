import React from 'react'


const Footer = ({length}) => {
  return (
    <footer>
        <p>You have {length} {length > 1? ("items") : ("item")} in your shopping list </p>
    </footer>
  )
}

export default Footer



