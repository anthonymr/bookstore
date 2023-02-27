import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

function CategoriesRoute() {
  const dispatch = useDispatch();
  const status = useSelector((status) => status.categories);

  return (
    <section>
      <span>{ typeof status === 'string' && status }</span>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </section>
  );
}

export default CategoriesRoute;
