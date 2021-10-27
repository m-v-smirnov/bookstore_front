import { Icon } from 'react-icons-kit';
import { ic_login } from 'react-icons-kit/md/ic_login'
import { useHistory } from 'react-router';

type Props = {};

export const LoginButton: React.FC<Props> = (props) => {
  const history = useHistory();
  return (
    <button
      title="login"
      className="logout_button"
      onClick={() => { history.push('/login') }}>
      <Icon size={'75%'} icon={ic_login} />
    </button>
  )
};