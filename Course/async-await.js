function getUserViaFetch() {
    return fetch('https://jsonplaceholder.typicode.com/users/1').then(response =>
        response.json()
    );
}

async function init() {
    const user = await getUserViaFetch();
    console.log('Got the user as: ', user);
}

init();