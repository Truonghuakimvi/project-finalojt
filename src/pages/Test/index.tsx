import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../store";
import { login } from "../../redux/Login/service";
import { useSelector } from "../../../node_modules/react-redux";

const TestPage = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    console.log(token);
  }, [token]);

  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    dispatch(login());
  };
  return (
    <div>
      <h2>Login Form</h2>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default TestPage;
