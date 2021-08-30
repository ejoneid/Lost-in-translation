import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PageHeader from "./components/PageHeader/PageHeader";
import NotFound from "./screens/NotFound/NotFound";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import StartupScreen from "./screens/StartupScreen/StartupScreen";
import TranslationScreen from "./screens/TranslationScreen/TranslationScreen";

function App() {
    return (
        <BrowserRouter>
            <PageHeader />
            <Switch>
                <Route path="/" exact component={StartupScreen} />
                <Route path="/translation" component={TranslationScreen} />
                <Route path="/profile" component={ProfileScreen} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
