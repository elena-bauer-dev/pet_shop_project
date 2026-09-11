import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getImageUrl, sendOrder } from '../../api';
import { removeItem, changeQuantity, clearCart } from '../../store/cartSlice';
import styles from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartItems.reduce(
    (sum, item) => sum + (item.discont_price ?? item.price) * item.quantity,
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

  return (
    <div className="container">
      <div className={styles.cart}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Shopping cart</h1>

          <div className={styles.divider}></div>

          <Link
            to="/"
            className={styles.backButton}
          >
            Back to the store
          </Link>
        </div>

        {/* Cart content */}
        {cartItems.length === 0 ? (
          /* Empty cart */
          <div className={styles.emptyCart}>
            <p>Looks like you have no items in your basket currently!</p>

            <Link
              to="/"
              className={styles.continueButton}
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          /* Cart with products */
          <div className={styles.content}>
            {/* Cart items */}
            <div className={styles.items}>
              {cartItems.map((item) => {
                const unitPrice = item.discont_price ?? item.price;
                const itemTotal = unitPrice * item.quantity;
                const oldTotal = item.discont_price
                  ? item.price * item.quantity
                  : null;
                return (
                  <div
                    className={styles.cartItem}
                    key={item.id}
                  >
                    <img
                      src={getImageUrl(item.image)}
                      alt={item.title}
                      className={styles.image}
                    />

                    <div className={styles.info}>
                      <h3>{item.title}</h3>

                      <div className={styles.bottom}>
                        <div className={styles.quantity}>
                          <button
                            type="button"
                            onClick={() => {
                              dispatch(
                                changeQuantity({
                                  id: item.id,
                                  quantity: item.quantity - 1,
                                }),
                              );
                            }}
                            disabled={item.quantity <= 1}
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            onClick={() => {
                              dispatch(
                                changeQuantity({
                                  id: item.id,
                                  quantity: item.quantity + 1,
                                }),
                              );
                            }}
                          >
                            +
                          </button>
                        </div>

                        <div className={styles.priceBlock}>
                          <span className={styles.price}>${itemTotal}</span>
                          {oldTotal && (
                            <del className={styles.oldPrice}>${oldTotal}</del>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className={styles.remove}
                      onClick={() => {
                        dispatch(removeItem(item.id));
                      }}
                    >
                      ×
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Order details */}
            <aside className={styles.orderDetails}>
              <h2>Order details</h2>

              <p className={styles.itemsCount}>{totalCount} items</p>

              <div className={styles.total}>
                <span>Total</span>

                <strong>${total.toFixed(2).replace('.', ',')}</strong>
              </div>

              <form
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="text"
                  placeholder="Name"
                  autoComplete="name"
                  {...register('name', {
                    required: 'Введите имя',
                    minLength: {
                      value: 2,
                      message: 'Минимум 2 символа',
                    },
                  })}
                />

                {errors.name && <p>{errors.name.message}</p>}

                <input
                  type="tel"
                  placeholder="Phone number"
                  autoComplete="tel"
                  {...register('phone', {
                    required: 'Введите номер телефона',
                    pattern: {
                      value: /^\+?[0-9\s\-()]{7,20}$/,
                      message: 'Введите корректный номер телефона',
                    },
                  })}
                />

                {errors.phone && <p>{errors.phone.message}</p>}

                <input
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  {...register('email', {
                    required: 'Введите email',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Введите корректный email',
                    },
                  })}
                />

                {errors.email && <p>{errors.email.message}</p>}

                {serverError && <p>{serverError}</p>}

                <button type="submit">
                  {isSubmitting ? 'Отправка' : 'Order'}
                </button>
              </form>
            </aside>
          </div>
        )}

        {/* Congratulations modal */}
        {submitted && (
          <div
            className={styles.overlay}
            onClick={handleCloseModal}
          >
            <div
              className={styles.modal}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closeButton}
                onClick={handleCloseModal}
              >
                ×
              </button>

              <h2>Congratulations!</h2>

              <p className={styles.firstText}>
                Your order has been successfully placed on the website.
              </p>

              <p className={styles.secondText}>
                A manager will contact you shortly to confirm your order.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
