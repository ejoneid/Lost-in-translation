import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PageHeader from "./components/PageHeader/PageHeader";
import NotFound from "./screens/NotFound/NotFound";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import StartupScreen from "./screens/StartupScreen/StartupScreen";
import TranslationScreen from "./screens/TranslationScreen/TranslationScreen";
import { useState, useEffect } from "react";
import { NAME_KEY } from "./consts/LocalStorage";

function App() {
    const [name, setName] = useState("");

    useEffect(() => {
        const storedName = localStorage.getItem(NAME_KEY);
        if (!storedName) {
            return;
        }
        setName(storedName);
    }, []);

    return (
        <BrowserRouter>
            <PageHeader name={name} setName={setName} />
            <Switch>
                <Route
                    path="/"
                    exact
                    render={(props) => <StartupScreen {...props} name={name} setName={setName} />}
                />
                <Route
                    path="/translation"
                    render={(props) => <TranslationScreen {...props} name={name} />}
                />
                <Route
                    path="/profile"
                    render={(props) => <ProfileScreen {...props} name={name} />}
                />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
