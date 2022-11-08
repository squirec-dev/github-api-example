import React from "react";

import styles from "./styles.module.scss";

const Search = (): React.ReactElement => {
    const handleChange = (query: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(query?.target?.value);
    };

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
            
        </>
    );
}

export default Search;
