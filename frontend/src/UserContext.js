import React, {createContext} from 'react'

const MusicPlayerContext = createContext([{}, ()=>{}])

const MusicPlayerProvider = (props)=>{
    return(
        <MusicPlayerContext.Provider value={}>
        
        {props.children}

        </MusicPlayerContext.Provider>
    )
}

export {MusicPlayerContext, MusicPlayerProvider}