import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { login } from "../../API/user";
import NameInput from "./../../components/NameInput/NameInput";

import "./StartupScreen.css";

const StartupScreen = (props) => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const submitName = async () => {
        try {
            await login(name);
            props.history.push("/translation");
            return "success";
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="main">
            <main className="container pt-5">
                <NameInput submit={submitName} setName={setName} />
                {error ? <Alert variant="danger">{error}</Alert> : null}
            </main>
        </div>
    );
};

export default StartupScreen;
