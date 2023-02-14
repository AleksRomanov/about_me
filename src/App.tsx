import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import Layout from './components/Layout/Layout';
import Index from './components/pages';

function App() {
  return (
    <ConfigProvider theme={{hashed: false}}>
      <Router>
        <Layout>
          <Index/>
        </Layout>
      </Router>
    </ConfigProvider>
  )
}

export default App
