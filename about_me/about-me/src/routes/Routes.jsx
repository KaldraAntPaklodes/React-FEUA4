import { Routes as RoutesWrapper, Route } from "react-router-dom";
import { appRoutes } from "../routes/const";


const Routes = () => {


    const { routes, Layout } = appRoutes
  return (
    
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
        
        <Route
          key={path}
          path={path}
          element={
            <Layout>
            <Component />   
            </Layout>     
          }
        />
      ))}
    </RoutesWrapper>
    
  );
};

export default Routes;