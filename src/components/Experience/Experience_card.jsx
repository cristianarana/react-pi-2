import React from 'react'
import PropTypes from 'prop-types'

export default function Experience_card(props) {
  const { company, position, description, date } = props;
   return (
    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
    <div className="icon"><i className="bi bi-briefcase"></i></div>
    <h4 className="title"><a href="">{company}</a></h4>
    <p className="description">{position} <br/> {description} <br/> {date}</p>
  </div>
  )
};

Experience_card.propTypes = {
    institute: PropTypes.string,
	carrer: PropTypes.string,
	description: PropTypes.string,
	date: PropTypes.string
};

Experience_card.defaultProps = {};