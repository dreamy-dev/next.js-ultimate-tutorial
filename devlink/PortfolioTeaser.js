import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PortfolioTeaser.module.css";

export function PortfolioTeaser({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      grid={{
        type: "section",
      }}
      tag="section"
      id="portfolio-teaser"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "heading-14")} tag="h2">
          {"Eine kleine Selektion"}
        </_Builtin.Heading>
        <_Builtin.NotSupported _atom="DynamoWrapper" />
      </_Builtin.Container>
      <_Builtin.Link
        className={_utils.cx(_styles, "cta-dark")}
        button={true}
        block=""
        options={{
          href: "#",
        }}
      >
        {"ALLE PROJEKTE ANSEHEN"}
      </_Builtin.Link>
    </_Component>
  );
}
