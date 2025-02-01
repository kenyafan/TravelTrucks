import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../CamperCard/CamperCard.module.css';
import { Icon } from '../../image/Icon';

const CamperCard = ({ camper, favorites, toggleFavorite }) => {
  return (
    <div className={styles.card}>
      <img
        src={camper.gallery[0].original}
        alt={camper.name}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{camper.name}</h3>
          <span className={styles.cardPrice}>€{camper.price}</span>
          <button
            className={styles.favoriteButton}
            onClick={() => toggleFavorite(camper.id)}
          >
            <Icon
              id="icon-heart"
              width="24"
              height="24"
              className={`${styles.favoriteIcon} ${
                favorites.includes(camper.id) ? styles.filled : ''
              }`}
            />
          </button>
        </div>
        <div className={styles.cardRatingWrapper}>
          <div className={styles.cardRating}>
            <Icon
              id="icon-Rating"
              width="20"
              height="20"
              className={styles.iconRating}
            />
            <span className={styles.rating}>
              {camper.rating} (
              {Array.isArray(camper.reviews)
                ? camper.reviews.length
                : camper.reviews}{' '}
              Reviews)
            </span>
          </div>
          <div className={styles.cardLocationWrapper}>
            <Icon
              id="icon-Map"
              width="20"
              height="20"
              className={styles.icon}
            />
            <p className={styles.cardLocation}>{camper.location}</p>
          </div>
        </div>
        <p className={styles.cardDescription}>
          {camper.description.split(' ').slice(0, 8).join(' ')}...
        </p>
        <div className={styles.cardFeatures}>
          <span className={styles.feature}>
            <Icon id="icon-diagram" width="20" height="20" /> Automatic
          </span>
          <span className={styles.feature}>
            <Icon id="icon-Petrol" width="20" height="20" /> Petrol
          </span>
          <span className={styles.feature}>
            <Icon id="icon-cup-hot" width="20" height="20" /> Kitchen
          </span>
          <span className={styles.feature}>
            <Icon id="icon-wind" width="20" height="20" /> AC
          </span>
        </div>
        <Link to={`/catalog/${camper.id}`}>
          <button className={styles.button}>Show more</button>
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
