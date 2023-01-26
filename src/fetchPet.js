const fetchPet = async ({ queryKey }) => {
    const id = queryKey[1];

    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)

    // if api response is not ok, throw an error message
    if (!apiRes.ok) {
        throw new Error(`details/${id} fetch not ok`);
    }

    return apiRes.json();
};

export default fetchPet;