import { Redirect } from "react-router=dom";

export const withAuth = (Component) => {
  const AuthComponent = (props) => {
    const isLogin = true;

    if (isLogin) {
      return <Component {...props} />;
    } else {
      return <Redirect to="login" />;
    }
  };
  return AuthComponent;
};
