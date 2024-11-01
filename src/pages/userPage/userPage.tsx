import useUserData from "../../hooks/useUserData";
import ErrorPage from "../errorPage";
import { accounts } from "../../utils/data";
import UserName from "./components/userName";
import AccountCard from "./components/accountCard";

const UserPage = () => {
  const { loading, error } = useUserData();

  if (loading)
    return (
      <main className="center-wrapper">
        <p>Loading...</p>
      </main>
    );
  if (error) return <ErrorPage error={error} />;

  return (
    <main className="main bg-dark">
      <UserName />
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => (
        <AccountCard key={index} accountData={account} />
      ))}
    </main>
  );
};

export default UserPage;
