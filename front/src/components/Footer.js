import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <MDBContainer className="p-2">
        <MDBRow>
          <MDBCol lg="15" md="12" className="mb-3 mb-md-0">
            <h5 className="text-uppercase text-center p-2">
              Trabalho de Programação de Software para Web feito por:
            </h5>
            <p>
              Larissa Coelho, Bruno Glanzmann, Nicolas Anderson, Saulo e Matheus
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Repositório disponível em:{" "}
        <a
          className="text-dark"
          href="https://github.com/dsm-cefet-rj/trabalho-integrado-2022-2-grupo-1-psw"
        >
          github.com
        </a>
      </div>
    </MDBFooter>
  );
}
