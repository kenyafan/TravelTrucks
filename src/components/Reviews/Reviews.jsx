import styles from '../Reviews/Reviews.module.css';

const getLetterFromIndex = (index) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let letters = '';

  while (index >= 0) {
    letters = alphabet[index % 26] + letters;
    index = Math.floor(index / 26) - 1;
  }

  return letters;
};

const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  return (
    <div className={styles.reviewsContainer}>
      {reviews.map((reviews, index) => (
        <div key={index} className={styles.reviewWrapper}>
          <div className={styles.reviewHeaderWrapper}>
            <span className={styles.avatar}>{getLetterFromIndex(index)}</span>
            <div className={styles.reviewHeader}>
              <p className={styles.reviewerName}>{reviews.reviewer_name}</p>
              <div className={styles.rating}>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < reviews.reviewer_rating
                          ? styles.filledStar
                          : styles.emptyStar
                      }
                    >
                      ★
                    </span>
                  ))}
              </div>
            </div>
          </div>
          <p className={styles.comment}>{reviews.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
