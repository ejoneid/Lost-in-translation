import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { submitOnEnter } from "../../utils/submitOnEnter";
import { useState } from "react";

const NameInput = (props) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        setIsSubmitting(true);
        const result = await props.submit();
        if (!result) {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    variant="secondary"
                    aria-label="Default"
                    placeholder="What is your name?"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e) => props.setName(e.target.value)}
                    onKeyPress={(e) => submitOnEnter(e.key, submit)}
                    size="lg"
                />
                <Button onClick={submit} variant="outline-secondary" id="button-addon2">
                    {isSubmitting ? (
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                    ) : (
                        "Login"
                    )}
                </Button>
            </InputGroup>
        </div>
    );
};

export default NameInput;
