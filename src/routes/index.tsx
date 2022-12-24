import Layout from '@/layouts';
import Products from '@/pages/Products';
import Crypto from '@/pages/Crypto';
import Home from '@/pages/Home';
import NotFound from '@/components/NotFound';

/*
? I know routes folder created for routing in server but
? I think this way is possible.
*/
const ManageRouting = () => {
  return (
    //   <Layout>
    //     <Products />
    //     <Crypto />
    //   </Layout>

    // <Home />
    <NotFound />
  );
};

export default ManageRouting;
