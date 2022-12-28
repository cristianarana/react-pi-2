import React from "react";
import PropTypes from "prop-types";
import ExperienceCard from "../../components/Experience/Experience_card";
import { useTranslation } from "react-i18next"; 
import './Experience.css';
import '../../components/Experience/Experience.css';


export default function Experience(props) {
  const{t} = useTranslation();
  const { data } = props;
  return (
    <section id="experiences" className="experiences">
      <div className="container">
        <div className="section-title">
          <h2>{t('experience.title')}</h2>
          <p>{t('experience.description')}</p>
        </div>
        <div className="row">
            {data?.map((e, index) =>(
              <ExperienceCard key={`key-${index}`} {...e} />
            ))}
        </div>
      </div>
    </section>
  );
}

Experience.propTypes = {
  institute: PropTypes.arrayOf(PropTypes.string),
};

Experience.defaultProps = {};
