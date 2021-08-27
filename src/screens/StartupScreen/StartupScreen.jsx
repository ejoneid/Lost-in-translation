import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import './StartupScreen.css'
import { useState } from "react";
import { login } from "../../API/user";
import { submitOnEnter } from "../../utils/submitOnEnter";

function StartupScreen(props) {
  const [name, setName] = useState("")

  const submit = async () => {
    await login(name);
    props.history.push("/translation")
  }

  return (
    <main>
      <InputGroup className="mb-3">
        <FormControl
          aria-label="Default"
          placeholder="Enter your name"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setName(e.target.value)}
          onKeyPress={e => submitOnEnter(e.key, submit)}
        />
        <Button onClick={submit} variant="outline-primary" id="button-addon2">
          Next
        </Button>
      </InputGroup>
    </main>
  );
}

export default StartupScreen;
