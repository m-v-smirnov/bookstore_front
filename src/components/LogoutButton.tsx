import { useAppDispatch } from "../hooks";
import { setClearUser } from "../store/users/userActions";

type Props = {
};

export const LogoutButton: React.FC<Props> = (props) => {
  const dispatch: any = useAppDispatch();
  const onClickLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    localStorage.removeItem('token');
    dispatch(setClearUser());
  };

  return (
    <button
      className="logout_button"
      onClick={onClickLogout}
    >
      Logout
    </button>
  )
};