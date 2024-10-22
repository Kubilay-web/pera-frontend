import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import ArticleCard from "../../components/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/index/posts";
import ErrorMessage from "../../components/ErrorMessage";
import { toast } from "react-hot-toast";

import { logout } from "../../store/actions/user";

const Sergi = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [navIsVisible, setNavIsVisible] = useState(false);
  const userState = useSelector((state) => state.user);
  const [profileDrowpdown, setProfileDrowpdown] = useState(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts("", 1, 15),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const logoutHandler = () => {
    dispatch(logout());
  };

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageVisible, setIsMessageVisible] = useState(false); // Mesajın görünürlük durumu

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscription = async () => {
    if (!email || !isValidEmail(email)) {
      setMessage("Please enter valid email");
      setEmail("");
      setIsMessageVisible(true);
      // 5 saniye sonra mesajı gizle
      setTimeout(() => {
        setIsMessageVisible(false);
      }, 5000);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Successful subscribed!");
        setIsMessageVisible(true);
        setEmail(""); // Başarı durumunda girişi temizle

        // 5 saniye sonra mesajı gizle
        setTimeout(() => {
          setIsMessageVisible(false);
        }, 5000);
      } else {
        setMessage("Already subscribed");
        setEmail("");
        setIsMessageVisible(true);

        setTimeout(() => {
          setIsMessageVisible(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Please try again.");
      setEmail("");
      setIsMessageVisible(true);

      setTimeout(() => {
        setIsMessageVisible(false);
      }, 5000);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("Open");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        .ptnew-0 {\n            padding-left: 0rem !important;\n            padding-right: 0rem !important;\n        }\n\n        .ptnew-1 {\n            padding-left: 1rem !important;\n            padding-right: 1rem !important;\n        }\n    ",
          }}
        />

        <div className="container">
          <div className="row ptnew">
            <div className="col-lg-8 col-md-7 col-sm-12 align-self-center ptnew2">
              <a className="navbar-brand" href="/" title="Home">
                <div>
                  <img
                    className="pera-logo component state2 state1-to-state2"
                    src="/Sergi/images/PM-2023logo-tr.svg"
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
                    src="/Sergi/images/iconLang.png"
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
                      src="/Sergi/images/iconSearch.png"
                      style={{ width: "25px" }}
                    />
                  </a>
                </div>

                <div
                  className={`navbar ${navIsVisible ? "visible" : "hidden"}`}
                >
                  {userState.userInfo ? (
                    <div className="user-info">
                      <div className="dropdown">
                        <button
                          className="account-button"
                          onClick={() => setProfileDrowpdown(!profileDrowpdown)}
                        >
                          <span>Account</span>
                          <MdKeyboardArrowDown />
                        </button>
                        <div
                          className={`dropdown-menu ${
                            profileDrowpdown ? "show" : "hide"
                          }`}
                          onMouseLeave={() => setProfileDrowpdown(false)} // Dropdown dışına çıkıldığında gizle
                        >
                          <ul>
                            {userState?.userInfo?.admin && (
                              <li>
                                <button
                                  onClick={() => navigate("/admin")}
                                  type="button"
                                  className="menu-item"
                                >
                                  Admin Dashboard
                                </button>
                              </li>
                            )}
                            <li>
                              <button
                                onClick={() => navigate("/profile")}
                                type="button"
                                className="menu-item"
                              >
                                Profile Page
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={logoutHandler}
                                type="button"
                                className="menu-item"
                              >
                                Logout
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => navigate("/login")}
                      className="signin-button"
                    >
                      Sign in
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <nav
            style={{ zIndex: 998 }}
            className="ml-auto mb-3 navbar navbar-expand-lg navbar-light bg-white border-top border-bottom border-dark sticky-top navbarheight ptnew-0"
          >
            {" "}
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
                  <img src="/Home/images/en_img.svg" alt className="imgnew" />
                </a>
                <a className="linkSearch btnSrch" id="btnSrchMobile" href="#">
                  <img src="/Home/images/search.svg" alt className="imgnew" />
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
                <li
                  onClick={toggleDropdown}
                  className={`nav-item text-black dropdown position-static ${
                    isOpen ? "show" : ""
                  }`}
                >
                  <a
                    className="nav-link dropdown-toggle font-weight-bolder nav-link22 nav-linkbolder"
                    href="#"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    data-bc={1}
                  >
                    ZİYARET
                    <img
                      style={{ display: isOpen ? "visible" : "none" }}
                      className="d-lg-none d-md-none topImg"
                      src="/Koleksiyon/images/leftArrow.svg"
                      alt="sol"
                    />
                  </a>
                  <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                    <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/ziyaret"
                    >
                      ZİYARETİNİZİ PLANLAYIN
                    </a>
                    {/*<a className="dropdown-item dropdown-menuitem" href="#">PERA MÜZESİ DOSTLUK PROGRAMI</a>*/}
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/pera-muzesi-hakkinda"
                    >
                      HAKKIMIZDA
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="https://artshop.peramuzesi.org.tr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ARTSHOP
                    </a>
                    <img
                      className="d-none d-lg-none subImg float-right mb-3"
                      style={{ marginTop: "-40px" }}
                      src="/Home/images/xButton.svg"
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

                <li
                  className={`nav-item dropdown position-static menuDropdownTopli ${
                    isOpen ? "show" : ""
                  }`}
                >
                  <a
                    className="nav-link dropdown-toggle font-weight-bolder nav-link22 nav-linkbolder"
                    href="#"
                    onClick={toggleDropdown}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    data-bc={2}
                  >
                    SANAT
                    <img
                      style={{ display: isOpen ? "visible" : "none" }}
                      className="d-lg-none d-md-none topImg"
                      src="/Home/images/leftArrow.svg"
                      alt="sol"
                    />
                  </a>
                  <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
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
                      style={{ marginTop: "-40px" }}
                      src="/Home/images/xButton.svg"
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
                      src="/Home/images/leftArrow.svg"
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
                      src="/Home/images/xButton.svg"
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
                      src="/Home/images/leftArrow.svg"
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
                      src="/Home/images/xButton.svg"
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
                      src="/Home/images/leftArrow.svg"
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
                      src="/Home/images/xButton.svg"
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
                    src="/Home/images/PM-2023logo-tr.svg"
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
            <div className="col-md-12 mt-2">
              <div className="row">
                <div
                  className="col-md-12 fs-40 mb-2"
                  style={{ "font-family": "'Raleway'" }}
                >
                  <h1>Süreli Sergiler</h1>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-2">
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-3">
                  <div className="card mb-1 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/hesaplar-ve-tesadufler/1304">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/Sergi/images/vera-1.jpg"
                        alt="Hesaplar ve Tesadüfler"
                      />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title">Hesaplar ve Tesadüfler</h3>
                      <p className="card-text">
                        Dóra Maurer, Vera Molnár, Gizella Rákóczy <br />{" "}
                        Macaristan Ulusal Bankası Koleksiyonu'ndan Algoritma
                        Sanatı
                      </p>
                      <p className="card-text">19 Eylül 2024 - 26 Ocak 2025 </p>
                      <p className="card-text" />
                      <p>
                        <em>Hesaplar ve Tesadüfler,</em> algoritma sanatının
                        öncü isimlerinden Vera Molnár, Dóra Maurer ve Gizella
                        Rákóczy'nin Macaristan Ulusal Bankası Koleksiyonu'nda
                        yer alan eserlerini bir araya getiriyor. Sergi,
                        Molnár’ın bilgisayar sanatı üzerindeki önemli etkisine
                        odaklanırken, Maurer ve Rákóczy'nin sanatsal
                        pratiklerinin algoritma ve matematiğin entegrasyonu ile
                        soyutlamanın sınırlarını genişletmesinin de izini
                        sürüyor.
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-3">
                  <div className="card mb-1 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/vera-molnar’in-izinde/1306">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/Sergi/images/vera-molnarin-izinde-1.jpg"
                        alt="Vera Molnár’ın İzinde"
                      />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title">Vera Molnár’ın İzinde</h3>
                      <p className="card-text" />
                      <p className="card-text">19 Eylül 2024 - 26 Ocak 2025 </p>
                      <p className="card-text" />
                      <p>
                        <em>Vera Molnár’ın İzinde</em>, bilgisayar sanatının
                        öncüleri arasında yer alan sanatçı Vera Molnár’ın
                        pratiğine yakından bir bakış sunuyor, onun
                        üretimlerinden esinlenen güncel sanatçıların yapıtlarını
                        bir araya getiriyor.
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-1">
              <p className="border-bottom border-secondary" />
            </div>
            <div className="col-md-12 mt-2">
              <div className="row">
                <div
                  className="col-md-12 fs-40 mb-2"
                  style={{ "font-family": "'Raleway'" }}
                >
                  <h1>Koleksiyon Sergileri</h1>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-2">
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-3">
                  <div className="card mb-1 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/kesisen-dunyalar/77">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/Sergi/images/kesisen-dunyalar-5.jpeg"
                        alt="Kesişen Dünyalar"
                      />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title">Kesişen Dünyalar</h3>
                      <p className="card-text">Elçiler ve Ressamlar</p>
                      <p className="card-text"></p>
                      <p className="card-text" />
                      <p>
                        Osmanlı, erken dönemlerinden itibaren Avrupa
                        devletleriyle yoğun ilişkiler kurmuş, Batılılar için
                        kimi zaman korkuyla karışık bir merakla yanı
                        başlarındaki bu büyük askeri gücün ve siyasi otoritenin
                        kaynağı olan devleti daha yakından tanıma ve anlama
                        çabası politik bir gereklilik olarak ortaya çıkmıştır.
                        Farklı kültürlerin bu karşılaşması kuşkusuz en kalıcı
                        ürünlerini sanat alanında vermiştir.
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-3">
                  <div className="card mb-1 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/kahve-molasi/160">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/Sergi/images/kahve-molasi-1.jpg"
                        alt="Kahve Molası"
                      />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title">Kahve Molası</h3>
                      <p className="card-text">
                        Kütahya Çini ve Seramiklerinde Kahvenin Serüveni
                      </p>
                      <p className="card-text"></p>
                      <p className="card-text" />
                      <p>
                        “Sihirli Meyve” olarak Etiyopya’da keşfedilen ve 15.
                        yüzyılda Yemen’den Osmanlı topraklarına ulaşan kahve,
                        kısa zamanda yaygınlaşmış, itibarlı bir içecek olarak
                        sarayda ve zengin evlerinde yerini almış, etrafında
                        ritüeller şekillenmeye başlamış ve sosyal hayatın
                        gelişmesinde önemli bir rol oynamıştır.�&nbsp;
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-3">
                  <div className="card mb-1 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/osman-hamdi-bey/194">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/Sergi/images/osman-hamdi-bey-kaplumbaga-terbiyecisi-ust.jpg"
                        alt="Osman Hamdi Bey"
                      />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title">Osman Hamdi Bey</h3>
                      <p className="card-text">
                        Suna ve İnan Kıraç Vakfı Koleksiyonu'ndan yapıtlarıyla
                        yaşamı ve sanatı
                      </p>
                      <p className="card-text"></p>
                      <p className="card-text" />
                      <p>
                        Osman Hamdi Bey, Tanzimat Dönemi’nin yetiştirdiği bir
                        Osmanlı aydını; resim, arkeoloji, müzecilik, sanat
                        eğitimi gibi kültür-sanat yaşamının farklı alanlarında,
                        bir ömre ancak sığdırılabilecek zenginlikte ve
                        çeşitlilikte katkıları olmuş bir kişilik.
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-3">
                  <div className="card mb-1 border-0">
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/agirlik-ve-olcu-sanati/1271">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src="/Sergi/images/aavo-new-03.jpg"
                        alt="Ağırlık ve Ölçü Sanatı"
                      />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title">Ağırlık ve Ölçü Sanatı</h3>
                      <p className="card-text">
                        Suna ve İnan Kıraç Vakfı Anadolu Ağırlık ve Ölçüleri
                        Koleksiyonu{" "}
                      </p>
                      <p className="card-text"></p>
                      <p className="card-text" />
                      <p>
                        Dünyayı bir avuç birimle�&nbsp;ölçmeye çalışmak onu
                        zihnen inşa edebilmeyi de beraberinde getirdi. Keşfin
                        ölçüsü mitlere karıştıkça, ölçmek ve tartmak fiziksel
                        bir deneyimin ötesinde bilimin, kâinatın ve bilinenin
                        ötesini merak eden insanın, kendini ifade etme
                        becerisinin önemli bir aracı oldu.�&nbsp;
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-1">
              <p className="border-bottom border-secondary" />
            </div>
            <div className="col-md-12 mt-2">
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="card mb-0 border-0">
                    <b
                      id="DigitalExhibitions"
                      className="BitcraftLang fs-40 mb-2"
                      style={{ "font-family": "'Raleway'" }}
                    />
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/dijital-sergiler">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="/Sergi/images/pera-dijital-sergiler.jpg"
                        alt="Dijital Sergiler"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="card mb-0 border-0">
                    <b
                      id="PastExhibitions"
                      className="BitcraftLang fs-40 mb-2"
                      style={{ "font-family": "'Raleway'" }}
                    />
                    {/*shadow-sm eklenince güzel duruyor*/}
                    <a href="/sergi/gecmis-yillar">
                      <img
                        className="bd-placeholder-img card-img-top"
                        src="/Sergi/images/pera-gecmis-sergiler.jpg"
                        alt="Geçmiş Sergiler"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cookie-bar">
          <img src="/Sergi/images/close2.png" className="cookie-close" />
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
                        defaultValue="uCrF3l124IE1SG50oAV-mN9sBtRbdxUA3pTMImEbggKvZCEgxPwetJCKamxVhrs_GoFoAn5KQ1dzjstALzh2p3ltrFLgCT_Xe5bJ1rNlgT41"
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
                    src="/Sergi/images/svikv-tr-logo.svg"
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
                    src="/Sergi/images/iae-tr-logo.svg"
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

export default Sergi;
