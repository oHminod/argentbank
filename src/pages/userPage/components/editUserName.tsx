import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../../redux/actions/authActions";
import { useState } from "react";
import { RootState } from "../../../redux/store/store";
import { updateUser } from "../../../utils/data-access-layer";
import { userData } from "../../../utils/types";

const EditUserName = ({
  setIsEditName,
}: {
  setIsEditName: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [error, setError] = useState<null | Response | string>(null);
  const token = useSelector((state: RootState) => state.auth.token);
  const { firstName, lastName } = useSelector(
    (state: RootState) => state.auth.userData
  );
  const dispatch = useDispatch();

  const handleCancel = () => {
    setIsEditName(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstNameInput = (
      e.currentTarget.elements.namedItem("firstName") as HTMLInputElement
    ).value;
    const lastNameInput = (
      e.currentTarget.elements.namedItem("lastName") as HTMLInputElement
    ).value;
    const newFirstName = firstNameInput || firstName;
    const newLastName = lastNameInput || lastName;

    if (!token) return setError("Token not found");
    const response = await updateUser(token, newFirstName, newLastName);

    if (typeof response === "string" || !response.ok) return setError(response);

    dispatch(
      updateUserData({
        firstName: newFirstName,
        lastName: newLastName,
      } as userData)
    );

    setIsEditName(false);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
      </h1>
      <form className="edit-name" onSubmit={handleSubmit}>
        <div className="edit-wrapper">
          <div className="input-wrapper">
            <label htmlFor="firstName" className="only-sr">
              firstName
            </label>
            <input type="text" id="firstName" placeholder={firstName} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName" className="only-sr">
              lastName
            </label>
            <input type="lastName" id="lastName" placeholder={lastName} />
          </div>
        </div>
        <div className="edit-wrapper">
          <button type="submit">Save</button>
          <button onClick={handleCancel} type="button">
            Cancel
          </button>
        </div>
      </form>
      {typeof error === "string"
        ? error && <p className="error">{error} </p>
        : error && (
            <p className="error">
              {(error.status || 520) +
                " - " +
                (error.statusText || "Unknown error")}
            </p>
          )}
    </div>
  );
};

export default EditUserName;
