import { Description } from "../../Dialog/Description";
import "./contact.scss";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const SignupSchema = yup.object().shape({
    nome: yup.string().required("O campo de nome precisa ser preenchido!"),
    email: yup.string().required("O campo de nome precisa ser preenchido!"),
    mensagem: yup.string().required("O campo de nome precisa ser preenchido!")
  });

export function SectionContact() {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(SignupSchema)
      });

      const onSubmit = (data) => {
      };    

    return (
        <section id="contact">
          <Description
          bg="#24292E"
          colorh1="#D4C9F8"
          colorh2="#977CED"
          colorText="#E5E7EA"
          
          subtitle="contato"
          title="Fale com a gente"
          p="Duis suscipit nunc non eros tempus, eget tincidunt erat varius. Pellentesque nec eros efficitur, pretium nunc et, tempus mi. Suspendisse pharetra mi eu ipsum elementum."
          />
          
          <div className="box">
            <form action="https://api.staticforms.xyz/submit" method="POST">
              <div>
              <input type="hidden" name="accessKey" value="8595852b-3931-4c93-87dd-8cb01a8b766f"/>
              <input type="hidden" name="redirectTo" value="http://127.0.0.1:5173/"/>

                <div className="inputs">
                  <input id="name-field" name="name" type="text" required="required" />
                  <label htmlFor="name-field">Nome</label>
                  <i></i>
                </div>

                <div className="inputs">
                  <input id="email-field" type="text" name="email" required="required" />
                  <label htmlFor="email-field">Email</label>
                  <i></i>
                </div>

                <div className="inputs">
                  <textarea name="message" id="message-field" type="textarea" required="required" />
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
    )
}