import PropTypes from "prop-types";

function ShopCard(cards) {

  return (
    <ul className={"list"}>
      {
        cards.cards.map((card,index) => {

          return (
            <li className={"list-card"} key={index}>
            <div className={"list-card-img"}><img className={"list-img"} src={card.img} alt="products"/></div>
            <div className={"list-card-name"}>{card.name}</div>
            <div>{card.color}</div>
            <div className={"list-card-price"}>${card.price}</div>
            <div className={"list-card-button"}><button className={"button button-card"}>
              Add to cart
            </button></div>
            </li>
          )
        })
      }
    </ul>
  )
}

ShopCard.propTypes = {
  cards: PropTypes.array.isRequired
}

ShopCard.defaultProps = {
  cards: []
}

export default ShopCard;
