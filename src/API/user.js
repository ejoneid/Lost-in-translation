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
  
  return response.json()
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
