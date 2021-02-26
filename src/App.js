import Layout from './components/Layout/Layout';
import Auxiliary from './hoc/Auxiliary';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
function App() {
  return (
    <div >
      <Layout>
      	<BurgerBuilder /> 
      </Layout>
    </div>
  );
}

export default App;
