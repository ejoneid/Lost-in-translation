import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import TranslationBox from "../../components/TranslationBox/TranslationBox";
import { useState } from "react";
import { submitOnEnter } from "../../utils/submitOnEnter";

import "./TranslationScreen.css";

const TranslationScreen = () => {
  const [toTranslate, setToTranslate] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleTranslateClick = () => {
    setToTranslate(inputValue);
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
            <Button
              onClick={handleTranslateClick}
              variant="primary"
              id="button-addon2"
            >
              translate
            </Button>
          </InputGroup>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <TranslationBox toTranslate={toTranslate} />
      </div>
    </main>
  );
}

export default TranslationScreen;
