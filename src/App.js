import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home";
import Ziyaret from "./pages/Ziyaret/Ziyaret";
import Hakkinda from "./pages/Pera-Muzesi-Hakkinda/Hakkinda";
import Ajanda from "./pages/Ajanda/Ajanda";
import Sergi from "./pages/Sergi/Sergi";
import Koleksiyon from "./pages/Koleksiyon/Koleksiyon";
import Proje from "./pages/Projeler/Proje";
import Dijital from "./pages/Dijital/Dijital";
import Gecmis from "./pages/Gecmis/Gecmis";
import Ogrenme from "./pages/Ogrenme/Ogrenme";
import GecmisOgrenme from "./pages/Ogrenme-Gecmis/GecmisOgrenme";
import Film from "./pages/Film/Film";
import BlogPage from "./pages/blog/BlogPage";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comments from "./pages/admin/screens/comments/Comments";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";
import Categories from "./pages/admin/screens/categories/Categories";
import EditCategories from "./pages/admin/screens/categories/EditCategories";
import Users from "./pages/admin/screens/users/Users";

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/ziyaret" element={<Ziyaret />} />
        <Route path="/pera-muzesi-hakkinda" element={<Hakkinda />} />
        <Route path="/Ajanda" element={<Ajanda />} />
        <Route path="/sergi" element={<Sergi />} />
        <Route path="/koleksiyon" element={<Koleksiyon />} />
        <Route path="/projeler" element={<Proje />} />
        <Route path="/sergi/dijital-sergiler" element={<Dijital />} />
        <Route path="/sergi/gecmis-yillar" element={<Gecmis />} />
        <Route path="/pera-ogrenme" element={<Ogrenme />} />
        <Route
          path="/pera-ogrenme/gecmis-programlar"
          element={<GecmisOgrenme />}
        />
        <Route path="/film" element={<Film />} />

        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
          <Route path="categories/manage" element={<Categories />} />
          <Route
            path="categories/manage/edit/:slug"
            element={<EditCategories />}
          />
          <Route path="users/manage" element={<Users />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
