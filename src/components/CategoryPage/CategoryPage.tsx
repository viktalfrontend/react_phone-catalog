import { useParams, useSearchParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import styles from './CategoryPage.module.scss';
import { sortProducts } from '../../services/getSortFunction';
import { ProductCard } from '../ProductCard';
import { Category } from '../../types/Category';
import { Loader } from '../Loader';
import { ProductContext } from '../ProductContext/ProductContext';
import { Product } from '../../types/Product';
import { CustomSelect } from '../CustomSelect/CuctomSelect';
import { SingleValue } from 'react-select';
import { Pagination } from '../Pagination/Pagination';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

type SelectOption = {
  value: string;
  label: string;
  param: string;
};

const titles = [
  { category: Category.Phones, title: 'Mobile phone' },
  { category: Category.Tablets, title: 'Tablets' },
  { category: Category.Accessories, title: 'Accessories' },
];

const optionsSortBy = [
  { value: 'newest', label: 'Newest', param: 'age' },
  { value: 'alphabetically', label: 'Alphabetically', param: 'name' },
  { value: 'cheapest', label: 'Cheapest', param: 'price' },
];

const optionsItemsOnPage = [
  { value: '4', label: '4', param: 'perPage' },
  { value: '8', label: '8', param: 'perPage' },
  { value: '16', label: '16', param: 'perPage' },
  { value: 'all', label: 'All', param: 'perPage' },
];

export const CategoryPage = () => {
  const { phones, tablets, accessories, loading, errorMessadge, reload } =
    useContext(ProductContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams();

  useEffect(() => {
    if (!searchParams.has('sort')) {
      setSearchParams({ sort: optionsSortBy[0].param });
    }
  }, [searchParams, setSearchParams]);

  const sortBy = searchParams.get('sort') || optionsSortBy[0].param;
  const selectedOption =
    optionsSortBy.find(option => option.param === sortBy) || optionsSortBy[0];

  const itemsPerPage = searchParams.get('perPage') || 'all';
  const selectedItems =
    optionsItemsOnPage.find(option => option.value === itemsPerPage) ||
    optionsItemsOnPage[3];
  const currentPage = +(searchParams.get('page') || '1');

  const categoryTitle = titles.find(item => item.category === category);

  let productCategory: Product[] = [];

  switch (category) {
    case Category.Phones:
      productCategory = phones;
      break;
    case Category.Tablets:
      productCategory = tablets;
      break;
    case Category.Accessories:
      productCategory = accessories;
      break;
    default:
      break;
  }

  const handleChangeSortBy = (selected: SingleValue<SelectOption> | null) => {
    if (selected) {
      const newParams = new URLSearchParams(searchParams);

      newParams.set('sort', selected.param);
      setSearchParams(newParams);
    }
  };

  const handleChangeItemOnPage = (
    selected: SingleValue<SelectOption> | null,
  ) => {
    if (selected) {
      const newParams = new URLSearchParams(searchParams);

      newParams.set('perPage', selected.value);
      newParams.set('page', '1');

      setSearchParams(newParams);
    }
  };

  const handlePageChange = (page: number) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set('page', page.toString());
    setSearchParams(newParams);
  };

  const sortedProducts = sortProducts(productCategory, sortBy);

  const numberItemsPerPage =
    itemsPerPage === 'all' ? sortedProducts.length : +itemsPerPage;
  const startIndex = (currentPage - 1) * numberItemsPerPage;
  const endIndex = startIndex + numberItemsPerPage;
  const visibleProducts = sortedProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sortedProducts.length / numberItemsPerPage);

  return (
    <div className={styles.category}>
      {loading && <Loader />}

      {!loading && productCategory.length > 0 && (
        <>
          <Breadcrumbs category={category || ''} />

          {categoryTitle && (
            <h1 className={styles.title}>{categoryTitle.title}</h1>
          )}
          <p
            className={styles.quantity}
          >{`${productCategory.length} models`}</p>
          <div className={styles.selects}>
            <div>
              <p className={styles.sortTitle}>Sort by</p>
              <div className={styles.selectSortBy}>
                <CustomSelect
                  options={optionsSortBy}
                  value={selectedOption}
                  onChange={handleChangeSortBy}
                />
              </div>
            </div>
            <div>
              <p className={styles.sortTitle}>Items on page</p>
              <div className={styles.selectItemOnPage}>
                <CustomSelect
                  options={optionsItemsOnPage}
                  value={selectedItems}
                  onChange={handleChangeItemOnPage}
                />
              </div>
            </div>
          </div>
          <main className={styles.container}>
            {visibleProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </main>
          {itemsPerPage !== 'all' && (
            <div className={styles.pagination}>
              <Pagination
                total={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      )}

      {!loading && !errorMessadge && productCategory.length === 0 && (
        <p>There are no {category} yet</p>
      )}

      {errorMessadge && (
        <>
          <p>{errorMessadge}</p>
          <button onClick={reload}>reload</button>
        </>
      )}
    </div>
  );
};
