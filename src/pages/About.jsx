import React from "react";
import { useTranslation } from "react-i18next"; 

export default function About({ data }) {
  const {t, i18n} = useTranslation();
  const { name, surname, age, address, email, degree } = data;
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>{t('about.title')}</h2>
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content">
          <h3>{t('about.profesion')}</h3>
          <p>{t('about.description')}</p>
        </div>
        <br />
        <div className="row content">
          <div className="col-lg-6">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i> <strong>{t('about.name')}</strong>{" "}
                <span>{name}</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <strong>{t('about.surname')}</strong> <span>{surname}</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i> <strong>{t('about.age')}</strong>{" "}
                <span>{age}</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <strong>{t('about.address')}</strong> <span>{address}</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i> <strong>{t('about.degree')}</strong>{" "}
                <span>{degree}</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i> <strong>{t('about.email')}</strong>{" "}
                <span>{email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
