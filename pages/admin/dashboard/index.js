// rect imports
//import Router from 'next/router'
import { useRouter } from 'next/router'
import {userstate, useState, useEffect} from 'react';
import useTranslation from 'next-translate/useTranslation'

// core imports
const {getCurrentUser} = require('../../../src/core/firebase/auth');
const {admUserLoginRedirect} = require('../../../src/core/admin/base')

// page imports
import Layout from './components/Layout';

function Dashboard(props) {
  let {t} = useTranslation('admin');  

  return (
    <>
      <Layout title={t('dashboard_title')}>
        <div className='row'>
          <div className='col-4'>
            <div className='card'>
              <div className='card-body'>
                analytics
              </div>
            </div>
          </div>

          <div className='col-4'>
            <div className='card'>
              <div className='card-body'>
                analytics
              </div>
            </div>
          </div>

          <div className='col-4'>
            <div className='card'>
              <div className='card-body'>
                analytics
              </div>
            </div>
          </div>

          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                analytics
              </div>
              <div className='card-body'>
                nononono
              </div>
            </div>
          </div>
        </div> 
      </Layout>
    </>
  )
}

Dashboard.getInitialProps = async ({req, res}) => {
  if(!admUserLoginRedirect(req, res)) {

  }

  /*if(!req.headers.cookie) {
    res.writeHead(302, { Location: '/admin' });
    res.end();
  }*/

  return { };
}

export default Dashboard;
