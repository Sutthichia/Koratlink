import React, { createContext, useState, useContext } from 'react';

const FavoriteJobContext = createContext();

export const FavoriteJobProvider = ({ children }) => {
  const [favoriteJobs, setFavoriteJobs] = useState([]);

  const addFavoriteJob = (job) => {
    setFavoriteJobs(prevFavorites => [...prevFavorites, job]);
  };

  const removeFavoriteJob = (jobId) => {
    setFavoriteJobs(prevFavorites => prevFavorites.filter(job => job.id !== jobId));
  };

  return (
    <FavoriteJobContext.Provider value={{ favoriteJobs, addFavoriteJob, removeFavoriteJob }}>
      {children}
    </FavoriteJobContext.Provider>
  );
};

export const useFavoriteJobs = () => {
  return useContext(FavoriteJobContext);
};