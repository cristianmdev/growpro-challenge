/**
 * @desc Dependencies
*/
import React, { Suspense } from "react";
import { Route, Switch } from "wouter";

/**
 * @desc Pages
 */
const Home = React.lazy( () => import( "../../Pages/Home/Home") );
const Category = React.lazy( () => import( "../../Pages/Category/Category") );
const Product = React.lazy( () => import( "../../Pages/Product/Product") );

/**
 * @desc Root of application
 */
const Routes = () => {

  return (
    <Suspense>
      <Switch>
          <Route path="/" component={ Home } />
          <Route path="/bicycle/sub-category/:subCategory" component={ Category } />
          <Route path="/bicycle/product/:slug" component={ Product } />
      </Switch>
    </Suspense>
  )
};

export default Routes;