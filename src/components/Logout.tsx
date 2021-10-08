import { useAppDispatch } from "../hooks";
import { setClearUser } from "../store/users/userActions";

type Props = {
};

export const Logout: React.FC<Props> = (props) => {
  const dispatch: any = useAppDispatch();
  const onClickLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    localStorage.removeItem('token');
    dispatch(setClearUser());
  };
  
  return (
    <button
            className="logout__button"
            onClick={onClickLogout}
          >
            Logout
          </button>
  )
};