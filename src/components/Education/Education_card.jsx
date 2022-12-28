import React from "react";
import PropTypes from "prop-types";
import './Education.css'

export default function Education_card(props) {
  const { institute, carrer, date } = props;
  return (
    <div className="resume-item pb-0">
      <h4 className="title">{institute}</h4>
      <p>
        <em>{carrer}</em>
        <br/>
        <em>{date}</em>
      </p>
    </div>
  );
}

Education_card.propTypes = {
  institute: PropTypes.string,
  carrer: PropTypes.string,
  date: PropTypes.string,
};

Education_card.defaultProps = {};
