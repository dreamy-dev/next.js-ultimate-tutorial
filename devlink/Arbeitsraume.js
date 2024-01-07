import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Arbeitsraume.module.css";

export function Arbeitsraume({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      grid={{
        type: "section",
      }}
      tag="div"
      id="arbeitsraume"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "section-block")}
          tag="div"
        >
          <_Builtin.Row
            className={_utils.cx(_styles, "columns")}
            tag="div"
            columns={{
              main: "6|6",
            }}
          >
            <_Builtin.Column
              className={_utils.cx(_styles, "column-9")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-8")}
                width="auto"
                height="auto"
                loading="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/5b43b13e3096f498cad89320/5c06995e53197078d471e4e8_Slider.jpg"
              />
            </_Builtin.Column>
            <_Builtin.Column tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-13")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "white-titel")}
                  tag="h3"
                >
                  {"WOHLFÜHL"}
                </_Builtin.Heading>
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-12-white")}
                  tag="h1"
                >
                  {"ARBEITSRAUM"}
                </_Builtin.Heading>
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-9-copy")}
                  tag="h3"
                >
                  {"Arbeitsraum zum Wohlfühlen: "}
                  <br />
                  {"ästhetisch, repräsentativ und praktisch"}
                </_Builtin.Heading>
              </_Builtin.Block>
            </_Builtin.Column>
          </_Builtin.Row>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
