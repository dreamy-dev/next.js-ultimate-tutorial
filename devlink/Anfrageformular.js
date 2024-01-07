import React from "react";
import * as _Builtin from "./_Builtin";

export function Anfrageformular({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section light"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container className="container-8" tag="div">
        <_Builtin.Block className="section-title-group" tag="div">
          <_Builtin.Heading className="heading h2" tag="h2">
            {"Haben Sie Interesse?"}
          </_Builtin.Heading>
          <_Builtin.Block className="paragraph-2" tag="div">
            {
              "Füllen Sie das Kontaktformular aus, um eine unverbindliche Anfrage zu senden."
            }
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.FormWrapper className="form-wrapper squeezed">
          <_Builtin.FormForm
            className="form"
            name="wf-form-Anfrage-Formular"
            data-name="Anfrage Formular"
            redirect="/anfrage-erhalten"
            data-redirect="/anfrage-erhalten"
            method="get"
            id="wf-form-Anfrage-Formular"
          >
            <_Builtin.FormBlockLabel className="form-label" htmlFor="name-2">
              {"Name:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className="form-field"
              name="name-2"
              data-name="Name 2"
              type="text"
              maxLength={256}
              required={true}
              disabled={false}
              autoFocus={false}
              id="name-2"
            />
            <_Builtin.FormBlockLabel className="form-label" htmlFor="email-2">
              {"Firma:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className="form-field"
              name="email-2"
              data-name="Email 2"
              type="text"
              maxLength={256}
              disabled={false}
              required={false}
              autoFocus={false}
              id="email-2"
            />
            <_Builtin.FormBlockLabel className="form-label" htmlFor="email-3">
              {"Adresse:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className="form-field"
              name="email-2"
              data-name="Email 2"
              type="text"
              maxLength={256}
              disabled={false}
              required={false}
              autoFocus={false}
              id="email-2"
            />
            <_Builtin.FormBlockLabel className="form-label" htmlFor="email-3">
              {"E-Mail Adresse:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className="form-field"
              name="email-2"
              data-name="Email 2"
              type="email"
              maxLength={256}
              required={true}
              disabled={false}
              autoFocus={false}
              id="email-2"
            />
            <_Builtin.FormBlockLabel className="form-label" htmlFor="email-3">
              {"Telefonnummer"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className="form-field"
              name="email-2"
              data-name="Email 2"
              type="tel"
              maxLength={256}
              disabled={false}
              required={false}
              autoFocus={false}
              id="email-2"
            />
            <_Builtin.FormBlockLabel className="form-label" htmlFor="field-2">
              {"Bemerkung:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextarea
              className="form-field text-area"
              name="field-2"
              maxLength={5000}
              data-name="Field 2"
              required={false}
              autoFocus={false}
              id="field-2"
            />
            <_Builtin.FormButton
              className="button cta-dark"
              type="submit"
              value="Anfrage absenden"
              data-wait="Vielen Dank!"
            />
          </_Builtin.FormForm>
          <_Builtin.FormSuccessMessage className="success-wrapper">
            <_Builtin.Paragraph className="success-message">
              {
                "Vielen Dank, wir haben Ihre Anfrage erhalten und werden uns in den nächsten Tagen bei Ihnen melden. "
              }
              <br />
              <br />
              {"Möchten Sie noch mehr über FarbTraum erfahren?"}
            </_Builtin.Paragraph>
            <_Builtin.Link
              className="link-3"
              button={true}
              block=""
              options={{
                href: "/uber",
              }}
            >
              {"Mehr über Farbtraum erfahren"}
            </_Builtin.Link>
          </_Builtin.FormSuccessMessage>
          <_Builtin.FormErrorMessage className="error-wrapper">
            <_Builtin.Paragraph className="error-message">
              {
                "Ups, etwas ist schief gegangen beim Absenden des Kontakformulars. Bitte überprüfen Sie IhreInformationen noch einmal oder setzen Sie sich direkt mit uns inKontakt unter "
              }
              <_Builtin.Link
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Span>
                  <_Builtin.Strong className="bold-text">
                    {"Kontakt"}
                  </_Builtin.Strong>
                </_Builtin.Span>
              </_Builtin.Link>
            </_Builtin.Paragraph>
          </_Builtin.FormErrorMessage>
        </_Builtin.FormWrapper>
      </_Builtin.Container>
    </_Component>
  );
}
