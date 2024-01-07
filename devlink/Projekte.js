import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1535665818247}},"actionLists":{"a":{"id":"a","title":"Float in Title","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"050368a0-b4d6-4482-12a6-a27d0ff70d27"},"value":0.14,"unit":""}}]},{"actionItems":[{"id":"a-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"050368a0-b4d6-4482-12a6-a27d0ff70d27"},"value":0.02,"unit":""}}]},{"actionItems":[{"id":"a-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"id":"050368a0-b4d6-4482-12a6-a27d0ff70d27"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1535665828117}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Projekte({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="section accent"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container tag="div">
        <_Builtin.Block className="section-title-group" tag="div">
          <_Builtin.Heading
            className="hero-heading"
            data-w-id="050368a0-b4d6-4482-12a6-a27d0ff70d27"
            tag="h1"
          >
            {"Projekte in Wohnräumen"}
          </_Builtin.Heading>
          <_Builtin.Block tag="div">
            <_Builtin.Heading className="section-heading centered" tag="h2">
              {"Ihr Zuhause soll ihr Lieblingsort sein: "}
              <br />
              {"stilvoll, harmonisch und funktional"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className="paragraph-left-aligned _100">
              {
                "Gerne erstelle ich für Ihre Inneneinrichtung ein Wohnkonzept mit Ideen und konkreten Vorschlägen zur Möbelauswahl, Farben, Materialien, Boden- und Wandgestaltung. Individuell auf Ihre persönlichen Bedürfnisse und auf Ihr Budget zugeschnitten. "
              }
              <br />
              <br />
              {"- Neubau / Renovation"}
              <br />
              {"- Umzug (was kommt mit was wird ergänzt)"}
              <br />
              {"- Küchen- /Badumbau"}
              <br />
              {"- Ferienwohnungen"}
              <br />
              {"- Fassaden"}
              <br />
              <br />
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Heading className="section-heading centered" tag="h2">
            {"Umgesetzte Projekte"}
          </_Builtin.Heading>
          <_Builtin.Block className="section-subheading center" tag="div">
            {"Eine kleine Auswahl von bereits umgesetzten Projekten."}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
      <_Builtin.NotSupported _atom="DynamoWrapper" />
    </_Component>
  );
}
