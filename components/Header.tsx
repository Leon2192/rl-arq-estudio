"use client";

import {
  BsFacebook,
  BsFillCartFill,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
import { Container, Navbar } from "@nextui-org/react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Container
      xl
      css={{
        width: "100%",
      }}
    >
      {/*Navbar */}
      {
        <Navbar variant={"static"}>
          <Navbar.Content>
            <Navbar.Link href="#"> </Navbar.Link>
            <Navbar.Link href="#productos"> </Navbar.Link>
            <Navbar.Link href="#footer"> </Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            <Link href="https://www.instagram.com/gopro/">
              <BsInstagram />
            </Link>
            <Link href="https://www.facebook.com/gopro">
              <BsFacebook />
            </Link>
            <Link href="https://www.youtube.com/user/GoProCamera">
              <BsYoutube />
            </Link>
          </Navbar.Content>
        </Navbar>
      }

      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Link href={"/"}>
            <Image
              width={100}
              height={100}
              src="/rlarq/logo.jpeg"
              alt="Default Image"
              objectFit="cover"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Content>
          <Link
            href={"/nosotros"}
            style={{
              color: "white",
            }}
          >
            Sobre nosotros
          </Link>

          <Link
            href={"/servicios"}
            style={{
              color: "white",
            }}
          >
            Servicios
          </Link>

          <Link
            href={"/contacto"}
            style={{
              color: "white",
            }}
          >
            Contacto
          </Link>

          {/*
          <Link href={'/accesorios'} style={{
            color: 'white'
          }}>
            Accesorios
          </Link>
          <Link href={'/accesorios'} style={{
            color: 'white'
          }}>
            Complementos de ocio
          </Link>
          <Link
            href={"/actividad"}
            style={{
              color: "white",
            }}
          >
            Compras por actividad
          </Link>
           */}
        </Navbar.Content>

       
      </Navbar>
    </Container>
  );
};

export default Header;
