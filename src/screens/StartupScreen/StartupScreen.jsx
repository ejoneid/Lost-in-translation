import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { login } from "../../API/user";
import NameInput from "./../../components/NameInput/NameInput";
import { NAME_KEY } from "./../../consts/LocalStorage";
import { useEffect } from "react";

import "./StartupScreen.css";

const StartupScreen = (props) => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const storedName = localStorage.getItem(NAME_KEY);
        if (storedName) {
            props.history.push("/translation");
        }
    });

    const submitName = async () => {
        try {
            await login(name);
            localStorage.setItem(NAME_KEY, name);
            props.history.push("/translation");
            return "success";
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="main">
            <main className="container center">
                <NameInput submit={submitName} setName={setName} />
                {error ? (
                    <Alert variant="danger" className="mt-4">
                        {error}
                    </Alert>
                ) : null}
            </main>
        </div>
    );
};

export default StartupScreen;
