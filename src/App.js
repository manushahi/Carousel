import React, { useState, useEffect } from 'react';
import { giftFor as defaultGiftFor, categories, priceConst } from './utils/constants';
import { productList as defaultProductList } from './utils/constants'
import './App.css'
import ProductListNew from './Components/ProductListNew';

function App() {
  const [productList, setProductList] = useState(defaultProductList)
  const [category, setCategory] = useState('Trending');
  const [giftFor, setGiftFor] = useState('All')
  const [price, setPrice] = useState('1')

  useEffect(() => {
    let filteredData = defaultProductList.filter(product => product.category.includes(category))
    if (giftFor != 'All') {
      filteredData = filteredData.filter(product => product.giftFor.includes(giftFor))
    }
    if (price != '5') {
      filteredData = filteredData.filter(product => product.price <= priceConst[price])
    }
    setProductList(filteredData)
  }, [category, giftFor, price])

  return (
    <div className="App">

      <header style={{ display: 'flex', flexDirection: 'row', gap: 30, padding:'0 75px' }}>
        <h2 className='header-text'>Christmas Gifts</h2>
        <div >
          <h3 className='category-text'> SELECT CATEGORY</h3>
          <select onChange={({ target }) => { setCategory(target.value) }} style={{ border: 'none', paddingRight: 20, background: 'white', fontSize: 14 }}>
            {
              categories.map((category, index) => {
                return (
                  <option key={index} value={category} >
                    {category}
                  </option>
                )
              })
            }

          </select>
        </div>
        <div>

          <h3 className='category-text'>GIFT FOR</h3>
          <div className='giftFor'>
            {defaultGiftFor.map((gift, i) => {
              return (
                <div key={i} onClick={() => { setGiftFor(gift.label) }} className='giftFor-options'>
                  <img alt={gift.label} src={gift.image} height={24} width={24} />
                  <p className='giftFor-options-text' style={{ color: giftFor === gift.label ? 'red' : 'black' }}>{gift.label}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div ></div>
        <div >
          <h3 className='price-filter category-text'>SET PRICE</h3>
          <input type="range" min="1" max="5" steps="1" onChange={(e) => setPrice(e.target.value)} value={price} style={{ width: 500, height: 1 }} className='slider' />
          <ul className='category-text' style={{ display: 'flex', flexDirection: 'row', gap: 95, listStyleType: 'none', marginLeft: -40 }}>
            <li style={{ color: price === '1' ? 'red' : 'black' }}>$25</li>
            <li style={{ color: price === '2' ? 'red' : 'black' }}>$50</li>
            <li style={{ color: price === '3' ? 'red' : 'black' }}>$100</li>
            <li style={{ color: price === '4' ? 'red' : 'black' }}>$1000</li>
            <li style={{ color: price === '5' ? 'red' : 'black' }}>$1000+</li>
          </ul>
        </div>
      </header>
      <ProductListNew products={productList} />
    </div>
  );
}

export default App;
