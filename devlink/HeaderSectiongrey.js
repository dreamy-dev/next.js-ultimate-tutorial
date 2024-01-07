import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeaderSectiongrey.module.css";

export function HeaderSectiongrey({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "header-section-grey")}
      grid={{
        type: "section",
      }}
      tag="div"
      id="headersection-grey"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "hero-block")} tag="div">
          <_Builtin.Row
            className={_utils.cx(_styles, "columns-2")}
            tag="div"
            columns={{
              main: "7|5",
            }}
          >
            <_Builtin.Column
              className={_utils.cx(_styles, "column-9")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading-12-copy")}
                tag="h1"
              >
                {"FARB- UND"}
                <br />
                {"RAUMBERATUNG"}
              </_Builtin.Heading>
            </_Builtin.Column>
            <_Builtin.Column tag="div">
              <_Builtin.Image
                className={_utils.cx(_styles, "image-8")}
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
