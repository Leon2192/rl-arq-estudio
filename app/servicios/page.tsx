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
        <Grid xs={12} sm={12}>
          <Col css={{ width: "100%" }}>
            <Text
              weight={"bold"}
              size={50}
              css={{ textAlign: "center", color: "white" }}
            >
              Todo lo que necesitás para tu proyecto en un único lugar.
            </Text>
            <Text
              weight={"bold"}
              size={30}
              css={{ textAlign: "center", color: "white" }}
            >
              Creamos soluciones integrales para realizar tu obra.
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
              Te contamos algunos de nuestros servicios
            </Text>

            <Col css={{ display: "flex", justifyContent: "center" }}>
              <Link href="https://www.shopnow.com.ar/listado/camaras-accesorios/">
                <Button
                  size="md"
                  shadow
                  color="gradient"
                  css={{ width: "50%", marginTop: "10px" }}
                >
                  Ver servicios
                </Button>
              </Link>
            </Col>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container
        gap={2}
        css={{
          marginTop: "33pz",
        }}
      >
        <Grid xs={12} sm={6}>
          <InfoCard label="" title="" imageURL="/rlarq/renderbanner.jpeg" />
        </Grid>
        <Grid
          xs={12}
          sm={6}
          css={{
            alignItems: "center",
          }}
        >
          <Col css={{ width: "100%" }}>
            <Text
              weight={"bold"}
              size={40}
              css={{ textAlign: "center", color: "white" }}
            >
              Renders
            </Text>
            <Col css={{ display: "flex", justifyContent: "center" }}>
              <Link href="https://www.shopnow.com.ar/listado/camaras-accesorios/">
                <Button
                  size="md"
                  shadow
                  color="gradient"
                  css={{ width: "25%", marginTop: "10px", marginLeft: "$5" }}
                >
                  Consultar servicio
                </Button>
              </Link>
            </Col>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container
        gap={2}
        css={{
          marginTop: "33pz",
        }}
      >
        <Grid
          xs={12}
          sm={6}
          css={{
            alignItems: "center",
          }}
        >
          <Col css={{ width: "100%" }}>
            <Text
              weight={"bold"}
              size={40}
              css={{ textAlign: "center", color: "white" }}
            >
              Documentacion de obra
            </Text>
            <Col css={{ display: "flex", justifyContent: "center" }}>
              <Link href="https://www.shopnow.com.ar/listado/camaras-accesorios/">
                <Button
                  size="md"
                  shadow
                  color="gradient"
                  css={{ width: "25%", marginTop: "10px", marginLeft: "$5" }}
                >
                  Consultar servicio
                </Button>
              </Link>
            </Col>
          </Col>
        </Grid>
        <Grid xs={12} sm={6}>
          <InfoCard label="" title="" imageURL="/rlarq/renderbanner.jpeg" />
        </Grid>
      </Grid.Container>

      <Grid.Container
        gap={2}
        css={{
          marginTop: "33pz",
        }}
      >
        <Grid xs={12} sm={6}>
          <InfoCard label="" title="" imageURL="/rlarq/renderbanner.jpeg" />
        </Grid>
        <Grid
          xs={12}
          sm={6}
          css={{
            alignItems: "center",
          }}
        >
          <Col css={{ width: "100%" }}>
            <Text
              weight={"bold"}
              size={40}
              css={{ textAlign: "center", color: "white" }}
            >
              Videos y animaciones 3D
            </Text>
            <Col css={{ display: "flex", justifyContent: "center" }}>
              <Link href="https://www.shopnow.com.ar/listado/camaras-accesorios/">
                <Button
                  size="md"
                  shadow
                  color="gradient"
                  css={{ width: "25%", marginTop: "10px", marginLeft: "$5" }}
                >
                  Consultar servicio
                </Button>
              </Link>
            </Col>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container
        gap={2}
        css={{
          marginTop: "33pz",
        }}
      >
        <Grid
          xs={12}
          sm={6}
          css={{
            alignItems: "center",
          }}
        >
          <Col css={{ width: "100%" }}>
            <Text
              weight={"bold"}
              size={40}
              css={{ textAlign: "center", color: "white" }}
            >
              Planos municipales
            </Text>
            <Col css={{ display: "flex", justifyContent: "center" }}>
              <Link href="https://www.shopnow.com.ar/listado/camaras-accesorios/">
                <Button
                  size="md"
                  shadow
                  color="gradient"
                  css={{ width: "25%", marginTop: "10px", marginLeft: "$5" }}
                >
                  Consultar servicio
                </Button>
              </Link>
            </Col>
          </Col>
        </Grid>
        <Grid xs={12} sm={6}>
          <InfoCard label="" title="" imageURL="/rlarq/renderbanner.jpeg" />
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default page;
