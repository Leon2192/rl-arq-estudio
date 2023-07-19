"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  BsFacebook,
  BsFillCartFill,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
import {
  Button,
  Col,
  Container,
  Grid,
  Navbar,
  NextUIProvider,
  Text,
  createTheme,
} from "@nextui-org/react";

import CardsBanner from "@/components/CardsBanner";
import Footer from "@/components/Footer";
import Image from "next/image";
import InfoCard from "@/components/InfoCard";
import Link from "next/link";
import Slider from "react-slick";
import { useState } from "react";

const darkTheme = createTheme({ type: "dark" });

export default function Home() {
  const [showCategories, setShowCategories] = useState(false);
  const [showProductos, setShowProductos] = useState(false);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const servicios = [
    {
      nombre: "Renders",
      url: "/rlarq/banner.jpg",
    },
    {
      nombre: "Documentación de obra",
      url: "/rlarq/banner.jpg",
    },
    {
      nombre: "Planos municipales",
      url: "/rlarq/banner.jpg",
    },
    {
      nombre: "Arquitectura 3D ",
      url: "/rlarq/banner.jpg",
    },
    {
      nombre: "Videos y animaciones 3D ",
      url: "/rlarq/banner.jpg",
    },
  ];

  return (
    <NextUIProvider theme={darkTheme}>
      <Container xl css={{ width: "100%", marginTop: "22px" }}>
        {/*Jumbotron */}
        <div className="banner-inicial">
          <Grid.Container
            justify="flex-start"
            css={{
              height: "600px",
              width: "100%",
              backgroundImage: "url(/rlarq/cardrender.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Grid xs={12} sm={6} alignItems="center">
              <Col css={{ width: "100%", marginLeft: "33px" }}>
                <Text
                  weight={"bold"}
                  size={50}
                  css={{ textAlign: "start", color: "#fffff" }}
                >
                  Diseño integral, calidad e innovación.
                </Text>
                <Text
                  weight={"bold"}
                  size={50}
                  css={{ textAlign: "start", color: "#fffff" }}
                >
                  Conjugamos la arquitectura con la concreción de desarrollos
                  exitosos.
                </Text>

                <Col css={{ display: "flex", justifyContent: "start" }}>
                  <Link href="https://www.shopnow.com.ar/listado/camaras-accesorios/">
                    <Button
                      size="md"
                      color="gradient"
                      css={{ width: "25%", marginTop: "10px" }}
                    >
                      Hablemos
                    </Button>
                  </Link>
                </Col>
              </Col>
            </Grid>
          </Grid.Container>
        </div>

        {/* <Carousel /> */}

        <div className="container-slider">
          <h4 className="compra-carousel-title">
            Ofrecemos una amplia gama de servicios
          </h4>
          <Slider {...settings}>
            {servicios.map((item) => (
              <div key={item.nombre} className="card-contain">
                <div className="card-actividades">
                  <Link href="https://www.shopnow.com.ar/listado/camaras-accesorios/">
                    <img
                      className="img-actividades"
                      width={275}
                      height={275}
                      src={item.url}
                      alt="imagen"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <Grid.Container
          gap={2}
          style={{
            marginBottom: "22px",
          }}
        >
          <Grid xs={12} sm={6}>
            <CardsBanner
              label="Renders profesionales"
              title=""
              imageURL="/rlarq/banner.jpg"
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <CardsBanner
              label="Planos y documentación de obra"
              title=""
              imageURL="/rlarq/banner.jpg"
            />
          </Grid>
        </Grid.Container>

        <div className="banner-gif">
          <Grid.Container
            id="productos"
            justify="flex-start"
            css={{
              height: "800px",
              width: "100%",
              backgroundImage: "url(/rlarq/portada.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Grid xs={12} sm={6} alignItems="center">
              <Col css={{ width: "100%" }}>
                <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
                  Brindamos soluciones arquitectónicas para tu negocio
                </Text>

                <Text weight={"bold"} size={30} css={{ textAlign: "center" }}>
                  Desarrollamos desde cero tu proyecto.
                </Text>

                <Col css={{ display: "flex", justifyContent: "center" }}>
                  <Link href="https://www.shopnow.com.ar/listado/camaras-accesorios/">
                    <Button
                      style={{
                        background: "black",
                      }}
                      size="md"
                      css={{
                        width: "25%",
                        marginTop: "10px",
                        marginLeft: "$5",
                      }}
                    >
                      Conoce mas
                    </Button>
                  </Link>
                </Col>
              </Col>
            </Grid>
          </Grid.Container>
        </div>
      </Container>
    </NextUIProvider>
  );
}
