import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import TranslationBox from "../../components/TranslationBox/TranslationBox";
import { useState } from "react";

function TranslationScreen() {
  const [toTranslate, setToTranslate] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleTranslateClick = () => {
      setToTranslate(inputValue)
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={e => setInputValue(e.target.value)}
        />
        <Button onClick={handleTranslateClick} variant="outline-primary" id="button-addon2">
          translate
        </Button>
      </InputGroup>

      <TranslationBox toTranslate={toTranslate} />
    </div>
  );
}

export default TranslationScreen;
