import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import './StartupScreen.css'

function StartupScreen() {
  return (
    <main>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <Button variant="outline-secondary" id="button-addon2">
          commit
        </Button>
      </InputGroup>
    </main>
  );
}

export default StartupScreen;
