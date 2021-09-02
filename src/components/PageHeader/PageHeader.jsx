import { useHistory } from "react-router-dom";
import "./PageHeader.css";

const PageHeader = (props) => {
    const { name } = props;
    let history = useHistory();

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h1>Lost in translation</h1>
                    </div>
                    <div className="col-1  offset-6">
                        {name ? (
                            <svg
                                onClick={() => {
                                    history.push("/profile");
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="50"
                                fill="currentColor"
                                className="bi bi-person-circle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path
                                    fillRule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                                />
                            </svg>
                        ) : null}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PageHeader;
