import React from "react";
import * as _Builtin from "./_Builtin";

export function PortfolioTeaser({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section"
      grid={{
        type: "section",
      }}
      tag="section"
      id="portfolio-teaser"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Heading className="heading-14" tag="h2">
          {"Eine kleine Selektion"}
        </_Builtin.Heading>
        <_Builtin.NotSupported _atom="DynamoWrapper" />
      </_Builtin.Container>
      <_Builtin.Link
        className="cta-dark"
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
