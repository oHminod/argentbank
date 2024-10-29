import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log("user nav data", data);
      setUserName(data.body.firstName);
    };
    getUserData();
  }, []);

  const handleSignout = () => {
    localStorage.removeItem("token");
    setUserName(null);
    navigate("/");
  };

  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {userName ? (
          <div>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {" " + userName}
            </Link>
            <button className="main-nav-item" onClick={handleSignout}>
              <i className="fa fa-sign-out"></i> Sign Out
            </button>
          </div>
        ) : (
          <div>
            <Link className="main-nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i> Sign In
            </Link>
          </div>
        )}
      </nav>
      <Outlet />
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
};

export default Layout;
