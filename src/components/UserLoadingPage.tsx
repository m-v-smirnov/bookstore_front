import loadingPicture from '../images/loading.gif';


type Props = {
};

export const UserLoadingPage: React.FC<Props> = (props) => {

  return (
    <div>
      <img src={loadingPicture} alt="" />
    </div>

  );
};

