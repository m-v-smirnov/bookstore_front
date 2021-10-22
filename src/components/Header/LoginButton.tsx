import { Icon } from 'react-icons-kit';
import { ic_login } from 'react-icons-kit/md/ic_login'

type Props = {};

export const LoginButton: React.FC<Props> = (props) => {
  return (
    //<a className="logout_button" href="/login">Login</a>
    <button
      title="login"
      className="logout_button"
      onClick={() => { window.location.href = '/login' }}>
      <Icon size={'75%'} icon={ic_login} />
    </button>
  )
};