import React from "react";

const Ogrenme = () => {
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
                    src="/Ogrenme/images/PM-2023logo-tr.svg"
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
                    src="/Ogrenme/images/iconLang.png"
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
                      src="/Ogrenme/images/iconSearch.png"
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
                    src="/Ogrenme/images/en_img.svg"
                    alt
                    className="imgnew"
                  />
                </a>
                <a className="linkSearch btnSrch" id="btnSrchMobile" href="#">
                  <img
                    src="/Ogrenme/images/search.svg"
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
                      src="/Ogrenme/images/leftArrow.svg"
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
                      src="/Ogrenme/images/xButton.svg"
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
                      src="/Ogrenme/images/leftArrow.svg"
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
                      src="/Ogrenme/images/xButton.svg"
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
                      src="/Ogrenme/images/leftArrow.svg"
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
                      src="/Ogrenme/images/xButton.svg"
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
                      src="/Ogrenme/images/leftArrow.svg"
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
                      src="/Ogrenme/images/xButton.svg"
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
                      src="/Ogrenme/images/leftArrow.svg"
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
                      src="/Ogrenme/images/xButton.svg"
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
                    src="/Ogrenme/images/PM-2023logo-tr.svg"
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
        <div className="container pb-3 first-row">
          <div className="row">
            <div className="col-md-12 mt-3">
              <div className="row">
                <div className="col-md-12 bold_text fs-40" style={{}}>
                  <h1
                    id="GnlPrg"
                    className="BitcraftLang border-bottom border-secondary"
                    style={{ "font-weight": "600" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-3 ">
              <div className="row">
                <div
                  className="col-lg-6 mt-3  col-md-6"
                  style={{ margin: "0 0 30px 0" }}
                >
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/pera-ogrenme/program/tahayyulden-olasiliga/4397">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/Ogrenme/images/program-gorseli-1.jpg"
                        alt="Tahayyülden Olasılığa"
                      />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title listtitle">
                        Tahayyülden Olasılığa
                      </h3>
                      <h3
                        className="card-title listtarih"
                        style={{ "font-weight": "400" }}
                      >
                        11 Ekim - 22 Kasım 2024
                      </h3>
                      <p className="listdetail" />
                      <p>
                        Program geometrik tekrarlar, bilgisayar kodlamaları,
                        renk kombinasyonları ve rastlantısal tasarımlar
                        aracılığı ile <em>Hesaplar ve Tesadüfler</em> sergisinin
                        algoritma ve matematiği sanatla birleştiren içeriğini
                        deneyimlemek isteyen yetişkinlere çevrimiçi ve yüz yüze
                        atölyeler sunuyor.
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 mt-3  col-md-6"
                  style={{ margin: "0 0 30px 0" }}
                >
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/pera-ogrenme/program/rastlantinin-duzeni/4395">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/Ogrenme/images/rastlantinin-duzeni.jpg"
                        alt="Rastlantının Düzeni"
                      />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title listtitle">
                        Rastlantının Düzeni
                      </h3>
                      <h3
                        className="card-title listtarih"
                        style={{ "font-weight": "400" }}
                      >
                        26 Eylül 2024 - 26 Ocak 2025
                      </h3>
                      <p className="listdetail" />
                      <p>
                        Sanatla buluşturan, farklı yaş gruplarına yönelik hem
                        çevrimiçi hem yüz yüze gerçekleşen, eğlenceli ve ilham
                        dolu sergi turları ve atölyeler sunuyor.
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 mt-3  col-md-6"
                  style={{ margin: "0 0 30px 0" }}
                >
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/pera-ogrenme/program/koleksiyon-ogrenme-programlari/1273">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/Ogrenme/images/koleksiyonogrenme2.jpeg"
                        alt="Koleksiyon Öğrenme Programları"
                      />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title listtitle">
                        Koleksiyon Öğrenme Programları
                      </h3>
                      <h3
                        className="card-title listtarih"
                        style={{ "font-weight": "400" }}
                      ></h3>
                      <p className="listdetail" />
                      <p>
                        Pera Müzesi Öğrenme Programları, Suna ve İnan Kıraç
                        Vakfı koleksiyon sergilerine paralel, okul öncesi
                        eğitim,�&nbsp;temel eğitim ve lise öğrencilerine
                        yönelik, yaratıcı ve eğlenceli öğrenme programları
                        düzenliyor.
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <div className="row">
                <div className="col-md-12 bold_text fs-40" style={{}}>
                  <p
                    id="TITrainingPrograms"
                    className="BitcraftLang border-bottom border-secondary"
                    style={{ "font-weight": "600" }}
                  >
                    {" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <div className="row">
                <div className="col-lg-4 mt-3  col-md-4">
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/pera-ogrenme/grup/okul-gruplari/5">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="/Ogrenme/images/peraokulgruplari.jpg"
                        alt="Okul Grupları"
                      />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title">Okul Grupları</h3>
                      <p className="card-text">
                        Öğrenciler, rehber eşliğinde yapılan sergi turundan
                        sonra sergiye yönelik atölye çalışmaları
                        gerçekleştiriyor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3  col-md-4">
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/pera-ogrenme/grup/ogretmenler/4">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="/Ogrenme/images/peraogretmenler.jpg"
                        alt="Öğretmenler"
                      />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title">Öğretmenler</h3>
                      <p className="card-text">
                        Rehberli tur ve atölyelere katılan öğretmenler,
                        koleksiyon sergileri ve süreli sergiler ile müzeyi
                        yakından tanırken öğrencilerine aktarabilecekleri bilgi
                        ve deneyimi ediniyor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3  col-md-4">
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/pera-ogrenme/grup/pera-engelsiz/6">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="/Ogrenme/images/peraengelsiz.jpg"
                        alt="Pera Engelsiz"
                      />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title">Pera Engelsiz</h3>
                      <p className="card-text">
                        {" "}
                        Özel gereksinimli bireylerin ihtiyaçlarına yönelik
                        hazırlanan atölyelerde, katılımcı gruplar, eğitmen
                        eşliğinde yapılan sergi turundan sonra, sergiye yönelik
                        atölye çalışmaları gerçekleştiriyorlar.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3  col-md-4">
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/pera-ogrenme/grup/pera-cocuk/1">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="/Ogrenme/images/peracocuk.jpg"
                        alt="Pera Çocuk"
                      />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title">Pera Çocuk</h3>
                      <p className="card-text">
                        {" "}
                        Sergilerimizden ilhamla tasarlanan çevrimiçi ve yüz yüze
                        atölyelerde, çocuklar sergileri interaktif bir şekilde
                        deneyimleyerek keşfediyor, yaratıcılıklarını ortaya
                        koyarak kendi çalışmalarını üretiyorlar.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3  col-md-4">
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/pera-ogrenme/grup/pera-genc/2">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="/Ogrenme/images/peragenc.jpg"
                        alt="Pera Genç"
                      />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title">Pera Genç</h3>
                      <p className="card-text">
                        {" "}
                        13–17 yaşlarındakilere yönelik sergi turları ve
                        atölyelerde gençler; sanatı farklı disiplinlerle
                        birlikte deneyimliyor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3  col-md-4">
                  <div className="card mb-0 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/pera-ogrenme/grup/pera-yetiskin/3">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="/Ogrenme/images/perayetiskin.jpg"
                        alt="Pera Yetişkin"
                      />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title">Pera Yetişkin</h3>
                      <p className="card-text">
                        {" "}
                        18 yaş ve üzerindeki herkesin katılabildiği atölyelerde
                        katılımcılar, farklı konularda uzmanlaşmış eğitmenler
                        eşliğinde Pera Müzesi’nin koleksiyon ve süreli
                        sergilerinden ilhamla yaratıcılıklarını ortaya
                        çıkarıyor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-12 mt-3"
              style={{ margin: "0 0 40px 0" }}
            ></div>
          </div>
        </div>
        <div className="cookie-bar">
          <img src="/Ogrenme/images/close2.png" className="cookie-close" />
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
                        defaultValue="AUmYwmQlX4sUmQZEq7sAjUdD6A9rlWwvkM7YTE1PsBjPdOBpIigmhwo5pDaT9wuwrkbQlL7NXUPSdDm6FEPpr2FFW4GrLPY420JJ5jyYY1E1"
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
                    src="/Ogrenme/images/svikv-tr-logo.svg"
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
                    src="/Ogrenme/images/iae-tr-logo.svg"
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

export default Ogrenme;
