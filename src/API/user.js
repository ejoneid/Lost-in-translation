const PORT = 3001;
const URL = `http://localhost:${PORT}/users`;

export async function addUser(name) {
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, posts: [] }),
    });

    return response.json();
}

export async function getUser(name) {
    const response = await fetch(`${URL}?name=${name}`);
    return response.json();
}

export async function login(name) {
    const existingUser = await getUser(name);

    if (existingUser.length !== 0) {
        return existingUser[0];
    }

    const newUser = await addUser(name);
    return newUser;
}

export async function getTranslations(name) {
    const user = await getUser(name);
    // console.log(user);
    return user[0].posts;
}

export async function updateTranslations(name, newTranslations) {
    const user = await getUser(name);

    const response = await fetch(`${URL}/${user[0].id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ posts: newTranslations }),
    });

    return response;
}

export async function addTranslation(name, newTranslation) {
    const user = await getUser(name);
    const translations = user[0].posts;
    translations.push(newTranslation);

    const response = await fetch(`${URL}/${user[0].id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ posts: translations }),
    });

    return response;
}
