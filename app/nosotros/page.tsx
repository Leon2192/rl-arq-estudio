"use client";

import { BsCameraFill, BsFillCameraVideoFill, BsFilm } from "react-icons/bs";
import { Button, Col, Grid, Text } from "@nextui-org/react";

import { AiTwotoneCamera } from "react-icons/ai";
import { GiClick } from "react-icons/gi";
import { GrConnect } from "react-icons/gr";
import InfoCard from "@/components/InfoCard";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      {/*Displaying Product Cards */}
      <Grid.Container
        gap={2}
        css={{
          marginTop: "33px",
        }}
      >
        <Grid xs={12} sm={6}>
          <InfoCard label="" title="" imageURL="/rlarq/renderbanner.jpeg" />
        </Grid>
        <Grid xs={12} sm={6}>
          <Col css={{ width: "100%" }}>
            <Text
              weight={"bold"}
              size={50}
              css={{ textAlign: "center", color: "white" }}
            >
              RL Arq estudio de Arqitectura
            </Text>
            <Text
              weight={"bold"}
              size={40}
              css={{ textAlign: "center", color: "white" }}
            >
              Enfoque
            </Text>
            <Text
              weight={"bold"}
              size={20}
              css={{
                textAlign: "center",
                color: "white",
                marginBottom: "30px",
              }}
            >
              Somos un estudio de arquitectura apasionado por el arte de
              transformar sueños en realidades construidas. Nuestra dedicación y
              experiencia en el campo nos han llevado a especializarnos en
              distintos aspectos del diseño arquitectónico, siendo nuestros
              pilares fundamentales la excelencia en planos, renders, modelado
              3D y documentación de obra. En RL Arq, cada proyecto representa un
              nuevo desafío que abrazamos con entusiasmo y dedicación. Nuestro
              equipo de arquitectos altamente capacitados, ingenieros y
              diseñadores trabaja en sinergia, fusionando la creatividad con la
              funcionalidad y la estética.
            </Text>
            <Col
              css={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "30px",
              }}
            >
              <BsFilm size={"4em"} />
              <GiClick size={"4em"} />
              <BsFillCameraVideoFill size={"4em"} />
            </Col>
            <br />
            <Col
              css={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "30px",
              }}
            ></Col>
          </Col>
        </Grid>
      </Grid.Container>
      <br />
      {/*banner2 */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={6}>
          <Col css={{ width: "100%" }}>
            <Text
              weight={"bold"}
              size={50}
              css={{ textAlign: "center", color: "white" }}
            >
              Proyeción
            </Text>

            <Text
              weight={"bold"}
              size={20}
              css={{
                textAlign: "center",
                color: "white",
                marginBottom: "30px",
              }}
            >
              Nos enorgullecemos de contar con una amplia trayectoria en el
              mercado, respaldados por años de experiencia y numerosos proyectos
              exitosos. Desde viviendas unifamiliares hasta complejos
              comerciales y edificaciones emblemáticas, cada diseño es concebido
              con una visión única y una meticulosa atención al detalle. En RL
              Arq, la tecnología es nuestra aliada. Adoptamos herramientas y
              software de última generación para proporcionar a nuestros
              clientes una experiencia de diseño inigualable. Nuestros renders y
              animaciones 3D realistas permiten visualizar cada proyecto en su
              esplendor, ayudándonos a crear una conexión emocional entre el
              diseño y quienes lo disfrutarán en un futuro.
            </Text>
            <Col
              css={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "30px",
              }}
            >
              <BsFilm size={"4em"} />
              <GiClick size={"4em"} />
              <BsFillCameraVideoFill size={"4em"} />
            </Col>
            <br />
            <Col
              css={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "30px",
              }}
            ></Col>
          </Col>
        </Grid>

        <Grid xs={12} sm={6}>
          <InfoCard label="" title="" imageURL="/rlarq/portada.jpg" />
        </Grid>
      </Grid.Container>
      <br />

      <Grid.Container gap={2}>
        <Grid xs={12} sm={12}>
          <Col css={{ width: "100%" }}>
            <Text
              weight={"bold"}
              size={20}
              css={{ textAlign: "center", color: "white", padding: "77px" }}
            >
              Nuestra filosofía se basa en la creación responsable y sostenible.
              Concebimos espacios que trascienden en el tiempo, combinando
              estética y funcionalidad con soluciones ecológicas y eficientes.
              Escuchamos atentamente las necesidades y deseos de nuestros
              clientes, asegurándonos de que cada proyecto sea un reflejo de su
              visión y personalidad. El proceso de trabajo en [Nombre del
              Estudio] es transparente y colaborativo. Desde la primera idea
              hasta la entrega final, mantenemos una comunicación constante con
              nuestros clientes, involucrándolos en cada etapa del proyecto.
              Creemos que el trabajo en equipo es fundamental para alcanzar
              resultados excepcionales y superar las expectativas. En cada
              proyecto, buscamos la excelencia arquitectónica, buscando no solo
              cumplir con los requerimientos funcionales, sino también inspirar
              y enriquecer la vida de quienes interactúan con nuestras
              creaciones. Nuestro compromiso es ofrecer soluciones innovadoras y
              elegantes que dejen una huella positiva en la comunidad y el
              entorno. Estamos agradecidos por la confianza que nuestros
              clientes depositan en nosotros y por las relaciones a largo plazo
              que hemos construido a lo largo de los años. Nuestra pasión por el
              diseño arquitectónico nos impulsa a seguir creciendo y
              evolucionando, siempre dispuestos a enfrentar nuevos desafíos y
              superar fronteras creativas.
            </Text>
          </Col>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default page;
