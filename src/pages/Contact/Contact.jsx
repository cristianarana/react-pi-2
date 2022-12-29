import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next"; 
import './Contact.css'

export default function Contact() {
  const {t} = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const encode = (form, data) => {
    const formname = Object.keys(form)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(form[key])
      );
    const formdata = Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
    return formname + "&" + formdata;
  };

  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name":'contact' }, data ),
    })
      .then(() => alert('Message Submited!'),
                 window.location.replace('/'))
      .catch((error) => console.log(error));
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.description')}</p>
        </div>
        <div className="mt-5 mt-lg-0 d-flex align-items-stretch">
          <form
            className="php-email-form contact"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <input
                type="text"
                {...register("name", { maxLength: 40 })}
                placeholder={t('contact.fullname')}
                className="form-control"
              />
              {errors.name?.type === "maxLength" && (
                <p className="errors">El campo supera 40 caracteres</p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
                placeholder={t('contact.email')}
                className="form-control"
              />
              {errors.email?.type === "required" && (
                <p className="errors">El campo es requerido</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="errors">El formato de email es incorrecto</p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                {...register("subject", { required: true })}
                placeholder={t('contact.subject')}
                className="form-control"
              />
              {errors.subject?.type === "required" && (
                <p className="errors">El campo es requerido</p>
              )}
            </div>
            <div className="form-group">
              <textarea
                {...register("message", { required: true })}
                placeholder={t('contact.bodymsg')}
                rows="10"
                className="form-control"
              />
              {errors.message?.type === "required" && (
                <p className="errors">El campo es requerido</p>
              )}
            </div>
            <div className="text-center">
              <button type="submit">Send Menssage</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
