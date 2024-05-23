import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function HomePage(){
  const notify = () => toast("Wow so easy !");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
    </div>
  );
}
export default HomePage
