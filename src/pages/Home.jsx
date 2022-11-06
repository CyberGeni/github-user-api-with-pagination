import Profile from "../components/Profile";
import { Helmet } from "react-helmet-async";
function Home() {
  return ( 
    <>
      <Helmet>
        <title>GitHub User API</title>
        <meta name='description' content='Account info for cybergeni' />
      </Helmet>
      <Profile />
    </>
   );
}

export default Home;