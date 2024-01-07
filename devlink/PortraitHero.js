import React from "react";
import * as _Builtin from "./_Builtin";

export function PortraitHero({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section-8"
      grid={{
        type: "section",
      }}
      tag="div"
      id="portrait-hero"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Block className="hero-block" tag="div">
          <_Builtin.Row
            className="columns-2"
            tag="div"
            columns={{
              main: "7|5",
              small: "small-stack",
            }}
          >
            <_Builtin.Column className="column-9" tag="div">
              <_Builtin.Heading className="heading-9" tag="h3">
                {"HEIDI HEFTI-SORG"}
              </_Builtin.Heading>
              <_Builtin.Heading className="heading-12" tag="h1">
                {"FARBDESIGNERIN"}
              </_Builtin.Heading>
            </_Builtin.Column>
            <_Builtin.Column tag="div">
              <_Builtin.Image
                className="image-8"
                width="auto"
                height="auto"
                loading="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/5b43b13e3096f498cad89320/5ede85974e9349e7fdefac88_IMG_2368.jpeg"
              />
            </_Builtin.Column>
          </_Builtin.Row>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
