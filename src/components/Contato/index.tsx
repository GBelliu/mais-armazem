import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Container, ContentFormulario, Forms, Informacoes } from "./styles";
import emailjs from "@emailjs/browser";
import Loader from "../elements/Loader";
import { Button } from "../elements/Button";
import { ArrowRight } from "lucide-react";

function Contato() {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [data, setData] = useState({
    name: "",
    mail: "",
    phone: "",
    calc: "",
  });
  const [loadingForm, setLoadingForm] = useState(false);
  const form = useRef(null);
  // const sendEmail = (e: any) => {
  //   e.preventDefault();
  //   console.log("aaa");
  //   // if (data.acceptData === "Sim") {
  //   if (Number(data.calc) === Number(num1) + Number(num2)) {
  //     setLoadingForm(true);
  //     emailjs
  //       .send("service_n8e9ty1", "template_digpa17", data, "_3hkY6JzNsEF01eIA")
  //       .then(
  //         (result) => {
  //           toast.success(
  //             "Dados enviados com sucesso! Entraremos em contato em breve."
  //           );

  //           setLoadingForm(true);
  //           setData({
  //             name: "",
  //             mail: "",
  //             phone: "",
  //             calc: "",
  //           });
  //         },
  //         (error) => {
  //           toast.error(
  //             "Ocorreu um erro ao enviar. Preencha os dados e tente novamente!"
  //           );
  //           setLoadingForm(true);
  //         }
  //       )
  //       .finally(() => {
  //         setLoadingForm(false);
  //         setData({
  //           name: "",
  //           mail: "",
  //           phone: "",
  //           calc: "",
  //         });
  //       });
  //   } else {
  //     toast.info("Digite o cálculo correto!");
  //     setLoadingForm(false);
  //   }
  // };

  return (
    <Container id="contato">
      <ContentFormulario>
        <Forms>
          <h1>Fale conosco!</h1>
          {/* <form action="" onSubmit={sendEmail} ref={form}> */}
          <form action="" ref={form}>
            <div className="formItem">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
              />
            </div>
            <div className="formItem">
              <input
                type="mail"
                name="mail"
                id="mail"
                placeholder="E-mail"
                value={data.mail}
                onChange={(e) => setData({ ...data, mail: e.target.value })}
                required
              />
            </div>
            <div className="formItem">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Celular"
                maxLength={16}
                value={data.phone}
                onChange={(e) =>
                  setData({
                    ...data,
                    phone: e.target.value.replace(
                      /(\d{2})(\d{1})(\d{4})(\d{4})/,
                      "($1) $2 $3-$4"
                    ),
                  })
                }
                required
              />
            </div>
            <div className="formItem">
              <input
                type="text"
                name="calc"
                id="calc"
                placeholder={`${String(num1)} + ${String(num2)}`}
                value={data.calc}
                onChange={(e) => setData({ ...data, calc: e.target.value })}
                required
              />
            </div>
            <Button
              type="submit"
              text={loadingForm ? <Loader /> : "Enviar"}
              icon={<ArrowRight color="#FFFFFF" />}
            />
          </form>
        </Forms>
        <Informacoes>
          <div className="infoText">
            <h2>Informações</h2>
            <div>
              <h3>E-mail:</h3>
              <span>maisarmazem@gmail.com</span>
            </div>
            <div>
              <h3>Telefone:</h3>
              <span>+55 19 99999-9999</span>
            </div>
            <div>
              <h3>Endereço</h3>
              <span>
                Avenida Cabo Basilio Zechim Junior, 344 Jardim Novo II, Rio
                Claro - SP
              </span>
            </div>
          </div>
          <div className="infoMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14750.377985472096!2d-47.5729214!3d-22.4442834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7da820ebaf8ab%3A0xab8e56ce548e0249!2sCentro%20Logistico%20de%20Rio%20Claro!5e0!3m2!1spt-BR!2sbr!4v1705677829174!5m2!1spt-BR!2sbr"
              style={{ border: "0", borderRadius: "20px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Informacoes>
      </ContentFormulario>
    </Container>
  );
}

export default Contato;
