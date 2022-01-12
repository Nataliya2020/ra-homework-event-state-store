import PropTypes from "prop-types";
import ShopItem from "./ShopItem";

function ListView(item) {
  return(
    <div>
      <ShopItem items={item.items}/>
    </div>
  )
}

ListView.propTypes = {
  item: PropTypes.array.isRequired
}

ListView.defaultProps = {
  item: []
}

export default ListView;
