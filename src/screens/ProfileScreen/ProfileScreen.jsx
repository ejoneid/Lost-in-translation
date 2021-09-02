import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { getTranslations, updateTranslations } from "../../API/user";
import { NAME_KEY } from "./../../consts/LocalStorage";

import "./ProfileScreen.css";

const ProfileScreen = (props) => {
    const { name } = props;
    const [translations, setTranslations] = useState([]);

    useEffect(() => {
        if (!name) {
            props.history.push("/");
            return;
        }

        const getPosts = async (name) => {
            const result = await getTranslations(name);
            setTranslations(result);
        };

        getPosts(name);
    }, []);

    const logout = () => {
        localStorage.removeItem(NAME_KEY);
        props.history.push("/");
    };

    const deletePost = async (postIndex) => {
        const newPosts = [...translations];
        newPosts.splice(postIndex, postIndex + 1);

        const response = await updateTranslations(name, newPosts);
        if (response.ok) {
            setTranslations(newPosts);
        }
    };

    return (
        <main className="container">
            <h2 className="mt-3">{name}</h2>
            <Button onClick={() => props.history.push("/translation")} variant="primary">
                Translate more
            </Button>
            <Button id="logoutBtn" onClick={logout} variant="primary">
                Log out
            </Button>

            <h4 className="mt-5">Previous translations</h4>
            {translations.map((translation, index) => (
                <div className="translationPost" key={index}>
                    <Button
                        onClick={() => deletePost(index)}
                        className="deleteBtn"
                        variant="danger"
                    >
                        Delete
                    </Button>
                    <p className="postP">{translation}</p>
                </div>
            ))}
        </main>
    );
};

export default ProfileScreen;
