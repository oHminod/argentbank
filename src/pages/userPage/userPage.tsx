import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditUserName from "./components/editUserName";
import { userData } from "../../utils/types";

const UserPage = () => {
  const [userData, setUserData] = useState<userData | null>(null);
  const [isEditName, setIsEditName] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/");
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
      console.log("user data", data);
      setUserData(data.body);
    };
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditName = () => {
    setIsEditName(true);
  };

  if (!userData) return <div>Loading...</div>;
  return (
    <main className="main bg-dark">
      {isEditName ? (
        <EditUserName
          userData={userData}
          setIsEditName={setIsEditName}
          setUserData={setUserData}
        />
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userData?.firstName + " " + userData?.lastName}!
          </h1>
          <button className="edit-button" onClick={handleEditName}>
            Edit Name
          </button>
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default UserPage;
