import { useAppDispatch } from "../hooks";
import { setClearState } from "../store/users/userActions";


type Props = {
};

export const Profile: React.FC<Props> = (props)  => {
  const dispatch: any = useAppDispatch();
  const onClickLogout = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    if(localStorage.length > 0) {
      localStorage.removeItem('token');
    }
    dispatch(setClearState());
  };
  return (
    <div>
      <h2>Profile from components</h2>
      <button
        onClick={onClickLogout}
      >
        Logout
      </button>
      </div>
  );
};