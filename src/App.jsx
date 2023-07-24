import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector } from "react-redux"; // ngambil data
import { useDispatch } from "react-redux"; // lempar + rubah data
import { onLogin, onLogout } from "./redux/actions/authAction";
import { onGetProduct } from "./redux/actions/productAction";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import { ProductContext } from "./context/ProductProvider";
import { withAuth } from "./hoc/withAuth";

function App() {
  // useSelector = mengambil data
  // const { isAuth, username } = useSelector((state) => state.authReducer);
  const { isAuth, onLogin } = useContext(AuthContext);

  const { listData, getData } = useContext(ProductContext);
  // const { listData, isLoading, isError } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const handleLogin = () => {
    onLogin(true);
    // dispatch(onLogin(true));
  };

  const handleLogOut = () => {
    dispatch(onLogout(false));
  };

  const getProduct = () => {
    dispatch(onGetProduct());
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(listData);

  return (
    <>
      <h1>test</h1>
      <h1>{isAuth ? "Anda login" : "anda belum login"}</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Logout</button>

      {listData?.map((item) => (
        <div key={item.email}>
          <h1>{item.first_name}</h1>
          <h1>{item.email}</h1>
        </div>
      ))}
      {/* {isError !== null && <h1>{isError}</h1>}

      {isLoading && !listData.length ? (
        <h1>loading</h1>
      ) : (
        listData?.map((item) => (
          <div key={item.email}>
            <h1>{item.first_name}</h1>
            <h1>{item.email}</h1>
          </div>
        ))
      )} */}
    </>
  );
}

export default withAuth(App);
