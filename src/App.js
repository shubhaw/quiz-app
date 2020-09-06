import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';

const App = () => {
    return <BrowserRouter>
        <Layout>
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </Layout>
    </BrowserRouter>
}
export default App;
