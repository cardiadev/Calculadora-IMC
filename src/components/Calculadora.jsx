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
  const [resultado, setResultado] = useState({
    imc: 0,
    resultado: 0,
    parrafo: "",
  });
  // const [imc, setImc] = useState(0);

  function CalcularIMC() {
    if (
      peso === undefined ||
      estatura === undefined ||
      peso === "" ||
      estatura === "" ||
      peso <= 0 ||
      estatura <= 0
    ) {
      alert("Valores incorrectos");
    } else {
      //La función Math.pow sirve para calcular potencias
      let indice = (peso / ((estatura * estatura) / 10000)).toFixed(2);
      // setResultado(indice.toFixed(2));

      let resultado = "";
      let parrafo = "";

      if (indice < 16) {
        resultado = "Delgadez Severa";
        parrafo = `Un IMC de este valor indica que estas en un peso extremadamente bajo. Un IMC por debajo de 15 te pone en la categoría de delgadez muy severa, significando que estás en riesgo de padecer graves problemas para la salud, asociados a tu peso extremadamente bajo.`;
      } else if (indice >= 16 && indice < 17) {
        resultado = "Delgadez Moderada";
        parrafo = `Este IMC de (15.8) indica que estas en un peso muy bajo. Un IMC de menos de 16 te pone en la categoría de delgadez severa, significando que estás en riesgo de padecer riesgos graves para tu salud, asociados a tu severa delgadez.`;
      } else if (indice >= 17 && indice < 18.5) {
        resultado = "Peso Normal";
        parrafo = `Un IMC de este valor indica que estás en un peso un poco bajo. Una masa corporal baja puede hacer disminuir el sistema inmunológico, lo que podría conducir a una enfermedad como la desnutrición, la pérdida ósea, y otras condiciones. Cuanto menor sea tu IMC mayores serán los problemas de este tipo.`;
      } else if (indice >= 18.5 && indice < 25) {
        resultado = "Delgadez Aceptable";
        parrafo = `Tu peso es normal. Esta puntuación IMC se asocia con una vida más larga, la disposición de sufrir enfermedades graves baja, además de ser percibidos como más atractivos físicamente. Sin embargo, puede ser una buena idea revisar la circunferencia de tu cintura y mantenerlo dentro de los límites recomendados.`;
      } else if (indice >= 25 && indice < 30) {
        resultado = "Sobre Peso";
        parrafo = `Estás con un poco de sobrepeso en comparación con tu altura. Te beneficiarías con encontrar formas saludables para bajar de peso, como una dieta sana y hacer más ejercicio. Las personas que están en este rango tienen un mayor riesgo para una variedad de enfermedades. Revise la circunferencia de tu cintura.`;
      } else if (indice >= 30 && indice < 35) {
        resultado = "Obesidad Leve (Tipo I)";
        parrafo = `Puedes estar en una condición poco saludable. Esto indica una condición poco saludable, el exceso de masa te está poniendo en riesgo de enfermedades del corazón, hipertensión, problemas circulatorios, diabetes, enfermedades de la vesícula, y algunos tipos de cáncer. Deberás bajar de peso cambiando a una dieta más saludable y haciendo ejercicio.`;
      } else if (indice >= 35 && indice < 40) {
        resultado = "Obesidad Leve (Tipo II)";
        parrafo = `El riesgo de problemas de salud e incluso la muerte, es grave. Estas sufriendo de una enfermedad relacionada con el peso. Por el bien de tu salud es muy importante que vayas a ver a un médico y te recomiende un especialista que se adapte a tus problemas.`;
      } else {
        resultado = "Obesidad Leve (Tipo III)";
        parrafo = `Tu riesgo de padecer problemas de salud relacionados con el peso e incluso la muerte, es muy extrema. Probablemente has estado sufriendo sobrepeso durante mucho tiempo. Es muy importante ver a tu médico y obtener ayuda de especialistas para tu obesidad.`;
      }

      setResultado({
        imc: indice,
        resultado,
        parrafo,
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
                peso está en la categoría de{" "}
                <strong>{resultado.resultado}</strong> para adultos de su misma
                estatura.
              </Card.Text>

              <Card.Text>{resultado.parrafo}</Card.Text>
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
  ) : (
    <Container>
      <Row className="mb-4">
        <h1 className="mb-4">Calculadora de IMC</h1>
        <h5>¿Para qué sirve el IMC?</h5>
        <p>
        Es la herramienta más sencilla y rápida para saber si pesas más de lo debido, menos de lo adecuado o bien, si estás en el peso ideal. Gracias a dos simples datos, tu peso y tu estatura (de preferencia medidos recientemente y por un profesional de la salud) ésta calculadora puede proporcionarte tu IMC en un segundo.
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
              <Card.Text>{resultado.parrafo}</Card.Text>
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
  );
}
