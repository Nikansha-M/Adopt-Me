const fetchBreedList = async ({ queryKey }) => {
    const animal = queryKey[1];

    // if no animal return an empty array
    if (!animal) return [];

    const apiRes = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)

    // if api response is not ok, throw an error message
    if (!apiRes.ok) {
        throw new Error(`breeds/${animal} fetch not ok`);
    }

    return apiRes.json();
};

export default fetchBreedList;