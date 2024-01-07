import React from "react";
import * as _Builtin from "./_Builtin";

export function HeroHome({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="hero-section"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Container
        className="container-2"
        macro={{
          guid: "1ce20cb8-45af-a348-1618-a6f6d1008dd4",
        }}
        tag="div"
        data-ix="fade-in-bottom-page-loads"
      >
        <_Builtin.Block className="div-block-11" tag="div">
          <_Builtin.Heading className="hero-heading-home-2" tag="h1">
            {"FARBTRAUM"}
          </_Builtin.Heading>
          <_Builtin.Heading className="hero-heading-home-2-copy" tag="h2">
            {"FARBENBRINGEN RÄUME ZUM LÄCHELN"}
          </_Builtin.Heading>
          <_Builtin.Link
            className="cta-white"
            button={true}
            block=""
            options={{
              href: "#wf-form-Anfrage-Formular",
            }}
          >
            {"KONTAKTIEREN"}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
