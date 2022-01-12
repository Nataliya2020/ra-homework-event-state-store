import PropTypes from "prop-types";

function ShopItem(items) {

  return (
    <ul className={"list list-flex"}>
      {
        items.items.map((item, index) => {

          return (
            <li className={"list-item-list"} key={index}>
              <div className={"list-list list-list-name"}>{item.name}</div>
              <div className={"list-list"}>{item.color}</div>
              <div className={"list-list-img"}>
                <img className={"list-list-img-product"}
                     src={item.img}
                     alt={"products"}
                />
              </div>
              <div className={"container-price"}>
                <div className={"list-card-price"}>${item.price}</div>
                <div>
                  <button className={"button button-card"}>Add to cart</button></div>
              </div>
            </li>
          )
        })
      }
      </ul>
  )
}

ShopItem.propTypes = {
  items: PropTypes.array.isRequired
}

ShopItem.defaultProps = {
  items: []
}

export default ShopItem;
