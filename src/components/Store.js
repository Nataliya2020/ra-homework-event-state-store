import React from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import PropTypes from "prop-types";

class Store extends React.Component {
  products = this.props.item;

  state = {icon: 'view_module'};

  render() {
    return (
      <div className={"content-container"}>
        <IconSwitch icon={this.state.icon} onSwitch={(icon) => this.setState({icon})}/>
        {this.state.icon === 'view_module' ? <CardsView cards={this.products}/> : <ListView items={this.products}/> }
      </div>
    )
  }
}

Store.propTypes = {
  products: PropTypes.array.isRequired
}

Store.defaultProps = {
  products: []
}

export default Store;
