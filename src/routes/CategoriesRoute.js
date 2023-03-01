import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';
import styles from '../styles/Categories.module.css';

function CategoriesRoute() {
  const dispatch = useDispatch();
  const status = useSelector((status) => status.categories);

  return (
    <section className={styles.container}>
      <h1>{ typeof status === 'string' && status }</h1>
      <button className={styles['primary-button']} type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </section>
  );
}

export default CategoriesRoute;
