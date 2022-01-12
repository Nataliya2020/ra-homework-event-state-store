import PropTypes from "prop-types";

 function IconSwitch({icon, onSwitch}) {

  return (
    <div className={"icon-container"}>
      <span
        className={"icon"}
        onClick={() => {icon === 'view_module' ? onSwitch('view_list') : onSwitch('view_module')}}
      >{icon}
      </span>
    </div>
  )
}

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func.isRequired
}

IconSwitch.defaultProps = {
  icon: '',
  onSwitch: () => {}
}

export default IconSwitch;
