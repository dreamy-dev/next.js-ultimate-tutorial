import React from "react";
import * as _Builtin from "./_Builtin";

export function PrivaterWohntraum({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Block className="hero-block-wohnraum" tag="div">
          <_Builtin.Row
            className="columns"
            tag="div"
            columns={{
              main: "6|6",
            }}
          >
            <_Builtin.Column className="column-left" tag="div">
              <_Builtin.Block className="div-block-14" tag="div">
                <_Builtin.Heading className="white-titel" tag="h3">
                  {"PRIVATER"}
                </_Builtin.Heading>
                <_Builtin.Heading className="heading-12-white" tag="h1">
                  {"WOHNTRAUM"}
                </_Builtin.Heading>
                <_Builtin.Heading className="heading-9-copy" tag="h3">
                  {"Ihr Zuhause soll Ihr Lieblingsort sein: "}
                  <br />
                  {"stilvoll, harmonisch und funktional"}
                </_Builtin.Heading>
              </_Builtin.Block>
            </_Builtin.Column>
            <_Builtin.Column tag="div">
              <_Builtin.Image
                className="image-8"
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
