import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import "./css/Hamburgers.css";
import "./css/tema.css";

import React from "react";

const Ziyaret = () => {
  return (
    <>
      <div>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          &lt;iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KMJKPWQ"
          height="0" width="0"
          style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        .ptnew-0 {\n            padding-left: 0rem !important;\n            padding-right: 0rem !important;\n        }\n\n        .ptnew-1 {\n            padding-left: 1rem !important;\n            padding-right: 1rem !important;\n        }\n    ",
          }}
        />
        <div className="se-pre-con" />
        <div className="container">
          <div className="row ptnew">
            <div className="col-lg-8 col-md-7 col-sm-12 align-self-center ptnew2">
              <a className="navbar-brand" href="/" title="Home">
                <div className="hidden">
                  <img
                    className="pera-logo component state2 state1-to-state2"
                    src="/Ziyaret/images/PM-2023logo-tr.svg"
                    alt="Pera Müzesi Logo"
                  />
                </div>
              </a>
            </div>
            {/*header rightside*/}
            <div className="col-lg-4 col-md-5 d-none d-md-block align-self-center">
              <div className="float-right ">
                <a
                  className="float-left langField"
                  href="https://www.peramuseum.org/"
                  style={{ margin: "2px 0 0 0" }}
                >
                  <img
                    src="/Ziyaret/images/iconLang.png"
                    style={{ width: "25px", margin: "4px 0 0 0" }}
                  />
                </a>
                <div className="searchbar float-left">
                  <input
                    className="search_input txtSrch1"
                    id="srchBox"
                    type="text"
                    name="txtSrch1"
                    placeholder="Arama..."
                  />
                  <a
                    href="#"
                    id="btnSrchDesktop"
                    className="search_icon btnSrch"
                  >
                    <img
                      src="/Ziyaret/images/iconSearch.png"
                      style={{ width: "25px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav className="ml-auto mb-3 navbar navbar-expand-lg navbar-light bg-white border-top border-bottom border-dark sticky-top navbarheight ptnew-0">
            <div
              className="container m-0 p-0   d-lg-none"
              style={{ width: "85%" }}
              id="mobilMenuTopRow"
            >
              <a
                className="navbar-brand  d-lg-none font-weight-bolder mobileSearchHideField"
                style={{ width: "40%" }}
                href="#"
              >
                MENÜ
              </a>
              <div
                className="mobileSearchField input-group d-none"
                style={{ width: "60%" }}
              >
                <input
                  type="text"
                  name="txtSrch2"
                  id="srchBoxMobile"
                  className="form-control border border-secondary border-right-0 txtSrch2"
                  placeholder="Arama ..."
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-white border border-secondary border-left-0">
                    <i className="fa fa-angle-right fa-lg" />
                  </span>
                </div>
              </div>
              <div
                className="pull-right mr-0 pr-4 d-md-none  border-right border-dark"
                id="mobile-search-language"
              >
                <a
                  className="mobileSearchHideField"
                  href="https://www.peramuseum.org/"
                >
                  <img
                    src="/Ziyaret/images/en_img.svg"
                    alt
                    className="imgnew"
                  />
                </a>
                <a className="linkSearch btnSrch" id="btnSrchMobile" href="#">
                  <img
                    src="/Ziyaret/images/search.svg"
                    alt
                    className="imgnew"
                  />
                </a>
              </div>
            </div>
            <div
              className="navbar-toggler hamburger hamburger--elastic-r ml-auto"
              id="mobilMenuButton"
              data-toggle="collapse"
              data-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </div>
            <div className="collapse navbar-collapse" id="navbarsExample09">
              <ul className="navbar-nav mr-auto justify-content-between w-100 text-uppercase">
                <li className="nav-item dropdown position-static">
                  <a
                    className="nav-link dropdown-toggle font-weight-bolder nav-link22 nav-linkbolder"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bc={1}
                  >
                    ZİYARET
                    <img
                      style={{ display: "none" }}
                      className="d-lg-none d-md-none topImg"
                      src="/Ziyaret/images/leftArrow.svg"
                      alt="sol"
                    />
                  </a>
                  <div className="dropdown-menu">
                    <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/ziyaret"
                    >
                      ZİYARETİNİZİ PLANLAYIN
                    </a>
                    {/*<a class="dropdown-item dropdown-menuitem" href="#">PERA MÜZESİ DOSTLUK PROGRAMI</a>*/}
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/pera-muzesi-hakkinda"
                    >
                      HAKKIMIZDA
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="https://artshop.peramuzesi.org.tr"
                      target="_out"
                    >
                      ARTSHOP
                    </a>
                    <img
                      className="d-none d-lg-none subImg float-right mb-3"
                      style={{ "margin-top": "-40px" }}
                      src="/Ziyaret/images/xButton.svg"
                      alt="kapat"
                    />
                    <div className="w-100new" />
                  </div>
                </li>
                <li className="nav-item dropdown  position-static">
                  <a
                    className="nav-link font-weight-bolder nav-link22 nav-linkbolder"
                    href="/Ajanda"
                  >
                    AJANDA
                  </a>
                </li>
                <li className="nav-item dropdown  position-static menuDropdownTopli menuDropdownTopli">
                  <a
                    className="nav-link dropdown-toggle font-weight-bolder nav-link22 nav-linkbolder"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bc={2}
                  >
                    SANAT
                    <img
                      style={{ display: "none" }}
                      className="d-lg-none d-md-none topImg"
                      src="/Ziyaret/images/leftArrow.svg"
                      alt="sol"
                    />
                  </a>
                  <div className="dropdown-menu">
                    <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/sergi"
                    >
                      GÜNCEL SERGİLER
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/koleksiyon"
                    >
                      KOLEKSİYONLAR
                    </a>
                    <a
                      id="Projects"
                      className="dropdown-item dropdown-menuitem"
                      href="/projeler/1"
                    >
                      PROJELER
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/sergi/dijital-sergiler"
                    >
                      DİJİTAL SERGİLER
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/sergi/gecmis-yillar"
                    >
                      GEÇMİŞ SERGİLER
                    </a>
                    <img
                      className="d-none d-lg-none subImg float-right mb-3"
                      style={{ "margin-top": "-40px" }}
                      src="/Ziyaret/images/xButton.svg"
                      alt="kapat"
                    />
                    <div className="w-100new" />
                  </div>
                </li>
                <span className="bol d-none d-lg-block  bg-dark" />
                <li className="nav-item dropdown  position-static menuDropdownTopli nav-linkmedium">
                  <a
                    className="nav-link dropdown-toggle nav-linklighter"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bc={3}
                  >
                    PERA ÖĞRENME
                    <img
                      style={{ display: "none" }}
                      className="d-lg-none d-md-none topImg"
                      src="/Ziyaret/images/leftArrow.svg"
                      alt="sol"
                    />
                  </a>
                  <div className="dropdown-menu">
                    <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/pera-ogrenme"
                    >
                      GÜNCEL PROGRAMLAR
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/pera-ogrenme/gecmis-programlar"
                    >
                      GEÇMİŞ PROGRAMLAR
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/pera-ogrenme-hakkinda"
                    >
                      PERA ÖĞRENME HAKKINDA
                    </a>
                    <img
                      className="d-none d-lg-none subImg float-right mb-3"
                      style={{ "margin-top": "-40px" }}
                      src="/Ziyaret/images/xButton.svg"
                      alt="kapat"
                    />
                    <div className="w-100new" />
                  </div>
                </li>
                <li className="nav-item dropdown  position-static menuDropdownTopli nav-linkmedium">
                  <a
                    className="nav-link dropdown-toggle nav-linklighter"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bc={4}
                  >
                    PERA FİLM
                    <img
                      style={{ display: "none" }}
                      className="d-lg-none d-md-none topImg"
                      src="/Ziyaret/images/leftArrow.svg"
                      alt="sol"
                    />
                  </a>
                  <div className="dropdown-menu">
                    <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                    <a className="dropdown-item dropdown-menuitem" href="/film">
                      GÜNCEL PROGRAMLAR
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/film/gecmis-programlar"
                    >
                      GEÇMİŞ PROGRAMLAR
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/pera-film-hakkinda"
                    >
                      PERA FİLM HAKKINDA
                    </a>
                    <img
                      className="d-none d-lg-none subImg float-right mb-3"
                      style={{ "margin-top": "-40px" }}
                      src="/Ziyaret/images/xButton.svg"
                      alt="kapat"
                    />
                    <div className="w-100new" />
                  </div>
                </li>
                <li className="nav-item dropdown  position-static menuDropdownTopli nav-linkmedium">
                  <a
                    className="nav-link dropdown-toggle nav-linklighter"
                    href="/yayinlar"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bc={5}
                  >
                    YAYINLAR
                    <img
                      style={{ display: "none" }}
                      className="d-lg-none d-md-none topImg"
                      src="/Ziyaret/images/leftArrow.svg"
                      alt="sol"
                    />
                  </a>
                  <div className="dropdown-menu">
                    <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/yayinlar"
                    >
                      TÜM YAYINLAR
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/yayinlar/2"
                    >
                      SÜRELİ SERGİ KATALOGLARI
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/yayinlar/3"
                    >
                      KOLEKSİYON KATALOGLARI
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/yayinlar/14"
                    >
                      SEMPOZYUM DİZİSİ
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/yayinlar/15"
                    >
                      KÜÇÜK KİTAPLAR DİZİSİ
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/yayinlar/13"
                    >
                      DİJİTAL YAYINLAR
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/yayinlar/20"
                    >
                      SUNA VE İNAN KIRAÇ VAKFI YAYINLARI
                    </a>
                    <img
                      className="d-none d-lg-none subImg float-right ml-auto mb-3"
                      style={{ "margin-top": "-40px" }}
                      src="/Ziyaret/images/xButton.svg"
                      alt="kapat"
                    />
                    <div className="w-100new" />
                  </div>
                </li>
                <li className="nav-item  position-static nav-linkmedium">
                  <a className="nav-link nav-linklighter" href="/Blog">
                    KEŞFET!
                  </a>
                </li>
                <span className="bol  d-none d-lg-block bg-dark" />
              </ul>
              <div
                className="topMenuRight text-right"
                style={{ margin: "0 -16px 0 0" }}
              >
                <a
                  className="pl-2 menu-logo-not-scrolled"
                  href="/"
                  title="Anasayfa"
                >
                  <img
                    className="img-fluid2"
                    src="/Ziyaret/images/PM-2023logo-tr.svg"
                    alt="Pera Müzesi Logo"
                  />
                </a>
                {/*@todo: replace with company social media details*/}
                <p className="menu-dates-not-scrolled">
                  <span className="todaydate">21 Ekim Pazartesi</span>
                  <br />
                  <span className="todaynote">
                    Müze pazartesi günleri kapalıdır.
                  </span>
                </p>
              </div>
            </div>
          </nav>
        </div>
        {/*
    TEST
    */}
        <div
          className="nav-zemin d-none"
          style={{
            "z-index": "1029",
            "background-color": "white",
            width: "100%",
            top: "0",
            position: "fixed",
          }}
        />
        {/*
    <div class="nav-zemin2 d-none" id="uzunzemin" style="z-index: 2; background-color:white;width: 100%;top: 0;position:  fixed;"></div>
  */}
        {/* END TEST */}
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n     .fontum2 h1 {\n        font-family: Raleway; \n    } \n    \n",
          }}
        />
        <div className="container fontum fontum2 first-row">
          <div className="row mb-md-5 mb-3">
            <div className="col-12 mt-4 mb-4">
              <h1 className="fs-40 font-weight-bold">NASIL GELEBİLİRİM?</h1>
            </div>
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11695.76810137832!2d28.97656638287721!3d41.0335665077011!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd94762797dd716c9!2sPera+Museum!5e0!3m2!1sen!2sus!4v1470124543562"
                width="100%"
                height={337}
                frameBorder={0}
                style={{ border: "0" }}
                allowFullScreen
              />
              <p>
                Meşrutiyet Caddesi No:65&nbsp;34430 <br />
                Tepebaşı - Beyoğlu - İstanbul
              </p>
              <p>
                T: +90 212 334 99 00
                <br />
                <a href="mailto:info@peramuzesi.org.tr">
                  info@peramuzesi.org.tr
                </a>
              </p>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-10 col-6 fs-30 h3">Metro</div>
                <div className="col-md-2 col-6 text-right">
                  <a
                    className
                    data-toggle="collapse"
                    href="#collapseOne"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <img
                      src="/Ziyaret/images/plusIcon.png"
                      style={{ width: "40px" }}
                      alt="Metro Alanını Genişlet"
                    />
                  </a>
                </div>
                <div className="col-md-12">
                  <p className="fs-22 collapseTitle">
                    Yenikapı - Hacıosman (M2) hattında, Şişhane durağında...
                  </p>
                </div>
                <div className="collapse" id="collapseOne">
                  <div className="col-md-12 staticcontentbody">
                    Yenikapı - Hacıosman (M2) hattında, Şişhane durağında inin.
                    Şişhane çıkışını kullanın ve Meşrutiyet Caddesi üzerinde
                    ilerleyin. Pera Müzesi 10 dakika yürüme mesafesinde.
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-10 col-6 fs-30 h3">Otobüs</div>
                <div className="col-md-2 col-6 text-right">
                  <a
                    className
                    data-toggle="collapse"
                    href="#collapseTwo"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <img
                      src="/Ziyaret/images/plusIcon.png"
                      style={{ width: "40px" }}
                      alt="Otobüs Alanını Genişlet"
                    />
                  </a>
                </div>
                <div className="col-md-12">
                  <p className="fs-20 collapseTitle">
                    Tarlabaşı Bulvarı, İngiltere Başkonsolosluğu önündeki...
                  </p>
                </div>
                <div className="collapse" id="collapseTwo">
                  <div className="col-md-12 staticcontentbody">
                    Tarlabaşı Bulvarı, İngiltere Başkonsolosluğu önündeki
                    Tepebaşı-Beyoğlu otobüs durağında inin. Pera Müzesi 5 dakika
                    yürüme mesafesinde.
                    <br />
                    <br />
                    Bu duraktan geçen otobüs hatlarını{" "}
                    <a href="https://www.iett.istanbul/tr/main/duraklar/117471/TARLABA%C5%9EI-%C4%B0ETT-Duraktan-Ge%C3%A7en-Hatlar-Durak-Bilgileri-Hatt%C4%B1n-Duraktan-Ge%C3%A7i%C5%9F-Saatleri">
                      görmek için linke tıklayınız
                    </a>
                    .
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-10 col-6 fs-30 h3">
                  Yakındaki Otoparklar
                </div>
                <div className="col-md-2 col-6 text-right">
                  <a
                    className
                    data-toggle="collapse"
                    href="#collapseThree"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <img
                      src="/Ziyaret/images/plusIcon.png"
                      style={{ width: "40px" }}
                      alt="Otopark Alanını Genişlet"
                    />
                  </a>
                </div>
                <div className="col-md-12">
                  <p className="fs-20 collapseTitle">
                    Pera Müzesi’ne aracınızla geliyorsanız...
                  </p>
                </div>
                <div className="collapse" id="collapseThree">
                  <div className="col-md-12 staticcontentbody">
                    Pera Müzesi’ne aracınızla geliyorsanız, Beyoğlu Tepebaşı
                    İSPARK’ı kullanabilirsiniz.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-3 ">
              <p className="border-bottom border-secondary" />
            </div>
          </div>
          <div className="row mb-md-5 mb-5">
            <div className="col-12 staticcontentbody">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="mb-3">Ziyaret Saatleri</h1>
                  <p className="fs-22">
                    Salı - Cumartesi&nbsp; 10.00-19.00
                    <br /> Cuma 10.00 - 22.00
                    <br />
                    Pazar 12.00-18.00 <br />
                    Müze, pazartesi günleri kapalıdır.
                  </p>
                  <p className="fs-22">
                    <strong>
                      Özel Günler
                      <br />
                    </strong>
                    Müze, Ramazan (Şeker) ve Kurban bayramlarının birinci günü
                    ve her yıl 1 Ocak’ta kapalıdır.
                  </p>
                </div>
                <div className="col-md-6">
                  <h1 className="mb-3">Giriş Ücretleri</h1>
                  <div className="colAlt2 floatRight">
                    <p>
                      Tam: 200 TL
                      <br />
                      İndirimli: 100 TL
                      <br />
                      (12 yaş üstü öğrenciler, öğretim görevlileri, 60 yaş ve
                      üstü)
                      <br />
                      Grup: 150 TL (tek seferde 10 bilet ve üstü)
                    </p>
                    <p>
                      <strong>Ücretsiz:</strong>
                      <strong>&nbsp;</strong>Pera Müzesi Dostları, gaziler,
                      şehit ve gazilerin eşleri ve çocukları, engelliler ve her
                      engelliye refakat eden bir kişi, 12 yaş ve altı çocuklar,
                      ICOM kart sahipleri, MMKD üyeleri ve basın mensupları,
                      çarşamba günleri öğrenciler, cuma günleri saat 18.00'dan
                      sonra herkes Pera Müzesi’ni ücretsiz ziyaret edebilir.
                    </p>
                    <p>
                      <strong>
                        Uzun Cuma
                        <br />
                      </strong>
                      Pera Müzesi her cuma 18.00-22.00 saatleri arasında
                      ücretsiz olarak ziyaret edilebilir.
                    </p>
                    <p>
                      <strong>
                        Genç Çarşamba
                        <br />
                      </strong>
                      Pera Müzesi ziyareti ve Pera Film gösterimleri çarşamba
                      günleri tüm öğrencilere ücretsiz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-3 ">
              <p className="border-bottom border-secondary" />
            </div>
          </div>
          <div className="row  mb-md-5 mb-3">
            <div className="col-md-6">
              <img
                className="img-fluid w-100"
                src="/Ziyaret/images/pera-cafe.jpg"
                alt="Pera Café"
              />
              <p></p>
              <h2 className="fs-40">Pera Café</h2>
              <p />
              <p className="staticcontentbody"></p>
              <div className="colAlt1 floatLeft fs-22">
                <p className="fs-22">
                  Pera Müzesi’nin, 1893 yılında inşa edilen Hotel Bristol
                  geçmişine ve 1900'lerin Pera'sına gönderme yapan,{" "}
                  <em>art deco</em> bir yaklaşımın ağırlıkta olduğu Pera Café,
                  ziyaretçiler için özel bir dinlenme ve&nbsp;sosyalleşme
                  mekânı. Salatalar, sandviçler, özel makarna çeşitleri ve
                  pastacılık ürünlerinin sunulduğu Café, sergilere paralel
                  olarak hazırlanan farklı dünya mutfağı temalı özel mönüler de
                  hazırlıyor.
                </p>
                <div className="c-message_kit__gutter">
                  <div className="c-message_kit__gutter__right">
                    <div className="c-message_kit__blocks c-message_kit__blocks--rich_text">
                      <div className="c-message__message_blocks c-message__message_blocks--rich_text">
                        <div className="p-block_kit_renderer">
                          <div className="p-block_kit_renderer__block_wrapper p-block_kit_renderer__block_wrapper--first">
                            <div className="p-rich_text_block">
                              <div className="p-rich_text_section">
                                <a
                                  href="https://www.peramuzesi.org.tr//Ziyaret/images/pera%20cafe/menu-tr-05-07-24.pdf"
                                  target="_blank"
                                >
                                  Menüyü incelemek için tıklayın.
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p />
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid w-100"
                src="/Ziyaret/images/artshop.jpg"
                alt="Artshop"
              />
              <p></p>
              <h2 className="fs-40">Artshop</h2>
              <p />
              <p className="staticcontentbody"></p>
              <div className="colAlt1 floatLeft fs-22">
                <p>
                  Pera Müzesi’nin, açılışından bu yana hizmet veren Müze
                  mağazası, ziyaretçilerin Müze'yi, sergileri, katıldıkları
                  etkinlikleri anımsayacakları, özel olarak tasarlanan geniş
                  yelpazedeki ürünleri ve yayınları sunuyor.&nbsp;
                </p>
                Artshop salı – cumartesi günleri&nbsp;
                <strong>10.00 – 19.00</strong>&nbsp;arası, pazar günleri{" "}
                <strong>12.00 - 18.00</strong> arası açıktır.
                <br />
                Pazartesi günleri kapalıdır.&nbsp;
              </div>
              <p />
            </div>
            <div className="col-md-12 mt-3 ">
              <p className="border-bottom border-secondary" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <img
                className="img-fluid w-100"
                src="/Ziyaret/images/sesli-rehber.jpg"
                alt="Ücretsiz Sesli Rehber"
              />
              <p></p>
              <h2 className="fs-40">Ücretsiz Sesli Rehber</h2>
              <p />
              <p className="staticcontentbody"></p>
              <div className="colAlt1 floatLeft fs-22">
                <p>
                  Koleksiyon sergilerimizi Meltem Cumbul, Yekta Kopan ve Mert
                  Fırat seslendiriyor.&nbsp;Sesli rehberimiz Suna ve İnan Kıraç
                  Vakfı Pera Müzesi'nin koleksiyonlarından derlenen “Kesişen
                  Dünyalar: Elçiler ve Ressamlar”, “Osman Hamdi Bey”, “Kahve
                  Molası: Kütahya Çini ve Seramikleri” ve “Anadolu Ağırlık ve
                  Ölçüleri” sergilerini anlatıyor.
                </p>
                <p>
                  Mert Fırat tarafından seslendirilen yetişkinlere yönelik sesli
                  rehberin yanı sıra, Türkiye’de ilk defa çocuklara özel olarak
                  hazırlanmış sesli rehber de ziyaretçileri bekliyor. Bu sesli
                  rehberle çocuklar koleksiyonları eğlenceli bir hikâye
                  eşliğinde keşfedebiliyor, zamanda yolculuk yapan bir elçiyle
                  Türk hareminden bir maymunun koleksiyonlarımızdan ilham alan
                  hikayesini Meltem Cumbul ile Yekta Kopan’ın sesinden dinliyor.
                </p>
              </div>
              <p />
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid w-100"
                src="/Ziyaret/images/engelli-ziyaretciler.jpg"
                alt="Engelli Ziyaretçiler"
              />
              <p></p>
              <h2 className="fs-40">Engelli Ziyaretçiler</h2>
              <p />
              <p className="staticcontentbody"></p>
              <p>
                Pera Müzesi ziyaretçilerinin farklı ihtiyaçları için de çeşitli
                servisler sunuyor.
              </p>
              <p>
                Müze girişi, tekerlekli sandalye kullanan veya merdiven
                kullanamayan ziyaretçiler için uygun. Tüm katlara asansörle
                ulaşılabiliyor. Tuvaletler engelli ziyaretçilerin kullanımına
                uygun biçimde tasarlanmış. Ayrıca engelli ziyaretçilerden ve
                onlara eşlik eden bir kişiden giriş ücreti alınmıyor.
              </p>
              <p />
            </div>
            <div className="col-md-6 mt-4">
              <img
                className="img-fluid w-100"
                src="/Ziyaret/images/osmanhamdibeyvr.jpg"
                alt="Osman Hamdi Bey’in<br> Dünyasına Yolculuk<br>Sanal Gerçeklik Deneyimi"
              />
              <p></p>
              <h2 className="fs-40">
                Osman Hamdi Bey’in
                <br /> Dünyasına Yolculuk
                <br />
                Sanal Gerçeklik Deneyimi
              </h2>
              <p />
              <p className="staticcontentbody"></p>
              <p>
                Osman Hamdi Bey’i yüz binlerce sanatseverle buluşturan Pera
                Müzesi, ziyaretçilere bu kez de onun kurgusal çalışma ortamını
                ve çok sevilen tablosu Kaplumbağa Terbiyecisi’ni sanal gerçeklik
                teknolojisi aracılığıyla deneyimleme fırsatı veriyor.
              </p>
              <p />
            </div>
            <div className="col-md-6 mt-4">
              <img
                className="img-fluid w-100"
                src="/Ziyaret/images/okul-gruplari-2.jpg"
                alt="Okul Grupları"
              />
              <p></p>
              <h2 className="fs-40">Okul Grupları</h2>
              <p />
              <p className="staticcontentbody"></p>
              <p>
                Okul gruplarının müze ziyareti için serbest gezi günleri salı,
                çarşamba, perşembe, cumadır. Ziyaretler, en fazla 30 öğrencinin
                2 öğretmen eşliğinde katılımına uygundur. Rezervasyon
                gereklidir.
              </p>
              <p>
                <a href="https://www.peramuzesi.org.tr/rezervasyon/serbestgrup">
                  <strong>
                    Serbest gezi rezervasyonu yaptırmak için tıklayın!
                  </strong>
                </a>
              </p>
              <p>
                Sergilere yönelik rehberli tur ve atölyelere rezervasyon
                yaptırmak için lütfen etkinlik sayfasındaki rezervasyon formunu
                doldurunuz.
              </p>
              <p>
                Sıkça sorulan sorulara ulaşmak için&nbsp;
                <a href="https://www.peramuzesi.org.tr/faq">tıklayınız</a>.
              </p>
              <p />
            </div>
            <div className="col-md-6">&nbsp;</div>
          </div>
        </div>
        {/*captcha için*/}
        {/*captcha için*/}
        <div
          className="container-fluid first-row"
          style={{ "background-color": "#FBEFEF" }}
        >
          <div className="row">
            <div className="container">
              <div
                className="row "
                style={{ "margin-top": "40px", "margin-bottom": "40px" }}
              >
                <div className="col-md-12 mb-4">
                  <h1 className="h1 text-uppercase">BİZE ULAŞIN</h1>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h5>İletişim Bilgileri</h5>
                  <p />
                  <p>
                    Meşrutiyet Caddesi No:65&nbsp;34430 <br />
                    Tepebaşı - Beyoğlu - İstanbul
                  </p>
                  <p>
                    T: +90 212 334 99 00
                    <br />
                    <a href="mailto:info@peramuzesi.org.tr">
                      info@peramuzesi.org.tr
                    </a>
                  </p>
                  <p />
                </div>
                <div className="col-md-6 col-sm-12 pb-2">
                  <form
                    action="/pera-muzesi-hakkinda"
                    className="form"
                    method="post"
                  >
                    <input
                      name="__RequestVerificationToken"
                      type="hidden"
                      defaultValue="yOTL0ndAtc-Bpcywz0UUcTumX5RVlzHyc1WtW_Hz0KToeXqFhK4efIkGn3NlS81udt_85QwbLYTGB84JmJuTlSi5mkEllo3siJ3gwR-jCqQ1"
                    />{" "}
                    <h5>İletişim Formu</h5>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="NameSurname"
                        name="NameSurname"
                        placeholder="Adınız Soyadınız"
                        required="required"
                        type="text"
                        defaultValue
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="Email"
                        name="Email"
                        placeholder="E-Posta Adresiniz"
                        required="required"
                        type="email"
                        defaultValue
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        cols={20}
                        id="Message"
                        name="Message"
                        placeholder="Mesajınız"
                        required="required"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12">
                      <div className="row align-items-center justify-content-between">
                        <div
                          className="g-recaptcha"
                          data-theme="light"
                          data-sitekey="6LfllQkUAAAAAKkDXPBkhn6XqB3o1_wV_Q1m9OhL"
                        />
                        <span
                          className="field-validation-valid"
                          data-valmsg-for="IsCaptchaValid"
                          data-valmsg-replace="true"
                        />
                        <button
                          type="submit"
                          className="btn btn-outline-secondary px-4 ml-auto"
                          style={{ "border-radius": "40px" }}
                        >
                          Gönder
                        </button>
                      </div>
                    </div>
                  </form>{" "}
                  <div style={{ "font-size": "10px", "padding-top": "10px" }}>
                    <p>
                      Bize iletmiş olduğunuz bilgilerde aşağıda sıralanan özel
                      nitelikli kişisel verilerin yer almadığından emin olmanızı
                      rica ederiz: Irk, etnik köken, siyasi düşünce, felsefi
                      inanç, din, mezhep veya diğer inançlar, kılık ve kıyafet,
                      dernek, vakıf ya da sendika üyeliği, sağlık, cinsel hayata
                      ilişkin veriler, ceza mahkûmiyeti ve güvenlik
                      tedbirleriyle ilgili veriler, biyometrik ve genetik
                      veriler.
                    </p>
                    <p>
                      Talep, şikayet, öneri ve isteklerinizi bizimle paylaşmanız
                      dolayısıyla elde ettiğimiz kişisel verilerinizin işlenmesi
                      hakkındaki{" "}
                      <a href="/kvkk#aydinlatmametni">
                        SVİKV İletişim Süreci Kişisel Verilerin İşlenmesi
                        Aydınlatma Metni için lütfen tıklayınız
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cookie-bar">
          <img src="/Ziyaret/images/close2.png" className="cookie-close" />
          Web sitemizi kullanarak çerezlere izin vermektesiniz. Ayrıntılı bilgi
          için <a href="/cerez-politikasi">çerez politikamızı</a>{" "}
          inceleyebilirsiniz.
        </div>
        <div className="footer-background pb-lg-3">
          <div className="container">
            <div className="row" style={{ height: "30px" }} />
            <div className="row">
              <div className="col-lg-3 col-md-12" style={{ color: "#b5b5b5" }}>
                <div className="row">
                  <div className="col-lg-12 mb-3 col-md-6">
                    <div className="footer-left-section">
                      <h5 className="font-weight-bold mb-3 pt-3">
                        ZİYARET SAATLERİ
                      </h5>
                      <p>Salı - Cumartesi 10.00 - 19.00</p>
                      <p>Cuma 10.00 - 22.00</p>
                      <p>Pazar 12.00 - 18.00</p>
                      <p>Müze Pazartesi</p>
                      <p>günü kapalıdır.</p>
                      {/*<h6 class="pt-3">Uzun Cuma</h6>
                          <p>18:00 - 22:00 arası ücretsiz olarak</p>
                          <p>ziyaret edilebilir.</p>*/}
                      <h5 className="pt-3">Genç Çarşamba</h5>
                      <p>Çarşamba günleri öğrenciler müzeyi</p>
                      <p>ücretsiz ziyaret edebilir.</p>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 m-0">
                    <div className="footer-left-section">
                      <h5 className="font-weight-bold mb-3">GİRİŞ ÜCRETLERİ</h5>
                      <p>Tam: 200 TL</p>
                      <p>İndirimli: 100 TL</p>
                      <p>Grup: 150 TL (toplu 10 bilet ve üstü)</p>
                    </div>
                  </div>
                  <div className="vl h-100 d-none d-lg-block bg-secondary" />
                </div>
                <hr className="d-lg-none d-block" />
              </div>
              <div className="col-lg-9 col-md-12 col-sm-8 col-xs-12 right-text-footer plnew">
                <div className="row align-items-center mt-lg-5 mt-2">
                  {/*<div class="col-md-7 col-sm-8 col-xs-12 col-lg-8  d-flex justify-content-center order-2 order-md-first">*/}
                  <div className="col-md-7 col-sm-8 col-xs-12 col-lg-7  d-flex order-2 order-md-first social-margin-right">
                    <ul className="social-network social-circle pt-2 plnew3">
                      <li>
                        <a
                          target="_blank"
                          href="https://www.facebook.com/PeraMuzesi.Museum"
                          className="icoFacebook"
                          title="Facebook"
                          rel="noreferrer nofollow"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://twitter.com/PeraMuzesi"
                          className="icoTwitter"
                          title="Twitter"
                          rel="noreferrer nofollow"
                        >
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.instagram.com/peramuzesi/"
                          className="icoInstagram"
                          title="Instagram"
                          rel="noreferrer nofollow"
                        >
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.youtube.com/user/PeraMuzesi"
                          className="icoYoutube"
                          title="Youtube"
                          rel="noreferrer nofollow"
                        >
                          <i className="fa fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://open.spotify.com/user/peram%C3%BCzesi"
                          className="icoRss"
                          title="Spotify"
                          rel="noreferrer nofollow"
                        >
                          <i className="fa fa-spotify " />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://artsandculture.google.com/partner/pera-museum?hl=tr"
                          className="icoGoogleArtsCulture"
                          title="Google Arts & Culture"
                          rel="noreferrer nofollow"
                        >
                          <i
                            className="fa fa-university"
                            style={{ margin: "0 0 0 2px" }}
                          />
                        </a>
                      </li>
                      {/* <li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a></li>
                          <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li> */}
                    </ul>
                  </div>
                  <div className="col-md-5 col-sm-4 col-xs-12 col-lg-5 float-left order-1 plnew2">
                    <form action="/e-bulten-kayit" method="post">
                      <input
                        name="__RequestVerificationToken"
                        type="hidden"
                        defaultValue="mG1BvWjZbbP7eef_gtX0MUhdQcJTc_e0D0QpEzPP0gkjOKoiwKBjkjui1_xBt_0avH2dW4cDcCLAFXnHxqM2hI5lC8zveDnmxS2bUKwfIdM1"
                      />{" "}
                      <h2
                        className="font-weight-bold"
                        style={{ "font-size": "14px", color: "#333333" }}
                      >
                        E-BÜLTENE ÜYE OLMAK İSTİYORUM
                      </h2>
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="E-Posta Adresiniz"
                          aria-label="E-Posta Adresiniz"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary bg-danger px-4"
                            type="submit"
                          >
                            <i className="font-weight-bold text-white fa fa-angle-right fa-lg" />
                          </button>
                        </div>
                      </div>
                    </form>{" "}
                  </div>
                </div>
                <hr />
                <div className="altmenu row justify-content-between pt-sm-1 pt-lg-5 pt-md-2 mt-lg-2 mt-5">
                  <div className="col-md-3 col-6">
                    <h5>
                      <a href="/pera-muzesi-hakkinda">Hakkımızda</a>
                    </h5>
                    <h5>
                      <a href="/basin-bultenleri">Basın</a>
                    </h5>
                  </div>
                  <div className="col-md-3 col-6">
                    <h5>
                      <a href="/ziyaret">İletişim</a>
                    </h5>
                    <h5>
                      <a href="/icerik/engelli-ziyaretciler/1532">
                        {" "}
                        Engelli Ziyaretçiler
                      </a>
                    </h5>
                  </div>
                  <div className="col-md-3 col-6">
                    <h5>
                      <a href="/icerik/acik-pozisyonlar/1531">
                        {" "}
                        Açık Pozisyonlar
                      </a>
                    </h5>
                    <h5>
                      <a href="/faq"> Sıkça Sorulan Sorular</a>
                    </h5>
                  </div>
                  <div className="col-md-3 col-6">
                    <h5>
                      <a href="/mekan-kiralama">Mekan Kiralama</a>
                    </h5>
                    <h5>
                      <a href="/kvkk">KVKK</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row pt-lg-2">
              <div
                className="col-lg-3 col-12"
                style={{ "margin-top": "40px", "margin-bottom": "40px" }}
              >
                <a
                  href="https://www.sunaveinankiracvakfi.org.tr/"
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="float-left pr-2"
                    src="/Ziyaret/images/svikv-tr-logo.svg"
                    height={40}
                    alt="Suna ve İnan Kıraç Vakfı Logo"
                  />
                </a>
                {/*<div class="vl h-100 d-none d-lg-block bg-secondary"></div>*/}
              </div>
              <div
                className="col-lg-4 col-12 plnew4"
                style={{
                  "margin-top": "40px",
                  "margin-bottom": "40px",
                  "padding-left": "60px",
                }}
              >
                <a
                  href="https://www.iae.org.tr/"
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="float-left pr-2"
                    src="/Ziyaret/images/iae-tr-logo.svg"
                    height={40}
                    alt="İstanbul Araştırmaları Enstitüsü Logo"
                  />
                </a>
                <hr className="d-md-none d-sm-block dpn" />
              </div>
              <div
                className="col-lg-5 col-12 w-100  h-100 d-flex justify-content-md-end justify-content-first pt-2"
                style={{ "margin-top": "40px", "margin-bottom": "40px" }}
              >
                <p
                  style={{
                    "font-size": "13px",
                    color: "#333333",
                    "font-weight": "500",
                  }}
                >
                  © 2024 Tüm Hakları Saklıdır |{" "}
                  <a className="no-link" href="/kullanim-kosullari">
                    Kullanım Koşulları
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
        {/*Required JavaScript Libraries */}
      </div>
    </>
  );
};

export default Ziyaret;
