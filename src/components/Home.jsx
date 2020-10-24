import React from 'react'

function Home(props) {
    return (
        <div>
            <button onClick={props.click}>Hace Click!</button>
        </div>
    )
}

export default Home;