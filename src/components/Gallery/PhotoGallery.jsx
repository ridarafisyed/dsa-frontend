/** @format */

import React, { Fragment } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import Image1 from "../../asserts/gallery/1.png";
import Image2 from "../../asserts/gallery/2.jpg";
import Image3 from "../../asserts/gallery/3.png";
import Image4 from "../../asserts/gallery/4.png";
import Image5 from "../../asserts/gallery/5.png";
import Image6 from "../../asserts/gallery/6.png";
import Image7 from "../../asserts/gallery/7.png";
import Image8 from "../../asserts/gallery/8.png";
import Image9 from "../../asserts/gallery/9.png";
import Image10 from "../../asserts/gallery/10.png";
import Image11 from "../../asserts/gallery/11.png";
import Image12 from "../../asserts/gallery/12.png";
import Image13 from "../../asserts/gallery/13.png";
import Image14 from "../../asserts/gallery/14.png";
import Image15 from "../../asserts/gallery/15.png";
import Image16 from "../../asserts/gallery/16.png";
import { Container } from "@mui/material";

export default function Gallery() {
  return (
    <Container>
      <ImageList cols={3}>
        <ImageListItem>
          <img src={Image1} alt="some Visual" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={Image2} alt="some Visual" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={Image3} alt="some Visual" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={Image4} alt="some Visual" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={Image5} alt="some Visual" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={Image6} alt="some Visual" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={Image7} alt="some Visual" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={Image8} alt="some Visual" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={Image9} alt="some Visual" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={Image10} alt="some Visual" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={Image11} alt="some Visual" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={Image12} alt="some Visual" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={Image13} alt="some Visual" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={Image14} alt="some Visual" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={Image15} alt="some Visual" loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img src={Image16} alt="some Visual" loading="lazy" />
        </ImageListItem>
      </ImageList>
    </Container>
  );
}
