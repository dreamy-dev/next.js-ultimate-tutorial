import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PrivaterWohntraum.module.css";

export function PrivaterWohntraum({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "hero-block-wohnraum")}
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
              className={_utils.cx(_styles, "column-left")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-14")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "white-titel")}
                  tag="h3"
                >
                  {"PRIVATER"}
                </_Builtin.Heading>
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-12-white")}
                  tag="h1"
                >
                  {"WOHNTRAUM"}
                </_Builtin.Heading>
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-9-copy")}
                  tag="h3"
                >
                  {"Ihr Zuhause soll Ihr Lieblingsort sein: "}
                  <br />
                  {"stilvoll, harmonisch und funktional"}
                </_Builtin.Heading>
              </_Builtin.Block>
            </_Builtin.Column>
            <_Builtin.Column tag="div">
              <_Builtin.Image
                className={_utils.cx(_styles, "image-8")}
                width="auto"
                height="auto"
                loading="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/5b43b13e3096f498cad89320/5c069c97bc9d1a5eb086fd9d_Slider2.jpg"
              />
            </_Builtin.Column>
          </_Builtin.Row>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
