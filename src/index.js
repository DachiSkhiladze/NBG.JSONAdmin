import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux";
import { httpsCallable } from "firebase/functions";
import { auth, functions } from "./firebase";
import { onAuthStateChanged, signInWithCustomToken } from "firebase/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Auth() {
  const [logged, setLogged] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [code, setCode] = React.useState(false);
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLogged(!!user);
    });
  }, []);

  async function login() {
    setLoading(true);
    const res = await httpsCallable(functions, "login")({ code });
    if (res.data.token) {
      await signInWithCustomToken(auth, res.data.token);
      setLoading(false);
    }
  }

  if (logged === null) return null;
  return logged ? (
    <App />
  ) : (
    <Login loading={loading} onChange={setCode} onClick={login} />
  );
}

function Login({ onClick, onChange, loading }) {
  function onInputChange({ target }) {
    onChange(target.value);
  }
  return (
    <div className="login">
      <h4>შეიყვანეთ კოდი</h4>
      <input onChange={onInputChange} placeholder="000 000" />
      <button onClick={onClick} disabled={loading}>
        ავტორიზაცია
      </button>
    </div>
  );
}

root.render(
  <Provider store={store}>
    <Auth />
  </Provider>
);
