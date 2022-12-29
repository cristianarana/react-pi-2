import React from "react";
import { useTranslation } from "react-i18next"; 

export default function Resume() {
  const {t} = useTranslation();
  const handleDownload = () => {
    fetch('resume-en.pdf').then(response=>{
        response.blob().then(blob=>{
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume-en.pdf';
                alink.click();
        })
    })
  };
  const handleDescarga = () => {
    fetch('resume-es.pdf').then(response=>{
        response.blob().then(blob=>{
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume-es.pdf';
                alink.click();
        })
    })
  };
  
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>{t('resume.title')}</h2>
          <p>{t('resume.description')}</p>
          <br />
          <div>
              <button className="print_button" onClick={handleDownload}>{t('resume.download')}</button>
          </div>
          <br/>
          <div>
              <button className="print_button" onClick={handleDescarga}>{t('resume.descarga')}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
