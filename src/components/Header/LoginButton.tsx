
type Props = {

};

export const LoginButton: React.FC<Props> = (props) => {
  return (
    //<a className="logout_button" href="/login">Login</a>
    <button
      className="logout_button"
      onClick={() => { window.location.href = '/login' }}>
      Login
    </button>

  )
};