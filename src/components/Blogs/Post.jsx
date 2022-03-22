/** @format */

import React, { Fragment } from "react";
import { Grid, Box, Typography } from "@mui/material";
import HeaderImage from "../../asserts/postHeader.jpg";
import Blogs from "./Blogs";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
const Post = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item>
          <Box>
            <img src={HeaderImage} width="100%" alt="post header visual" />
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              mt={5}
              sx={{ color: "gray" }}
            >
              Dec 31, 2022 - 4 min read
            </Typography>
            <Typography
              component="h2"
              variant="h3"
              mt={5}
              sx={{ textTransform: "uppercase", fontWeight: 700 }}
            >
              The Blog Longest title
            </Typography>
            <Typography
              component="h3"
              variant="h4"
              gutterBottom
              mt={5}
              sx={{ textTransform: "uppercase", color: "gray" }}
            >
              A longest one sub title/ Short Discription
            </Typography>
            <Typography component="p" variant="body1" gutterBottom mt={5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, porro
              ducimus tenetur facilis voluptatum quos at ut nam. Rem reiciendis
              nobis aliquam quae deserunt alias quibusdam corrupti totam
              voluptates in. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Ipsa aliquam cupiditate facilis consequatur necessitatibus
              nostrum, dicta veniam, minus labore accusamus modi, placeat sed
              mollitia assumenda! Est dolorem voluptatibus vero odio?
            </Typography>
            <Typography component="p" variant="body1" gutterBottom mt={5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              praesentium, quisquam tempora quia soluta consectetur magnam
              nesciunt et error ea qui quidem sint molestiae dignissimos
              quibusdam quos nulla explicabo nisi. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dolorem voluptates odit tenetur
              delectus, laudantium porro debitis, dolore aliquid natus est fuga
              eveniet in sunt atque unde possimus omnis ipsa laborum! Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Eius, modi
              totam, distinctio quo itaque neque recusandae ea, praesentium
              dolore sit ipsam enim velit minus soluta autem odit a qui rem.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quo
              commodi voluptatum tempore nobis eius illo! Corrupti cupiditate ab
              ducimus officiis molestias consequatur animi qui quibusdam
              perspiciatis voluptatibus. Minima, ullam.
            </Typography>
            <Typography component="p" variant="body1" gutterBottom mt={5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              aliquid cupiditate dolores nisi corporis debitis quisquam
              excepturi adipisci et veniam eligendi, sapiente accusantium! Quia
              exercitationem animi odit perspiciatis, dignissimos magni! Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Quam corrupti,
              nulla officia cumque dolorem ex eligendi neque at cum ducimus
              soluta laboriosam? Corrupti quam eum numquam id impedit error
              possimus. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ratione debitis officia facilis sint ex doloremque, eveniet,
              quidem, provident sunt reprehenderit dolorem. Fugit, neque ipsa
              explicabo minima itaque quae ipsum tempore? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Molestiae doloremque alias
              impedit exercitationem error, itaque at optio esse, dolores
              tempora aspernatur est atque inventore vitae eaque totam natus
              corporis voluptas.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              gutterBottom
              mt={5}
              mb={4}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              sapiente esse corporis provident id nihil omnis incidunt, nisi
              voluptatum qui eos quasi iusto. Similique vitae eaque nulla amet
              eius ut.
            </Typography>
          </Box>
        </Grid>
        <Grid item align="center">
          <Typography
            align="center"
            variant="h4"
            component="h5"
            mt={5}
            sx={{ color: "gray" }}
          >
            More Articals
          </Typography>
          <ArrowDownward color="primary" sx={{ fontSize: 50, marginTop: 6 }} />
          <Blogs />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Post;
