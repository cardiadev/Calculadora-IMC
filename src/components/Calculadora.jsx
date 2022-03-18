import React, { useState } from "react";
import {
  Card,
  Button,
  Col,
  Row,
  InputGroup,
  FormControl,
  Container,
  Form,
} from "react-bootstrap";

export default function Calculadora() {
  //Declaracion del State
  const [estatura, setEstatura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState({ imc: 0, resultado: 0, parrafo:"" });
  // const [imc, setImc] = useState(0);

  function CalcularIMC() {

    if(peso===undefined || estatura===undefined || peso==='' || estatura ==='' || peso<=0 || estatura <=0){
        alert("Valores incorrectos")      
    }else{
        //La función Math.pow sirve para calcular potencias
    let indice = (peso / ((estatura * estatura)/10000)).toFixed(2);
    // setResultado(indice.toFixed(2));

    let resultado = "";
    let parrafo = "";

    if (indice < 16) {
      resultado = "Delgadez Severa";
      parrafo = `Para su estatura, un peso normal variaría entre 18.5 a 24.9 kilogramos.
      Las personas que tienen sobrepeso o son obesas tienen un mayor riesgo de afecciones crónicas, tales como hipertensión arterial, diabetes y colesterol alto.
      Toda persona que tenga sobrepeso debería tratar de evitar ganar más peso. Además, si usted tiene sobrepeso junto con otros factores de riesgo (como niveles altos de colesterol LDL, niveles bajos de colesterol HDL o hipertensión arterial), debería tratar de perder peso. Incluso una pequeña disminución (tan solo 10 % de su peso actual) puede ayudar a disminuir el riesgo de enfermedades. Hable con su proveedor de atención médica para establecer maneras adecuadas de perder peso.`
    } else if (indice >= 16 && indice < 17) {
      resultado = "Delgadez Moderada";
    } else if (indice >= 17 && indice < 18.5) {
      resultado = "Peso Normal";
    } else if (indice >= 18.5 && indice < 25) {
      resultado = "Delgadez Aceptable";
    } else if (indice >= 25 && indice < 30) {
      resultado = "Sobre Peso";
    } else if (indice >= 30 && indice < 35) {
      resultado = "Obesidad Leve (Tipo I)";
    } else if (indice >= 35 && indice < 40) {
      resultado = "Obesidad Leve (Tipo II)";
    } else {
      resultado = "Obesidad Leve (Tipo III)";
    }

    setResultado({
      imc: indice,
      resultado,
      parrafo
    });


    }

    
  }

  return resultado.resultado !== 0 ? (
   
  <Container>
      <Row className="mb-4">
        <h1>Calculadora de IMC</h1>
        <p>
          Esta calculadora proporciona el IMC (Indice de Masa Corporal) y
          tambien información sobre la categoria que se encuentra tu IMC.
          Utilícela para adultos de 20 años o más. Ya que para personas menores
          a 20 año se toman otras consideraciones para evaluar el IMC.
        </p>
      </Row>
      <Row>
        {/* Columna 1 */}
        <Col>
          <Card>
            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text>Estatura</InputGroup.Text>
                <FormControl
                  placeholder="Ingresa tu estatura en centimetros"
                  onChange={(e) => setEstatura(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Peso</InputGroup.Text>
                <FormControl
                  placeholder="Ingresa tu peso en kilogramos"
                  onChange={(e) => setPeso(e.target.value)}
                />
              </InputGroup>

              <Card.Text></Card.Text>
              <Button variant="primary" onClick={CalcularIMC}>
                Calcular
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Columna 2 */}
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Resultado de tus datos:</Card.Title>
              
              <Card.Text>Estatura: {estatura} centimetros</Card.Text>
              <Card.Text>Peso: {peso} kilogramos</Card.Text>
              <Card.Text>
                Su IMC es <strong>{resultado.imc}</strong>, lo que indica que su
                peso está en la categoría de <strong>{resultado.resultado}</strong> para adultos
                de su misma estatura.
              </Card.Text>

              <Card.Text>
                {resultado.parrafo}
              </Card.Text>
              <Card.Text>
                Para información sobre la importancia de una alimentación
                saludable y actividad física para lograr un peso saludable,
                visite{" "}
                <a
                  href="https://www.cdc.gov/healthyweight/healthy_eating/index.html"
                  target="_blank"
                >
                  Peso saludable
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
  : (
  <Container>
      <Row className="mb-4">
        <h1>Calculadora de IMC</h1>
        <p>
          Esta calculadora proporciona el IMC (Indice de Masa Corporal) y
          tambien información sobre la categoria que se encuentra tu IMC.
          Utilícela para adultos de 20 años o más. Ya que para personas menores
          a 20 año se toman otras consideraciones para evaluar el IMC.
        </p>
      </Row>
      <Row>
        {/* Columna 1 */}
        <Col>
          <Card>
            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text>Estatura</InputGroup.Text>
                <FormControl
                  placeholder="Ingresa tu estatura en centimetros"
                  onChange={(e) => setEstatura(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Peso</InputGroup.Text>
                <FormControl
                  placeholder="Ingresa tu peso en kilogramos"
                  onChange={(e) => setPeso(e.target.value)}
                />
              </InputGroup>

              <Card.Text></Card.Text>
              <Button variant="primary" onClick={CalcularIMC}>
                Calcular
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Columna 2 */}
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Resultado de tus datos:</Card.Title>
              <Card.Text>
                {resultado.parrafo}
              </Card.Text>
              <Card.Text>
                Para información sobre la importancia de una alimentación
                saludable y actividad física para lograr un peso saludable,
                visite{" "}
                <a
                  href="https://www.cdc.gov/healthyweight/healthy_eating/index.html"
                  target="_blank"
                >
                  Peso saludable
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  
  )
  
}
