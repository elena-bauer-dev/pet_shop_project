import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { getImageUrl, sendOrder } from '../../api';
import { removeItem, changeQuantity, clearCart } from '../../store/cartSlice';

import QuantityPicker from '../../components/QuantityPicker';
import Modal from '../../components/Modal';

import styles from './Cart.module.css';

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  async function onSubmit(value) {
    setServerError(null);

    try {
      await sendOrder({
        name: value.name,
        phone: value.phone,
        email: value.email,
        products: cartItems.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      });

      setSubmitted(true);
      reset();
    } catch (err) {
      setServerError(err.message);
    }
  }

  function handleCloseModal() {
    setSubmitted(false);
    dispatch(clearCart());
  }

  if (cartItems.length === 0 && !submitted) {
    return (
      <div className="container">
        <div className={styles.emptyCart}>
          <h1 className={styles.title}>Shopping cart</h1>

          <p className={styles.emptyText}>Your cart is empty.</p>

          <Link
            to="/products"
            className={styles.continueButton}
          >
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className={styles.cart}>
        <h1 className={styles.title}>Shopping cart</h1>

        <div className={styles.content}>
          <div className={styles.items}>
            {cartItems.map((item) => (
              <div
                className={styles.cartItem}
                key={item.id}
              >
                <img
                  className={styles.image}
                  src={getImageUrl(`/product_img/${item.id}.jpeg`)}
                  alt={item.title}
                />

                <div className={styles.itemInfo}>
                  <h2 className={styles.itemTitle}>{item.title}</h2>

                  <QuantityPicker
                    value={item.quantity}
                    onChange={(value) =>
                      dispatch(
                        changeQuantity({
                          id: item.id,
                          quantity: value,
                        }),
                      )
                    }
                  />
                </div>

                <div className={styles.itemPrice}>
                  <span>${item.price * item.quantity}</span>

                  {item.oldPrice && <del>${item.oldPrice}</del>}
                </div>

                <button
                  type="button"
                  className={styles.removeButton}
                  onClick={() => dispatch(removeItem(item.id))}
                  aria-label={`Remove ${item.title}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <aside className={styles.orderDetails}>
            <h2>Order details</h2>

            <div className={styles.orderInfo}>
              <span>{totalCount} items</span>

              <strong>${totalPrice}</strong>
            </div>

            <form
              className={styles.form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                placeholder="Name"
                {...register('name', {
                  required: 'Name is required',
                })}
              />

              {errors.name && (
                <span className={styles.error}>{errors.name.message}</span>
              )}

              <input
                type="tel"
                placeholder="Phone number"
                {...register('phone', {
                  required: 'Phone number is required',
                })}
              />

              {errors.phone && (
                <span className={styles.error}>{errors.phone.message}</span>
              )}

              <input
                type="email"
                placeholder="Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email',
                  },
                })}
              />

              {errors.email && (
                <span className={styles.error}>{errors.email.message}</span>
              )}

              {serverError && (
                <p className={styles.serverError}>{serverError}</p>
              )}

              <button
                type="submit"
                className={styles.orderButton}
              >
                Order
              </button>
            </form>
          </aside>
        </div>
      </div>

      {submitted && (
        <Modal onClose={handleCloseModal}>
          <h2>Congratulations!</h2>

          <p>Your order has been successfully placed on the website.</p>

          <p>A manager will contact you shortly to confirm your order.</p>
        </Modal>
      )}
    </div>
  );
}

export default Cart;
