import React from "react";
import * as _Builtin from "./_Builtin";

export function HeaderSectiongrey({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="header-section-grey"
      grid={{
        type: "section",
      }}
      tag="div"
      id="headersection-grey"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Block className="hero-block" tag="div">
          <_Builtin.Row
            className="columns-2"
            tag="div"
            columns={{
              main: "7|5",
            }}
          >
            <_Builtin.Column className="column-9" tag="div">
              <_Builtin.Heading className="heading-12-copy" tag="h1">
                {"FARB- UND"}
                <br />
                {"RAUMBERATUNG"}
              </_Builtin.Heading>
            </_Builtin.Column>
            <_Builtin.Column tag="div">
              <_Builtin.Image
                className="image-8"
                width="430"
                height="auto"
                loading="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/5b43b13e3096f498cad89320/5c06d62ef50d56ce2fc924ea__ProjektAugenpraxis%20Peter%20DSC2157_quadratisch-min.jpg"
              />
            </_Builtin.Column>
          </_Builtin.Row>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
