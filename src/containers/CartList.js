import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectGoods
} from '../store/goodsSlice';

import {
    selectCart,
    increment,
    decrement,
    clear
} from '../store/cartSlice';
import Cart from '../components/Cart';

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    // переиндексирую массив товара
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});
    console.log(goodsObj);

    let clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
        if (!t.classList.contains('add-to-cart') && !t.classList.contains('remove-to-cart') && !t.classList.contains('clear')) return true;
        if (t.classList.contains('add-to-cart')) {
            dispatch(increment(t.getAttribute('data-key')));
        }
        else if (t.classList.contains('remove-to-cart')) {
            dispatch(decrement(t.getAttribute('data-key')));
        }
        else if (t.classList.contains('clear')) {
            dispatch(clear(t.getAttribute('data-key')));
        }
    }

    return (
        <>
            <div onClick={clickHandler}>
                {Object.keys(cart).map(item => <Cart key={item + goodsObj[item]['title']} title={goodsObj[item]['title']} cost={goodsObj[item]['cost']} value={cart[item]} price={goodsObj[item]['cost'] * cart[item]} articul={goodsObj[item]['articul']} image={goodsObj[item]['image']} fullPrice={
                    goodsObj['284s']['cost'] * cart['284s'] + goodsObj['778d']['cost'] * cart['778d']} />)}
            </div>
        </>
    );
}

export default CartList;