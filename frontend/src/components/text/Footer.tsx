import React from "react";

//redux
import { connect } from "react-redux";
import { avaliableLanguages } from "../../constants/language";
import { ApplicationState } from "../../redux/store";
import { enrypted, decrypted } from "../../constants/language";

interface Props {
  currentLanguage: string;
}

const Title: React.FC<Props> = ({ currentLanguage }) => {
  return (
    <p className="text caption-text">
      {currentLanguage === avaliableLanguages.DECRYPTED
        ? decrypted.footer
        : enrypted.footer}
    </p>
  );
};
const mapStateToProps = ({ language }: ApplicationState) => ({
  currentLanguage: language.language,
});

export default connect(mapStateToProps, {})(Title);
