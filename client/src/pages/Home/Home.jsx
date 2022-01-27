import React from "react";
import logo from "../../assets/images/hijaab-uz-logo.jpg";
import telegramLogo from "../../assets/icons/telegram.svg";
import instagramLogo from "../../assets/icons/instagram.svg";
function Home() {
  return (
    <div className="home bg-white shadow-lg rounded-3 p-5 mt-3">
      <div className="row">
        <div className="offset-lg-2 col-lg-3 col-12 d-flex justify-content-center">
          <img
            src={logo}
            alt="hijaab logo"
            width={150}
            height={150}
            className="rounded-circle"
          />
        </div>
        <div className="offset-lg-1 col-lg-6 col-12">
          <h4 className="text-center lh-lg fw-bold">Assalomu alaykum!</h4>
          <h5 className="text-center lh-sm fw-bolder">
            Hijaab_uzning web-sahifasiga xush kelibsiz!
          </h5>
          <p className="lh-base">
            &nbsp;&nbsp;Ushbu web sahifada biz o`zimiz muhim deb hisoblagan
            mavzularda postlar e`lon qilib boramiz. Agar sizni ham shu mavzular
            qiziqtirsa bizga ijtimoiy tarmoqlarda qo`shilishing va shu
            mavzularda muhokamalarda ishtirok etishingiz mumkin.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 mx-lg-auto">
          <h5 className="fw-bold text-center mt-3">
            Ijtimoiy tarmoqdagi sahifalarimiz:
          </h5>
          <div className="mt-2 d-flex justify-content-center">
            <a
              href="https://t.me/hijaab_uz"
              className="btn btn-success"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={telegramLogo}
                alt="telegram logo"
                width={24}
                height={24}
                className="me-1"
              />
              <span>Hijaab_uz</span>
            </a>
            <a
              href="https://www.instagram.com/hijaab_uz"
              className="btn btn-success ms-2"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagramLogo}
                alt="instagram logo"
                width={24}
                height={24}
                className="me-1"
              />
              <span>Hijaab_uz</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
