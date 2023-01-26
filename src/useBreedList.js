import { useState, useEffect } from 'react';

const localCache = {};

export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState('unloaded'); // loading state for webpage

    // useEffect is run whenever animal changes, useEffect changes the breed list
    // based on animal selected
    useEffect(() => {
        // if no animal selected, breed list is empty array
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) { 
            setBreedList(localCache[animal]);
        } else {
            requestBreedList();
        }

        async function requestBreedList() {
            setBreedList([]);
            setStatus('loading');
        
            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            );
            const json = await res.json();
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus('loaded');
        }
    }, [animal]);

    return [breedList, status];
}