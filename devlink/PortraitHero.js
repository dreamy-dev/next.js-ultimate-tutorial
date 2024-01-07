import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PortraitHero.module.css";

export function PortraitHero({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-8")}
      grid={{
        type: "section",
      }}
      tag="div"
      id="portrait-hero"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "hero-block")} tag="div">
          <_Builtin.Row
            className={_utils.cx(_styles, "columns-2")}
            tag="div"
            columns={{
              main: "7|5",
              small: "small-stack",
            }}
          >
            <_Builtin.Column
              className={_utils.cx(_styles, "column-9")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading-9")}
                tag="h3"
              >
                {"HEIDI HEFTI-SORG"}
              </_Builtin.Heading>
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading-12")}
                tag="h1"
              >
                {"FARBDESIGNERIN"}
              </_Builtin.Heading>
            </_Builtin.Column>
            <_Builtin.Column tag="div">
              <_Builtin.Image
                className={_utils.cx(_styles, "image-8")}
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
