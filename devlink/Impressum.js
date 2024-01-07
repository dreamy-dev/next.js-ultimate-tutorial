import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Impressum.module.css";

export function Impressum({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-4")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "heading-11")} tag="h1">
          {"Impressum"}
        </_Builtin.Heading>
        <_Builtin.Heading className={_utils.cx(_styles, "heading-7")} tag="h3">
          {"Kontaktadresse"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "default-font")}>
          {"FarbTraum   "}
          <br />
          {"HeidiSorg   "}
          <br />
          {" Fidmenstrasse 8            "}
          <br />
          {"6442 Gersau            "}
          <br />
          {"Schweiz            "}
          <br />
          {"info@farbtraum.ch                        "}
          <br />
          <br />
        </_Builtin.Paragraph>
        <_Builtin.Heading className={_utils.cx(_styles, "heading-7")} tag="h3">
          {"Handelregistereintrag"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "default-font")}>
          {"Eingetragener Firmenname: farbTRaum, Heidi Sorg            "}
          <br />
          {"Nummer: CHE‑173.800.416"}
          <br />
        </_Builtin.Paragraph>
        <_Builtin.Heading className={_utils.cx(_styles, "heading-7")} tag="h3">
          {"Haftungsauschschluss"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "default-font")}>
          {
            "Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.            "
          }
          <br />
          {
            "Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.            "
          }
          <br />
          {
            "Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.   "
          }
          <br />
        </_Builtin.Paragraph>
        <_Builtin.Heading className={_utils.cx(_styles, "heading-7")} tag="h3">
          {"Urheberrechte"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "default-font")}>
          {
            "Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der Firma FarbTraum oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.                  "
          }
          <br />
          <br />
        </_Builtin.Paragraph>
        <_Builtin.Heading className={_utils.cx(_styles, "heading-7")} tag="h3">
          {"Webdesign & Entwicklung"}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "paragraph-4", "default-font")}
        >
          {"Der Webauftritt wurde von BeThriven aufgesetzt."}
          <br />
          <_Builtin.Strong>
            <br />
            {"BeThriven"}
            <br />
          </_Builtin.Strong>
          {"www.bethriven.com"}
          <br />
          <_Builtin.Link
            button={false}
            block=""
            options={{
              href: "mailto:bethriven@gmail.com",
            }}
          >
            {"bethriven@gmail.com               "}
            <br />
          </_Builtin.Link>
          <br />
        </_Builtin.Paragraph>
      </_Builtin.Container>
    </_Component>
  );
}
