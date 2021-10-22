import { useAppDispatch } from "../../hooks";
import { setClearUser } from "../../store/users/userActions";
import { Icon } from 'react-icons-kit';
import { ic_logout } from 'react-icons-kit/md/ic_logout';

type Props = {};

export const LogoutButton: React.FC<Props> = (props) => {
  const dispatch: any = useAppDispatch();
  const onClickLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    localStorage.removeItem('token');
    dispatch(setClearUser());
  };

  return (
    <button
      title="logout"
      className="logout_button"
      onClick={onClickLogout}
    >
      <Icon size={'75%'} icon={ic_logout} />
    </button>
  )
};