import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import PropTypes from 'prop-types';
import * as Message from './../constants/Message';
import * as actions from './../actions';
import CartResult from '../components/CartResult';

class CartContainer extends Component {
    showCartItem = (cart) => {
        let { onDeleteProductInCart, onUpdateProductInCart, onChangeMessage } = this.props;
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, key) => (
                <CartItem
                    key={key}
                    item={item}
                    onDeleteProductInCart={onDeleteProductInCart}
                    onUpdateProductInCart={onUpdateProductInCart}
                    onChangeMessage={onChangeMessage}
                />
            ));
        }

        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }

        return result;
    }
    render() {
        let { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
};

const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = (dispatch, props) => ({
    onDeleteProductInCart: (product) => (
        dispatch(actions.actRemoveProductInCart(product))
    ),
    onUpdateProductInCart: (product, quantity) => (
        dispatch(actions.actUpdateProductInCart(product, quantity))
    ),
    onChangeMessage: (message) => (
        dispatch(actions.actChangeMessage(message))
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);