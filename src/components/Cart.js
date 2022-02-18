function Cart(props) {

    return (
        <div className="Cart">
            <img src={props.image} alt="" />
            <table>
                <tbody>
                    <tr><th>Name</th><th>Cost</th><th>Value</th><th>Cost*Val</th></tr>
                    <tr>
                        <td>{props.title}</td>
                        <td>{props.cost}</td>
                        <td>{props.value}</td>
                        <td>{props.price}</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr><th>Full Price</th></tr>
                    <tr><td>{0 + props.fullPrice}</td></tr>
                </tbody>
            </table>
            <button className="add-to-cart" data-key={props.articul}>Add</button>
            <button className="remove-to-cart" data-key={props.articul}>Remove</button>
            <button className="clear" data-key={props.articul}>Clear</button>
        </div>
    );

}

export default Cart;