import React from "react";
import PropTypes from "prop-types";
import EducationCard from "../components/Education/Education_card";
import { useTranslation } from "react-i18next"; 

export default function Education(props) {
  const {t} = useTranslation();
  const { data } = props;
  const { component } = props;
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>{t('education.title')}</h2>
          <p>{t('education.description')}</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">{t('education.education')}</h3>
            {data?.map((e, index) => (
              <EducationCard key={`key-${index}`} {...e} />
            ))}
          </div>
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">{t('education.skills')}</h3>
            <div className="resume-item pb-0">
              <h4>{t('education.technologies')}</h4>
              <ul>
                {component.dev?.map((e,value) => (
                  <li>{e}</li>
                ))}
              </ul>
            </div>
            <div className="resume-item pb-0">
              <h4>{t('education.workingmethod')}</h4>
              <ul>
                {component.work?.map((value) => (
                  <li>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Education.propTypes = {
  educationCard: PropTypes.arrayOf(PropTypes.string),
};

Education.defaultProps = {};
