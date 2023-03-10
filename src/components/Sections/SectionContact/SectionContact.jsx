import { Description } from "../../Dialog/Description";
import "./contact.scss";

import Swal from "sweetalert2";

import React from "react";
import InputMask from "react-input-mask";

export function SectionContact(props) {
  const Alert = (e) => {
    Swal.fire({
      title: "<strong>Sua mensagem foi enviada com sucesso!</strong>",
      icon: "success",
    });
    e.preventDefault();
  };

  return (
    <section id="contact">
      <Description
        bg="#24292E"
        colorh1="#D4C9F8"
        colorh2="#977CED"
        colorText="#E5E7EA"
        font-size="20"
        subtitle="contato"
        title="Fale com a gente"
        p=""
      />

      <p className="p">
        Entre em contato conosco agora: preencha o formulário abaixo para falar
        diretamente com nossa equipe.
      </p>
      <br />
      <div className="box">
        <form
          onSubmit={Alert}
          action="https://api.staticforms.xyz/submit"
          method="POST"
        >
          <div>
            <input
              type="hidden"
              name="accessKey"
              value="e0480e4a-8b40-430e-9242-c07a35153f0a"
            />
            <input
              type="hidden"
              name="redirectTo"
              value="http://127.0.0.1:5173/"
            />

            <div className="inputs">
              <input
                id="name-field"
                name="name"
                type="text"
                required="required"
              />
              <label htmlFor="name-field">Nome</label>
              <i></i>
            </div>

            <div className="inputs">
              <input
                id="email-field"
                type="text"
                name="email"
                required="required"
              />
              <label htmlFor="email-field">Email</label>
              <i></i>
            </div>

            <div className="inputs">
              <InputMask
                mask="(99) 99999-9999"
                name="number"
                value={props.value}
                onChange={props.onChange}
                required="required"
              />
              <label htmlFor="number-field">Telefone</label>
              <i></i>
            </div>

            <div className="inputs">
              <textarea name="message" id="message-field" required="required" />
              <label htmlFor="message-field">Mensagem</label>
              <i></i>
            </div>

            <div className="dashboard">
              <button type="submit">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
