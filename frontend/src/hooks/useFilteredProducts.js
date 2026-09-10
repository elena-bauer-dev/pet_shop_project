import { useSearchParams } from 'react-router-dom';

export function useFilteredProducts(source) {
  const [params] = useSearchParams();

  const from = Number(params.get('from')) || 0;
  const to = Number(params.get('to')) || Infinity;

  const onlyDiscounted = params.get('discounted') === 'true';
  const sort = params.get('sort') ?? 'default';

  // Цена со скидкой или обычная цена
  const getPrice = (p) => p.discont_price ?? p.price;

  // Все товары сначала фильтруем по цене
  let result = source.filter((p) => {
    const price = getPrice(p);

    return price >= from && price <= to;
  });

  // Если включен чекбокс Discounted items
  if (onlyDiscounted) {
    result = result.filter((p) => p.discont_price != null );
  }

  // Сначала дешёвые
  if (sort === 'price-low') {
    result = [...result].sort((a, b) => getPrice(a) - getPrice(b));
  }

  // Сначала дорогие
  if (sort === 'price-high') {
    result = [...result].sort((a, b) => getPrice(b) - getPrice(a));
  }

  // Сначала новые
  if (sort === 'newest') {
    result = [...result].sort((a, b) => b.id - a.id);
  }

  return result;
}
