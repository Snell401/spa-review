import { useState } from 'react';

function Main() {

    const [user, setUser] = useState(null);

    function handleLogin () {
        alert ('Login successfull');
        setUser({id: 1, email: "some@example.com"});

    }

    if (!user) {
        return (
            <main style={{ padding: "1em"}}>
                <input type="email" name="email" placeholder="Email" />
                <br />
                <input type="password" name="password" placeholder="Password" />
                <br />
                <button style={{margin: "1em"}} onClick={handleLogin}>Login</button>
            </main>
        )
        }
        return (
            <main style={{ padding: "1em", color: "blue" }}>
                Main Here
            </main>
        )
    }

    export default Main