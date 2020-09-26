import React, { useState } from 'react';

type BookSearchContextProps = {
  searchResults: any[],
  totalResults: number,
  loading: boolean,
  search: () => void,
  loadMore: () => void,
};

const initialState = {
  searchResults: [],
  totalResults: 0,
  search: () => { },
  loadMore: () => { },
  loading: false
};

export const BookSearchContext = React.createContext<BookSearchContextProps>(initialState);

const API_BASE_URL = "https://www.googleapis.com/books/v1";

export const BookSearchContextProvider = (props) => {
  // This is a poor example of where to use the context API as there is not a deep component heirarchy. However this is a learning exercise so I've chosen to use it here to learn more about the API
  const [state, setState] = useState({
    results: [],
    totalResults: 0,
    term: '',
    loading: false
  });

  const search = async (term) => {
    if (state.loading) {
      return;
    }

    if(!term) {
      setState({
        results: [],
        totalResults: 0,
        term: '',
        loading: false,
      });
    }

    setState({
      ...state,
      loading: true,
    });

    const resp = await fetch(`${API_BASE_URL}/volumes?maxResults=20&q=${term}`);
    const data = await resp.json();

    const { items, totalItems } = data;
    
    setState({
      results: items,
      totalResults: totalItems,
      term,
      loading: false,
    });
  };

  const loadMore = async () => {
    if (state.loading) {
      return;
    }
    setState({
      ...state,
      loading: true,
    });
    const resp = await fetch(`${API_BASE_URL}/volumes?maxResults=20&q=${state.term}&startIndex=${state.results.length}`);
    const data = await resp.json();
    const { items } = data;
    setState({
      ...state,
      loading: false,
      results: [
        ...state.results,
        ...items
      ],
    });
  };

  return (
    <BookSearchContext.Provider value={{
      results: state.results,
      totalResults: state.totalResults,
      loading: state.loading,
      loadMore,
      search
    }}>
      { props.children}
    </BookSearchContext.Provider>
  );
}