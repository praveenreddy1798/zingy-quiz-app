import { useNavigate } from "react-router-dom";
import { Navbar } from "../components";
import { useAuth, useQuiz } from "../context";
import { logout } from "../utils";

const Profile = () => {
  const {
    auth: { userDetails },
    setAuth,
  } = useAuth();
  const { quizDispatch } = useQuiz();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(setAuth, quizDispatch);
    navigate("/login");
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main main-section main-section-strech pd-md flex-center">
        <div className="flex-vertical bg-white w-max-content border-light-grey border-radius-md pd-sm">
          <div className="pd-lg">
            <div className="flex-center">
              <div
                alt="avatar"
                className="avatar avatar-xxlg position-relative bg-primary mg-b-md"
              >
                <div className="position-relative flex-center avatar position-absolute profile-pic">
                  {userDetails.firstName.substring(0, 1) +
                    userDetails.lastName.substring(0, 1)}
                </div>
              </div>
            </div>
            <h3 className="text-align-center">
              {userDetails?.firstName + " " + userDetails?.lastName}
            </h3>
            <h4 className="text-align-center">{userDetails?.email}</h4>
            <div className="flex-center gap-2 mg-t-xsm">
              <button
                onClick={() => navigate("/")}
                className="btn btn-primary mg-t-md border-radius-sm"
              >
                Home
              </button>
              <button
                onClick={handleLogout}
                className="btn btn-secondary outline outline-secondary mg-t-md border-radius-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { Profile };
