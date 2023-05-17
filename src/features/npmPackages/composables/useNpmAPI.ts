const BASE_URL = 'https://registry.npmjs.org';

export function useNpmAPI() {
    async function searchPackages(query: string) {
        const response = await fetch(`${BASE_URL}/-/v1/search?text=${query}`);
        return await response.json();
    }

    return { searchPackages };
}
