import React from "react";
import PropTypes from 'prop-types';



function ExtraSmallCard(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card border-left-primary shadow h-100 py-2 colorcito">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                {props.name}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {props.ProdUnicos}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas ${props.icon} fa-2x text-gray-300`}> </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ExtraSmallCard.defaultProps = {
  title: "No Title",
  color: "success",
  cuantity: "No cuatity",
  icon: "fa-clipboard-list",
};

/* PROPTYPES */

ExtraSmallCard.propTypes = {
  atritutes: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    cuantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    icon: PropTypes.string.isRequired,
  }),
};
export default ExtraSmallCard;