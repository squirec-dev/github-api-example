interface ISearchResult {
    items: [],
    [key: string]: any,
} // TODO: find a GitHub type for result, Promise<ISearchResult[]>

type TQuery = {
    limit?: number,
    pageNumber?: number,
    search?: string, 
}

const searchRepositories = async (query: TQuery): Promise<any> => {
    if (!query) {
        return [];
    }
  
    try {
        const data = await fetch(`${
            process.env.REACT_APP_GITHUB_API_URL
        }/search/repositories?q=${query.search}+sort=stars&order=desc&per_page=${query.limit}&page=${query.pageNumber}`);
        const result = await data.json();
        
        if (!result) {
          return [];
        }

        return result;
    } catch (err) {
        console.error(err);
        return [];
    }
};

export {
    searchRepositories,
};
