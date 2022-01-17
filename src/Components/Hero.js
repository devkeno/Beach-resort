import React from 'react'

export default function Hero({children,hero,title}) {
    return (
        <header className={hero}>
        <h1>{title}</h1>
            {children}
        </header>
    )
}


Hero.defaultProps={
    hero:"defaultHero"
}