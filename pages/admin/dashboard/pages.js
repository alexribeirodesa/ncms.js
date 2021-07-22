// rect imports
import Router from 'next/router'
import {userstate, useState} from 'react';
import useTranslation from 'next-translate/useTranslation'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// core imports
const {getCurrentUser} = require('../../../src/core/firebase/auth');

// page imports
import Layout from './components/Layout';

function Pages(props) {
  let {t} = useTranslation('admin');  

  return (
    <>
      <Layout title={t('pages_title')}>
        <div className='col'>
          <div className='card'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-1 d-flex align-items-center'></div>
                <div className='col-auto d-flex align-items-center'>
                  <span className='material-icons'>home</span> 
                </div>
                <div className='col d-flex align-items-center'>
                  <h5>{'{PAGE_TITLE}'}</h5>
                </div>
                <div className='col-auto'>
                  <button type='button' className='btn btn-primary btn-sm'>
                    <span className='material-icons-outlined d-flex align-items-center'>home</span> 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Pages;
