import React from "react";

const Ajanda = () => {
  return (
    <>
      <div>
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
                    src="/Ajanda/images/PM-2023logo-tr.svg"
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
                    src="/Ajanda/images/iconLang.png"
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
                      src="/Ajanda/images/iconSearch.png"
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
                  <img src="/Ajanda/images/en_img.svg" alt className="imgnew" />
                </a>
                <a className="linkSearch btnSrch" id="btnSrchMobile" href="#">
                  <img src="/Ajanda/images/search.svg" alt className="imgnew" />
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
                      src="/Ajanda/images/leftArrow.svg"
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
                      src="/Ajanda/images/xButton.svg"
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
                      src="/Ajanda/images/leftArrow.svg"
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
                      src="/Ajanda/images/xButton.svg"
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
                      src="/Ajanda/images/leftArrow.svg"
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
                      src="/Ajanda/images/xButton.svg"
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
                      src="/Ajanda/images/leftArrow.svg"
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
                      src="/Ajanda/images/xButton.svg"
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
                      src="/Ajanda/images/leftArrow.svg"
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
                      src="/Ajanda/images/xButton.svg"
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
                    src="/Ajanda/images/PM-2023logo-tr.svg"
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
        <link href="css/main_2.css" rel="stylesheet" />
        <link href="css/main.css" rel="stylesheet" />
        <link href="css/main_1.css" rel="stylesheet" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\n    /* On screens that are 768px wide or less (tablet and mobil for PERA*/\n    .rounded {\n        border-radius: 8px !important;\n    }\n\n    .fc-unthemed th,\n    .fc-unthemed td,\n    .fc-unthemed thead,\n    .fc-unthemed tbody,\n    .fc-unthemed .fc-divider,\n    .fc-unthemed .fc-row,\n    .fc-unthemed .fc-content,\n    .fc-unthemed .fc-popover,\n    .fc-unthemed .fc-list-view,\n    .fc-unthemed .fc-list-heading td {\n        /*margin: 10px !important;*/\n        border-color: #333;\n    }\n    /*eklendi 03112019 .fc-body .fc-row*/\n    .bitcalendar:hover {\n        background-color: #F0F0F0;\n    }\n\n    #slcDateHeader1 option { font-size: 20px; }\n    #slcDateHeader2 option {\n        font-size: 20px;\n    }\n\n    @media screen and (max-width: 768px) {\n        .fc-head {\n            display: none !important; /*mobilde gün adlarını kapat*/\n        }\n\n        .fc-other-month {\n            color: white; /*Mobilde diğer ayları white yaparak pasif göster*/\n        }\n\n        td.fc-day.fc-widget-content.fc-other-month.fc-past, td.fc-day.fc-widget-content.fc-other-month.fc-future {\n            border: none !important; /*Mobilde diğer ayların tablo boderlarını kaldır*/\n        }\n\n        table {\n            border: 0px !important;\n            border-collapse: separate !important;\n            border-spacing: 2px 2px !important;\n        }\n\n        #calHeader {\n            background-color: #c13b3b;\n            color: white;\n        }\n\n        .display-3 {\n            font-size: 28px !important; /*Mobilde tarih header alanına sığmadığı için 28e kadar düşürüldü.*/\n            text-transform: capitalize !important;\n        }\n\n        .font-weight-bold {\n            font-weight: 400 !important;\n        }\n\n        #calHeaderLeft {\n            justify-content: space-between !important;\n        }\n\n        .fc-unthemed td.fc-today {\n            background: #C13B3B; /*Mobilde bugün alanının arkasını kırmızı yapmak*/\n        }\n         \n    }\n\n\n\n\n    .tippy-tooltip {\n        position: relative;\n        color: #fff;\n        border-radius: 0;\n        font-size: .875rem;\n        padding: 0;\n        line-height: 1.4;\n        text-align: left;\n        background-color: #333;\n    }\n\n\n    .bg-C13B3B {\n        background-color: #C13B3B;\n    }\n\n    .bg-777777 {\n        background-color: #777777;\n    }\n\n    .fc-license-message {\n        display: none;\n    }\n\n    .fc-event {\n        cursor: pointer;\n        /*event ların üzeirne gidince mouse pointera dönmesi için*/\n    }\n\n    .fc-day-number {\n        float: left !important; /*Günü sola yasla*/\n        margin-left: 3%; /*Soldan %3lük boşluk*/\n    }\n\n\n\n    .fc-content-skeleton thead td.fc-today { /*Today ögesinin arka planını kırmızya boyayama*/\n       background-color: #C13B3B !important; \n       /*  background: linear-gradient(to bottom , #C13B3B 50% , white 50%) !important;*/\n        color: white; \n    }\n    \n     \n\n\n    .fc-widget-header,\n    .fc-body > tr:first-child > td:first-child {\n        border: none !important;\n    }\n\n    @media (min-width: 769px) {\n        .fc-btnArchive-button,\n        .fc-btnCategory-button {\n            margin-top: 10px;\n            margin-right: 10px;\n            padding: 0 15px 0 15px;\n            border-radius: 8px !important;\n            /*arşiv ve kategori butonlarının tasarımı*/\n        }\n        .fc-content-skeleton thead tr{  \n        height:80px;\n          }  \n        .fc-content-skeleton thead tr td{  \n           padding-left:10px;\n           padding-right:10px;\n          } \n        .fc-content-skeleton tbody tr td{  \n           padding-left:15px;\n           padding-right:15px;\n           padding-bottom:15px;\n          }\n        .fc-day-header {\n            /*Gün isimlerinin arka plan ve text rengi, konumu için*/\n            background-color: #9E9E9E;\n            color: white;\n            margin: 0 25px 0 25px;\n        }\n\n        .fc-left {\n            padding-left: 3%;\n            font-size: 30px;\n            font-weight: 800;\n        }\n\n        .fc-day-number {\n            float: left !important;\n            /*Günü sola yasla*/\n            font-size: 30px;\n            /*Fontunu 30px yap*/\n            margin-left: 3%;\n            /*Soldan %3lük boşluk*/\n        }\n\n        .fc-day-top:not(.fc-other-month) {\n            position: relative !important;\n        }\n       /*.fc-day-top:not(.fc-other-month):not(.fc-today):after*/\n            .agsC span:after {\n                background-color: #333 !important;\n                /*bottom: 0 !important;*/\n                content: '' !important;\n                display: block !important;\n                height: 1px !important;\n                left: 50% !important;\n                position: absolute !important;\n                transform: translate(-50%, 0) !important;\n                width: 80% !important; \n            }\n\n        td.fc-today {\n            background-color: white !important;\n        }\n\n        .fc-day-header { /*gün adları görünümün tasarımdaki yükseklikte olması için*/\n            padding: 15px !important;\n        }\n\n        table {\n            border: 0px !important;\n            border-collapse: separate !important;\n            border-spacing: 10px 5px !important;\n        }\n\n\n\n        .fc-btnCategory-button {\n            font-weight: bolder;\n        }\n\n        .fc-title {\n            white-space: normal;\n        }\n\n        .fc-content-skeleton tbody tr td {\n            /*height: 35px;*/\n        }\n\n    }\n    .ttle {\n        font-size: 18px;\n        margin-top: 15px !important;\n        margin-bottom: 0px !important;\n        padding-bottom: 3px !important;\n        border-bottom: 1px solid #333333 !important;\n        border-radius: 0px !important;\n    }\n\n    .ttle2 {\n        padding-bottom: 7.5px !important;\n    }\n    \n",
          }}
        />
        <div className="container first-row">
          <div id="loading" className="row">
            <div className="col-12 d-flex justify-content-center py-5 align-items-center">
              <span className="pl-2">Yükleniyor ...</span>
            </div>
          </div>
          <div
            className="col-md-12 d-none"
            id="fieldCalendar"
            style={{ "padding-left": "0px", "padding-right": "0px" }}
          >
            <div id="calHeader" className="row align-items-center mt-3">
              <div
                id="calHeaderLeft"
                className="col d-flex align-items-center justify-content-left pt-1"
              >
                <h1
                  id="dateHeader"
                  className="float-left order-2 order-lg-1 mr-3"
                  style={{ "font-weight": "600 !important" }}
                >
                  {" "}
                </h1>
                <h1
                  id="dateHeader1"
                  style={{ display: "none" }}
                  className="  float-left order-2 order-lg-1"
                >
                  {" "}
                </h1>
                <h1
                  id="dateHeader2"
                  style={{ display: "none" }}
                  className="   float-left order-2 order-lg-1"
                >
                  {" "}
                </h1>
                <span className="order-1 order-lg-2 classBtnPrev">
                  <i
                    className="fa fa-chevron-left  "
                    style={{ "font-size": "1.2em" }}
                  />
                </span>
                <span className="order-3 pl-3 classBtnNext">
                  <i
                    className="fa fa-chevron-right  "
                    style={{ "font-size": "1.2em" }}
                  />
                </span>
              </div>
              <div
                id="calHeaderRight"
                className="col-auto d-lg-block d-none panel-title"
              >
                <a
                  href="/ajanda/arsiv"
                  className="btn btn-sm px-4 btn-outline-dark font-weight-bolder rounded"
                >
                  Arşiv
                </a>
                <button
                  id="btnCategory"
                  className="btn btn-sm px-4 btn-outline-dark font-weight-bolder rounded"
                  type="button"
                  data-toggle="collapse"
                  data-target="#categoryMenu"
                  aria-expanded="false"
                  aria-controls="categoryMenu"
                >
                  Kategoriler
                </button>
              </div>
              <div className="col-12">
                <div className="collapse multi-collapse" id="categoryMenu">
                  <div className="card card-body text-right border-0">
                    <p
                      className="text-danger font-weight-bold"
                      onclick="eventHideShow('Type_1',this)"
                    >
                      <i className="fa fa-circle" /> Sergi
                    </p>
                    <p
                      className="text-danger font-weight-bold"
                      onclick="eventHideShow('Type_2',this)"
                    >
                      <i className="fa fa-circle" /> Proje
                    </p>
                    <p
                      className="text-danger font-weight-bold"
                      onclick="eventHideShow('Type_4',this)"
                    >
                      <i className="fa fa-circle" /> Film
                    </p>
                    <p
                      className="text-danger font-weight-bold"
                      onclick="eventHideShow('Type_5',this)"
                    >
                      <i className="fa fa-circle" /> Etkinlikler{" "}
                    </p>
                    <p
                      className="text-danger font-weight-bold"
                      onclick="eventHideShow('Type_3',this)"
                    >
                      <i className="fa fa-circle" /> Pera Öğrenme
                    </p>
                    <p
                      className="text-danger font-weight-bold"
                      onclick="eventHideShow('Type_6',this)"
                    >
                      <i className="fa fa-circle" /> Dijital Film Programları{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div id="calendar" />
            </div>
            <div id="divTodayList" className="row d-flex d-lg-none pt-3"></div>
          </div>
          <div className="col-md-12 mt-3">
            <p style={{ "font-size": "12px" }}>
              *Ajandada yer almayan geçmiş etkinlikleri,{" "}
              <a href="/ajanda/arsiv">Arşiv</a> başlığı altında bulabilirsiniz.
            </p>
          </div>
          <div
            className="col-md-12 mt-3"
            style={{ margin: "0 0 40px 0" }}
          ></div>
        </div>
        <template id="example" className=" bg-white" />
        <div className="cookie-bar">
          <img src="/Ajanda/images/close2.png" className="cookie-close" />
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
                        defaultValue="U8DJIRvgcAmN3tOiOHyFnewfP5WZfspCW86abWrwUMM2NF4e7e5OWSJqeTRte1mV9dln00dqf9rW-oN4j3eBz9Y_X0sjdatrpohgXlyQ18Y1"
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
                    src="/Ajanda/images/svikv-tr-logo.svg"
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
                    src="/Ajanda/images/iae-tr-logo.svg"
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
      </div>
    </>
  );
};

export default Ajanda;
