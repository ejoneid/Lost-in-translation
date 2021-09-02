import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import TranslationBox from "../../components/TranslationBox/TranslationBox";
import { useState } from "react";
import { submitOnEnter } from "../../utils/submitOnEnter";
import { addTranslation } from "../../API/user";
import { useEffect } from "react";

import "./TranslationScreen.css";

const TranslationScreen = (props) => {
    const [toTranslate, setToTranslate] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [invalidInput, setInvalidInput] = useState(false);
    const { name } = props;

    useEffect(() => {
        if (!name) {
            props.history.push("/");
            return;
        }
    }, []);

    const handleTranslateClick = async () => {
        if (/[^a-zA-Z ]/.test(inputValue)) {
            setInvalidInput(true);
            return;
        }
        setToTranslate(inputValue);
        const response = await addTranslation(name, inputValue);
        console.log(response);
        setInvalidInput(false);
    };

    return (
        <main>
            <div id="inputArea">
                <div className="container">
                    <InputGroup className="pt-5">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => submitOnEnter(e.key, handleTranslateClick)}
                            size="lg"
                        />
                        <Button onClick={handleTranslateClick} variant="primary" id="button-addon2">
                            translate
                        </Button>
                    </InputGroup>
                    {invalidInput ? <p id="errorP">Can only translate letters</p> : null}
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <TranslationBox toTranslate={toTranslate} />
            </div>
        </main>
    );
};

export default TranslationScreen;
