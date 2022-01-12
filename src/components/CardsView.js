import PropTypes from "prop-types";
import ShopCard from "./ShopCard";

function CardsView(item) {

  return (
    <div>
      <ShopCard cards={item.cards}/>
    </div>
  )
}

CardsView.propTypes = {
  item: PropTypes.array.isRequired
}

CardsView.defaultProps = {
  item: []
}

export default CardsView;
