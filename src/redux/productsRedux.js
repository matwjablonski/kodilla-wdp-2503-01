/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/*actions*/
const TOGGLE_FAVORITE = 'app/products/TOGGLE_FAVORITE';

/*actions creator*/
export const toggleFavorite = payload => ({ type: TOGGLE_FAVORITE, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      );
    default:
      return statePart;
  }
}
