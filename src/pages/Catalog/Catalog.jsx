import React, { useEffect, useState } from 'react';
import styles from '../../pages/Catalog/Catalog.module.css';
import { fetchCampers } from '../../utils/api';
import CamperCard from '../../components/CamperCard/CamperCard';
import Filters from '../../components/Filters/Filters';
import Loader from '../../components/Loader/Loader';

const ITEMS_PER_PAGE = 5;

const Catalog = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setPage(1);
    setCampers([]);
    setHasMore(true);
  }, [filters]);

  useEffect(() => {
    const getCampers = async () => {
      setLoading(true);
      try {
        const data = await fetchCampers(filters, page);

        setCampers((prev) => {
          const newCampers = [...prev, ...data];
          const uniqueCampers = Array.from(
            new Map(newCampers.map((camper) => [camper.id, camper])).values(),
          );
          return uniqueCampers;
        });

        if (data.length === ITEMS_PER_PAGE) {
          const nextPageData = await fetchCampers(filters, page + 1);
          setHasMore(nextPageData.length > 0);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Помилка:', error);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    };

    getCampers();
  }, [filters, page]);

  const handleLoadMore = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleToggleFavorite = (camperId) => {
    const updatedFavorites = favorites.includes(camperId)
      ? favorites.filter((id) => id !== camperId)
      : [...favorites, camperId];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className={styles.catalogContainer}>
      <div className={styles.filtersContainer}>
        <Filters onApplyFilters={setFilters} />
      </div>

      <div className={styles.grid}>
        {loading && <Loader />}
        {campers.length > 0
          ? campers.map((camper) => (
              <CamperCard
                key={camper.id}
                camper={camper}
                favorites={favorites}
                toggleFavorite={handleToggleFavorite}
              />
            ))
          : !loading && <p>Кемпери не знайдені</p>}
        <div className={styles.buttonContainer}>
          {hasMore && !loading && (
            <button className={styles.button} onClick={handleLoadMore}>
              Load more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
