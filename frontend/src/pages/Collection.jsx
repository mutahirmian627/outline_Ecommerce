import { useContext, useEffect, useState, useCallback } from 'react';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    setCategory(prev =>
      prev.includes(e.target.value)
        ? prev.filter(item => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const subToggleCategory = (e) => {
    setSubCategory(prev =>
      prev.includes(e.target.value)
        ? prev.filter(item => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  // Define applyFilter with useCallback
  const applyFilter = useCallback(() => {
    if (products.length === 0) return; // Wait until products are loaded

    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    // Set all products if no filters are applied
    if (category.length === 0 && subCategory.length === 0 && !showSearch) {
      productsCopy = [...products];
    }

    setFilterProducts(productsCopy);
  }, [category, subCategory, products, search, showSearch]);

  // Effect to apply filter whenever dependencies change
  useEffect(() => {
    applyFilter();
  }, [applyFilter]);

  // Effect to sort products based on sortType
  useEffect(() => {
    if (filterProducts.length === 0) return; // Skip sorting if no products are loaded

    const sortedProducts = [...filterProducts];
    switch (sortType) {
      case 'low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilterProducts(sortedProducts);
  }, [sortType, filterProducts]);

  if (products.length === 0) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  return (
    <div className='flex flex-col sm:flex-row gap-4 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Category filters */}
        <div className={`border border-gray-300 p-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light'>
            <label><input className='w-3' type="checkbox" value='Men' onChange={toggleCategory} /> Men</label>
            <label><input className='w-3' type="checkbox" value='Women' onChange={toggleCategory} /> Women</label>
            <label><input className='w-3' type="checkbox" value='Kids' onChange={toggleCategory} /> Kids</label>
          </div>
        </div>

        {/* Subcategory filters */}
        <div className={`border border-gray-300 p-5 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light'>
            <label><input className='w-3' type="checkbox" value='Topwear' onChange={subToggleCategory} /> Topwear</label>
            <label><input className='w-3' type="checkbox" value='Bottomwear' onChange={subToggleCategory} /> Bottomwear</label>
            <label><input className='w-3' type="checkbox" value='Winterwear' onChange={subToggleCategory} /> Winter Collection</label>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between items-center text-lg sm:text-2xl mb-4'>
          <Title text1="All" text2="COLLECTION" />
          <select
            className='border-2 border-gray-300 text-sm px-2'
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Sort by: relevant</option>
            <option value="low-high">Sort by: low to high</option>
            <option value="high-low">Sort by: high to low</option>
          </select>
        </div>

        {/* Map products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filterProducts.map((item, index) => (
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
