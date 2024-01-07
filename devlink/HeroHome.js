import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeroHome.module.css";

export function HeroHome({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "hero-section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container-2")}
        macro={{
          guid: "1ce20cb8-45af-a348-1618-a6f6d1008dd4",
        }}
        tag="div"
        data-ix="fade-in-bottom-page-loads"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-11")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "hero-heading-home-2")}
            tag="h1"
          >
            {"FARBTRAUM"}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "hero-heading-home-2-copy")}
            tag="h2"
          >
            {"FARBENBRINGEN RÄUME ZUM LÄCHELN"}
          </_Builtin.Heading>
          <_Builtin.Link
            className={_utils.cx(_styles, "cta-white")}
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
