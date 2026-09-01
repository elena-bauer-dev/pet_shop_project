function Cards({ image, title, price, oldPrice, discount }) {
  return (
    <article>
      <img
        src={image}
        alt={title}
      />
      <span>{discount}</span>

      <h3>{title}</h3>

      <p>
        ${price} <del>${oldPrice}</del>
      </p>
    </article>
  );
}

export default Cards;
