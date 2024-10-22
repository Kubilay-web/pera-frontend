import React from "react";

const Hakkinda = () => {
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
                    src="/Hakkinda/images/PM-2023logo-tr.svg"
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
                    src="/Hakkinda/images/iconLang.png"
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
                      src="/Hakkinda/images/iconSearch.png"
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
                    src="/Hakkinda/images/en_img.svg"
                    alt
                    className="imgnew"
                  />
                </a>
                <a className="linkSearch btnSrch" id="btnSrchMobile" href="#">
                  <img
                    src="/Hakkinda/images/search.svg"
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
                      src="/Hakkinda/images/leftArrow.svg"
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
                      src="/Hakkinda/images/xButton.svg"
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
                      src="/Hakkinda/images/leftArrow.svg"
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
                      src="/Hakkinda/images/xButton.svg"
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
                      src="/Hakkinda/images/leftArrow.svg"
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
                      src="/Hakkinda/images/xButton.svg"
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
                      src="/Hakkinda/images/leftArrow.svg"
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
                      src="/Hakkinda/images/xButton.svg"
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
                      src="/Hakkinda/images/leftArrow.svg"
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
                      src="/Hakkinda/images/xButton.svg"
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
                    src="/Hakkinda/images/PM-2023logo-tr.svg"
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
          media="screen and (max-width:461px)"
          dangerouslySetInnerHTML={{
            __html:
              "\n    .text-justify {\n        text-align: left !important;\n    }\n",
          }}
        />
        <div
          className="container fontum first-row"
          style={{ "margin-bottom": "50px" }}
        >
          <div className="row">
            <div className="col-md-12">
              <img
                className="img-fluid"
                src="/Hakkinda/images/pera-muzesi-hakkimizda.jpg"
                title="Hakkımızda"
                alt="Pera Müzesi Ön Cephe"
              />
            </div>
            <div className="col-12 text-justify">
              <p />
              <p>
                Kapılarını 2005 Haziran ayı başlarında açan Pera Müzesi, Suna ve
                İnan Kıraç Vakfı’nın, kentin bu seçkin noktasında kültür-sanat
                hizmeti vermek amacıyla hayata geçirdiği geniş kapsamlı bir
                kültür girişiminin ilk adımıdır. Bu projede bir ‘müze-kültür
                merkezi’ işlevini üstlenen Pera Müzesi için, 1893 yılında mimar
                Achille Manoussos’un İstanbul’un gözde semti Tepebaşı’nda inşa
                ettiği yapı, Mimar M. Sinan Genim tarafından tümüyle elden
                geçirilerek çağdaş donanımlı bir müzeye dönüştürülmüş ve hizmete
                sunulmuştur.
                <br />
                <br />
                Suna ve İnan Kıraç Vakfı’na ait “Oryantalist Resim”, “Anadolu
                Ağırlık ve Ölçüleri” ve “Kütahya Çini ve Seramikleri”
                koleksiyonlarını ve bu koleksiyonların temsil ettiği değerleri;
                sergiler, yayıncılık ürünleri, sözlü etkinlikler, film
                gösterimleri, öğrenme programları ve bilimsel çalışmalar
                aracılığıyla kamuyla paylaşan, gelecek kuşaklara aktarmayı
                amaçlayan Pera Müzesi, süreli sergileriyle de dünya sanatının
                önemli isimlerini ağırlamaktadır.
                <br />
                <br />
                Aralarında Tate Britain, Victoria ve Albert Müzesi, St.
                Petersburg Rus Devlet Müzesi, JP Morgan Chase Koleksiyonu, New
                York School of Visual Arts, Maeght Vakfı gibi dünyanın önde
                gelen müze, koleksiyon ve vakıflarıyla ortak projeler üreten
                Pera Müzesi, düzenlediği dönemli sergilerle, Jean Dubuffet,
                Henri Cartier-Bresson, Rembrandt, Niko Pirosmani, Josef
                Koudelka, Joan Miró, Akira Kurosawa, Marc Chagall, Pablo
                Picasso, Fernando Botero, Frida Kahlo, Diego Rivera, Goya,
                Manolo Valdés, Andy Warhol, Cecil Beaton, Alberto Giacometti,
                Giorgio de Chirico, Sergey Parajanov gibi dünyanın usta
                sanatçılarının yapıtlarını ülkemiz sanatseverleriyle
                buluşturmuştur. Açıldığından bugüne her yıl ulusal ve
                uluslararası eğitim ve sanat kurumlarıyla işbirliği yaparak genç
                sanatçıları destekleyen sergiler de düzenleyen Pera Müzesi, tüm
                sergilerini kitaplar, sözel etkinlikler ve öğrenme
                programlarıyla da zenginleştirmektedir. Dönemsel programları ve
                etkinlikleriyle dikkat çeken Pera Film ise ziyaretçilere ve
                sinema meraklılarına, klasiklerden bağımsız filmlere, animasyon
                ve belgesellere uzanan, kimi zaman sergilere paralel kapsamlı
                gösterimler düzenlemektedir.
                <br />
                <br />
                Kuruluşundan günümüze gerçekleştirdiği etkinliklerle Türkiye’nin
                en nitelikli, öncü ve sevilen müzelerinden biri haline gelen
                Pera Müzesi kentin bu çok canlı bölgesinde kapsamlı ve çağdaş
                bir müze-kültür merkezi olarak hizmet vermektedir.
              </p>
              <p />
            </div>
          </div>
          <hr style={{ "margin-top": "40px" }} />
          <div className="row">
            <div className="col-md-12">
              <h4
                className="fs-40"
                style={{ "font-weight": "600", "margin-top": "40px" }}
              >
                Bina Tarihçesi
              </h4>
            </div>
            <div className="col-md-12">
              <img
                className="img-fluid"
                src="/Hakkinda/images/202201-bina-tarihcesi.jpg"
                title="About Us"
                alt="Binanın Tarihçesi"
              />
            </div>
            <div className="col-md-12  text-justify">
              <span className="staticcontentbody">
                <p>
                  <br />
                  Mimar Achille Manoussos’un, dönemin genel mimari karakterine
                  uygun olarak tasarladığı ve Ermeni Katolik Patrikhanesi’nin
                  mülkü olan Bristol Oteli’nin inşası 1893 yılında tamamlanır.
                </p>
                <p>
                  Şehrin önemli otelleri arasında sayılan ve üst düzey yabancı
                  konukları misafir eden Bristol Oteli, 1980’li yılların başına
                  kadar hizmette kalır.
                </p>
                <p>
                  Tuğla malzeme ile kâgir sistemde inşa edilen ve neoklasik
                  özellikler taşıyan Bristol Oteli’nin geniş bir lobisi, mermer
                  merdivenleri, asansörü, rahat süitleri, salonları ve müstakil
                  masa düzenine sahip ferah bir yemek salonu vardır.
                </p>
                <p>
                  Bristol Oteli’nin yıllar içinde Logothetti, Adamapoulos, Ciras
                  ve Hacara gibi meşhur işletmecileri olur, bölgenin değişen
                  demografik yapısını yansıtır biçimde 1930’ların başında binayı
                  satın alan Ömer Lütfi Bengü, oteli işletmeye 1980’lere kadar
                  devam eder.
                </p>
                <p>
                  Bristol Oteli 1980’li yıllarda yeni otellerle rekabet edemez
                  hale gelir. Otelin son sahibi Ömer Lütfi Bengü’nün 1983’teki
                  vefatından sonra, mirasçılarının satışa çıkardığı binayı önce
                  Yıldız Lastikçilik, ardından Esbank satın alır.
                </p>
                <p>
                  Bristol Oteli’ni Esbank’ın genel müdürlük binasına dönüştürmek
                  üzere, mimar Doğan Hasol yapıyı yeniler. Otel ile hemen
                  yanındaki beş katlı konut binasının Meşrutiyet Caddesi’ne
                  bakan cepheleri korunur ve iki parsel birleştirilir.
                </p>
                <p>
                  Bina 2002 yılına kadar Esbank Genel Müdürlüğü olarak hizmet
                  verir. Manoussos’un orijinal cephesi ve Hasol’un birleştirdiği
                  parseller korunarak, mimar Sinan Genim’in hazırladığı proje
                  doğrultusunda çağdaş ve donanımlı bir müze olarak yeniden
                  tasarlanır.
                </p>
              </span>
            </div>
          </div>
          <hr style={{ "margin-top": "40px" }} />
          <div className="row">
            <div className="col-md-12 text-justify">
              <h4
                className="fs-40"
                style={{ "font-weight": "600", "margin-top": "40px" }}
              >
                Suna ve İnan Kıraç Vakfı
              </h4>
              <span className="staticcontentbody">
                <p>
                  Suna ve İnan Kıraç Vakfı; Suna Kıraç, İnan Kıraç ve İpek Kıraç
                  tarafindan 27 Ekim 2003 tarihinde, Türk toplumuna yararlı ve
                  yurtsever vatandaşlar yetiştirilmesi için, kişi ve kurumlara
                  maddi ve manevi imkanlar sağlamak, toplumsal hayata katkıda
                  bulunmak ve bu dogrultuda eğitim, kültür, sanat ve sağlık
                  alanlarında faaliyetlerde bulunmak amacıyla kurulmuştur.
                </p>
                <p>
                  Vakıf, eğitim alanındaki hedeflerini gerçekleştirmek üzere;
                  yardıma ihtiyacı olan yetenekli öğrenciler ile eğitim ve
                  öğretim kurumlarına gerekli görülecek her türlü yardımı
                  yapmakta, burs eğitim ve araştırma gibi imkanlar sağlayarak
                  destek vermektedir.
                </p>
                <p>
                  Vakıf, kültür ve sanat alanında; tarih, sanat, kültür ve bilim
                  müzeleri ile her türlü sergi mekanları, araştırma ve uygulama
                  merkezleri, kütüphaneler ve enstitüler açmaya ve işletmeye,
                  koleksiyonlar oluşturmaya ve bunları sergilemeye yönelik
                  faaliyetlerde bulunmaktadır. Vakıf’ın bu alandaki faaliyetleri
                  arasında inceleme, araştırma ve kamuoyu yoklamaları yapmak
                  veya yaptırmak, dünyadaki çeşitli müzeler, vakıflar, sergi
                  merkezleri, araştırma ve uygulama merkezleri, kütüphaneler,
                  enstitü ve kuruluşlarla iş birligi yapmak da yer almaktadır.
                </p>
                <p>
                  <b>
                    <a href="http://sunaveinankiracvakfi.org.tr" target="_out">
                      sunaveinankiracvakfi.org.tr
                    </a>
                  </b>
                </p>
              </span>
            </div>
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
                    Meşrutiyet Caddesi No:65�&nbsp;34430 <br />
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
                      defaultValue="NAzL0A3pnrwbbovSABrecP3QKiwUpq6Fhnt0CboPot52XK_9HdRRs2YzRgT4RsLGovm1tl5kp8VQeOgfpO1TBApuz1-OD6gaL9E_8YweeOk1"
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
          <img src="/Hakkinda/images/close2.png" className="cookie-close" />
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
                        defaultValue="TKnSHzt20PtjWw4xpEmtFXQKcxHU1gHf6IbX7dTFHIp_wylcY6832_iukHLmUp3yjTA8zLFZ7mj6yWRAN4zJKiO-5ZAfPEvyk3MOTUDiD1M1"
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
                    src="/Hakkinda/images/svikv-tr-logo.svg"
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
                    src="/Hakkinda/images/iae-tr-logo.svg"
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

export default Hakkinda;
