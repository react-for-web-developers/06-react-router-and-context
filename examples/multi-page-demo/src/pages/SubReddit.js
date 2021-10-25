import { useLocation, useParams } from 'react-router-dom';

function SubReddit() {
  const params = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // useEffect(() => {
  //   // MAKE AN API REQUEST
  // }, [params, location]);
  return (
    <div>
      <h3>{params.subredditName}</h3>
      <h5>{queryParams.get('sort')}</h5>
    </div>
  );
}

export default SubReddit;
