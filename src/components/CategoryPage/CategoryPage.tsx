import React, { useContext, useState } from 'react';
import styles from './CategoryPage.module.scss';
import { ProductCard } from '../ProductCard';
import { Category } from '../../types/Category';
import { Loader } from '../Loader';
import { ProductContext } from '../ProductContext/ProductContext';
import { Product } from '../../types/Product';
import { CustomSelect } from '../CustomSelect/CuctomSelect';
import { SingleValue } from 'react-select';

type SelectOption = {
  value: string;
  label: string;
};

const optionsSortBy = [
  { value: 'newest', label: 'Newest' },
  { value: 'alphabetically', label: 'Alphabetically' },
  { value: 'cheapest', label: 'Cheapest' },
];
// const optionsItemsOnPage = [
//   { value: '4', label: '4' },
//   { value: '8', label: '8' },
//   { value: '16', label: '16' },
//   { value: 'all', label: 'All' },
// ];

type Props = {
  category: Category;
};

export const CategoryPage: React.FC<Props> = ({ category }) => {
  const { phones, tablets, accessories, isLoading } =
    useContext(ProductContext);

  const [selectedSortBy, setselectedSortBy] = useState<SelectOption>(
    optionsSortBy[0],
  );

  const handleChangeSortBy = (selected: SingleValue<SelectOption> | null) => {
    if (selected) {
      setselectedSortBy(selected);
    }
  };

  // const sortProducts = (products: Product[], sortBy: string) => {
  //   const productsCopy = [...products];

  //   switch (sortBy) {
  //     case 'newest':
  //       return productsCopy.sort((a, b) => a.year - b.year);
  //     case 'alphabetically':
  //       return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
  //     case 'cheapest':
  //       return productsCopy.sort((a, b) => a.price - b.price);
  //     default:
  //       return productsCopy;
  //   }
  // };

  const getTitle = (categoryName: Category) => {
    if (categoryName === Category.Phones) {
      return 'Mobile phones';
    }

    return categoryName;
  };

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

  // useEffect(() => {
  //   const sorted = sortProducts(productCategory, selectedSortBy.value);
  // }, [productCategory, selectedSortBy]);

  return (
    <div className={styles.category}>
      {isLoading && <Loader />}
      {!isLoading && productCategory.length > 0 && (
        <>
          <nav className={styles.nav}>
            <a href="#" className={styles.navHome}></a>
            <span className={styles.navCategory}>{category}</span>
          </nav>
          <h1 className={styles.title}>{getTitle(category)}</h1>
          <p
            className={styles.quantity}
          >{`${productCategory.length} models`}</p>
          <div className={styles.selects}>
            <div>
              <p className={styles.sortTitle}>Sort by</p>
              <div className={styles.selectSortBy}>
                <CustomSelect
                  options={optionsSortBy}
                  value={selectedSortBy}
                  onChange={handleChangeSortBy}
                />
              </div>
            </div>
            <div>
              <p className={styles.sortTitle}>Items on page</p>
              {/* <div className={styles.selectItemOnPage}>
                <CustomSelect
                  options={optionsItemsOnPage}
                  defaultValue={optionsItemsOnPage[0]}
                />
              </div> */}
            </div>
          </div>
          <main className={styles.container}>
            {productCategory.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </main>
        </>
      )}
    </div>
  );
};
