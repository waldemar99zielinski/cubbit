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
    <h2 className="text h2">
      {currentLanguage === avaliableLanguages.DECRYPTED
        ? decrypted.title
        : enrypted.title}
    </h2>
  );
};
const mapStateToProps = ({ language }: ApplicationState) => ({
  currentLanguage: language.language,
});

export default connect(mapStateToProps, {})(Title);
