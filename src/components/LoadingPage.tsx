import { useAppDispatch } from '../hooks';
import loadingPicter from '../images/loading.gif';
import { loginByTokenThunk, setLoaded } from '../store/users/userActions';

type Props = {
};

export const LoadingPage: React.FC<Props> = (props) => {
  const token = localStorage.getItem("token");
  const dispatch :any = useAppDispatch();
  if (token) {
    dispatch(loginByTokenThunk());
  }
  dispatch(setLoaded());
  return (
    <div>
      <img src={loadingPicter} alt="" />
    </div>

  );
};

