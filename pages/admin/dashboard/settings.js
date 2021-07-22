// rect imports
import Router from 'next/router'
import {userstate, useState} from 'react';
import useTranslation from 'next-translate/useTranslation'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// core imports
const {getCurrentUser} = require('../../../src/core/firebase/auth');

// page imports
import Layout from './components/Layout';

function Settings(props) {
  let {t} = useTranslation('admin');  

  return (
    <>
      <Layout title={t('settings_title')}>
        <div className='col card'>
          <div className='card-body'>
            <h4>{t('settings_general')}</h4>
          </div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-2'>
                Propertie Name
              </div>
              <div className='col'>
                Propertie Component
              </div>
            </div>
          </div>
        </div>
        <div className='col card'>
          <div className='card-body'>
            <h4>{t('settings_contacts')}</h4>
          </div>
          <div className='card-body'>
            nononono
          </div>
        </div>
        <div className='col card'>
          <div className='card-body'>
            <h4>{t('settings_localization')}</h4>
          </div>
          <div className='card-body'>
            nononono
          </div>
        </div>
        
        <div className='col card'>
          <div className='card-body'>
            <h4>{t('settings_about')}</h4>
          </div>
          <div className='card-body'>
            nononono
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Settings;
