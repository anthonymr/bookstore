import PropTypes from 'prop-types';
import Button from './Button';
import styles from '../styles/Book.module.css';

function Book({ title, author, id }) {
  return (
    <article className={styles.book}>
      <div className={styles['book-content']}>
        <div className={styles['book-info']}>
          <h4 className={styles['book-category']}>Action</h4>
          <h2 className={styles['book-title']}>{title}</h2>
          <h6 className={styles['book-author']}>{author}</h6>
          <div className={styles['action-buttons']}>
            <button className={styles['button-outline']} type="button">Comments</button>
            <div className={styles['vertical-divider']} />
            <Button className={styles['button-outline']} type="remove" id={id} />
            <div className={styles['vertical-divider']} />
            <button className={styles['button-outline']} type="button">Edit</button>
          </div>
        </div>
        <div className={styles['progress-container']}>
          <div className={styles['circular-progress-container']}>
            <div className={styles['circular-progress']} />
          </div>
          <div className={styles['progress-stat']}>
            <p className={styles['percent-complete']}>64%</p>
            <p className={styles.completed}>Completed</p>
          </div>
          <div className={styles['progress-divider']} />
          <div className={styles['current-chapter-container']}>
            <div>
              <p className={styles['current-chapter-label']}>CURRENT CHAPTER</p>
              <p className={styles['current-chapter']}>Chapter 17</p>
            </div>
            <div>
              <button className={styles['primary-button']} type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      </div>

      {/* <article className={styles['Lesson-Panel']}>
        <div className={styles.container}>
          <span className={styles['School-of']}>Action</span>
          <span className={`${styles.Title} ${styles['Text-Style-6']}`}>{title}</span>
          <span className={styles['Suzanne-Collins']}>{author}</span>
          <div className={styles.linksContainer}>
            <span className={styles.Comments}>Comments</span>
            <span className={styles['Line-2']} />
            <span className={styles.Remove}><Button type="remove" id={id} /></span>
            <span className={styles['Line-2']} />
            <span className={styles.Edit}>Edit</span>
          </div>
        </div>
        <div>
          <div className={styles['Rectangle-3']}>
            <div className={styles['Oval-2']} />
          </div>
        </div>
        <div>
          <span className={styles['-Percent-Complete']}> 64% </span>
          <span className={`${styles.Completed} ${styles['Text-Style-2']}`}> Completed </span>
        </div>
        <div>
          test
        </div>
        <div>
          test
        </div>
  </article> */}
    </article>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
