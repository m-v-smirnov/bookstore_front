import { ReactNode } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAppSelector } from "../../hooks";

type Props = {
  children?: ReactNode,
} & RouteProps;

export const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
      user? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}