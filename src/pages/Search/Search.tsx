import {
    ChangeEvent,
    ReactElement,
    useState,
} from "react";
import debounce from "lodash.debounce";

import {
    apiUtils,
} from "utils";

import styles from "./styles.module.scss";

interface ISearchResult {
    name: string,
    html_url: string,
    watcher_count: number,
    owner: {
        login: string,
        [key: string]: any,
    },
    [key: string]: any,
} // TODO: find a GitHub type for result

const Search = (): ReactElement => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [results, setResults] = useState<ISearchResult[]>([]);

    const handleChange = debounce(async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
        setIsLoading(true);
        
        const results = await apiUtils.searchRepositories({
            limit: 25,
            pageNumber: 1,
            search: event.target.value, 
        });
        
        setResults(results.items);
        setIsLoading(false);
    }, 500);

    return (
        <>
            <h2>Search Repositories</h2>
            <label htmlFor="searchRepos">
                Search
            </label>
            <input
                id="searchRepos"
                name="searchRepos"
                type="text"
                required
                autoFocus
                onChange={handleChange}
            />
            <table>
                <thead>
                    <tr>
                        <th>Repository Name</th>
                        <th>Author Name</th>
                        <th>Stars</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {results && results.map((result: ISearchResult, idx: number) => (
                        <tr key={idx}>
                            <td>{result?.name}</td>
                            <td>{result?.owner?.login}</td>
                            <td>{result?.watchers_count}</td>
                            <td>
                                <a
                                    href={result?.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Open in new tab
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isLoading && (
                <span>Loading...</span>
            )}
        </>
    );
}

export default Search;
