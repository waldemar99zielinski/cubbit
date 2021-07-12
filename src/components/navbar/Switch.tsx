import React from "react";
import "./Navbar.css";

//redux
import { connect } from "react-redux";
import { avaliableLanguages } from "../../constants/language";
import { ApplicationState } from "../../redux/store";
import { changeLanguage } from "../../redux/actions/languageAction";
import { enrypted, decrypted } from "../../constants/language";

interface Props {
  currentLanguage: string;
  changeLanguage: (language: string) => any;
}

const Switch: React.FC<Props> = ({ currentLanguage, changeLanguage }) => {
  const change = () => {
    //silly :0
    if (currentLanguage === avaliableLanguages.DECRYPTED) {
      changeLanguage(avaliableLanguages.ENCRYPTED);
    } else {
      changeLanguage(avaliableLanguages.DECRYPTED);
    }

    console.log(currentLanguage);
  };

  return (
    <div className="switch-container" onClick={() => change()}>
      <div className="switch-frame">
        <div
          className={
            currentLanguage === avaliableLanguages.ENCRYPTED
              ? "switch-element text on-check"
              : "switch-element text"
          }
        >
          {currentLanguage === avaliableLanguages.DECRYPTED
            ? "Decrypted"
            : "Encrypted"}
        </div>
        <div
          className={
            currentLanguage === avaliableLanguages.DECRYPTED
              ? "switch-element text on-check"
              : "switch-element text"
          }
        >
          {currentLanguage === avaliableLanguages.DECRYPTED
            ? decrypted.switch
            : enrypted.switch}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ language }: ApplicationState) => ({
  currentLanguage: language.language,
});
const mapDispatchToProps = (dispatch: any) => {
  return {
    changeLanguage: (language: string) => {
      dispatch(changeLanguage(language));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Switch);
