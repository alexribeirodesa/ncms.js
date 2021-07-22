// rect imports
import Router from 'next/router'
import {userstate, useState} from 'react';
import useTranslation from 'next-translate/useTranslation'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// core imports
const {getCurrentUser} = require('../../../src/core/firebase/auth');

// page imports
import Layout from './components/Layout';
import Post from './components/Cards/Post';

function BlogNavBar() {
  let {t, lang} = useTranslation('admin');  

  return (
    <>
      <div className='row p-4 pt-0 pb-4 d-flex justify-content-between'>
        <div className='col-auto'>
          <a href={`/${lang}/admin/dashboard/edit?type=post`}>
            <button type='button' className='btn btn-primary btn text-nowrap d-flex align-items-center'>
              <span className='material-icons-outlined'>add</span> {t('blog_new_post')}
            </button>
          </a>
        </div>
        <div className='col-auto'>
          <nav aria-label='Page navigation example'>
            <ul className='pagination'>
              <li className='page-item'><a className='page-link' href='#'>Previous</a></li>
              <li className='page-item'><a className='page-link' href='#'>1</a></li>
              <li className='page-item'><a className='page-link' href='#'>2</a></li>
              <li className='page-item'><a className='page-link' href='#'>3</a></li>
              <li className='page-item'><a className='page-link' href='#'>Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

function Blog(props) {
  let {t, lang} = useTranslation('admin');  

  return (
    <>
      <Layout title={t('blog_title')}>
        <BlogNavBar />
        <div className={`col`}>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <BlogNavBar />
      </Layout>
    </>
  )
}

export default Blog;
