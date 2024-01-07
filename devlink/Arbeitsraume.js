import React from "react";
import * as _Builtin from "./_Builtin";

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
        <_Builtin.Block className="section-block" tag="div">
          <_Builtin.Row
            className="columns"
            tag="div"
            columns={{
              main: "6|6",
            }}
          >
            <_Builtin.Column className="column-9" tag="div">
              <_Builtin.Image
                className="image-8"
                width="auto"
                height="auto"
                loading="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/5b43b13e3096f498cad89320/5c06995e53197078d471e4e8_Slider.jpg"
              />
            </_Builtin.Column>
            <_Builtin.Column tag="div">
              <_Builtin.Block className="div-block-13" tag="div">
                <_Builtin.Heading className="white-titel" tag="h3">
                  {"WOHLFÜHL"}
                </_Builtin.Heading>
                <_Builtin.Heading className="heading-12-white" tag="h1">
                  {"ARBEITSRAUM"}
                </_Builtin.Heading>
                <_Builtin.Heading className="heading-9-copy" tag="h3">
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
