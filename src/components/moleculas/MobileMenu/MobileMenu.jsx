import React from 'react'

export const MobileMenu = ({isOpen , onDismiss}) => {

    if(!isOpen){
        return null;
    }

  return (
    <>
      <div>
        <button onClick={onDismiss}>Dismiss Menu</button>
        <nav>
            <a>Characters</a>
            <a>Blatle Mode</a>
        </nav>
      </div>
    </>
  )
}

