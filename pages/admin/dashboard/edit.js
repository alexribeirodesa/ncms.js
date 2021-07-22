// react imports
import React, { Component } from "react";
import Router from 'next/router'
import {userstate, useState, useEffect} from 'react'
import useTranslation from 'next-translate/useTranslation'

// core imports
const {getCurrentUser} = require('../../../src/core/firebase/auth')
const {admUserLoginRedirect} = require('../../../src/core/admin/base')

// page imports
import Layout from './components/Layout'
import Tags from './components/Tags'

class Paragraph {
  type = 'text';
  content = '<h1>abcderf</h1>';
  editing = false;

  constructor() {
    this.type = 'text';
    this.content = 'abcderf';
    this.editing = true;
  }
}

function Editor(props) {
  //<Editor placeholder="Digite aqui a sua história"/>
  const [paragraphs, setParagraphs] = useState([]);

  function addParagraph(e) {
    paragraphs.push(new Paragraph());
    setParagraphs([...paragraphs]);
  }

  function onClickCanvas(e) {
    if(!paragraphs.length) {
      addParagraph(e);
    }
  }

  return(
    <>
      <div className="editor_canvas" onClick={onClickCanvas}>
        { !paragraphs.length ? (
          <span className="placeholder"><p>{props.placeholder}</p></span>
        ) : (
          paragraphs.map((paragraph, index) => <span key={index} contentEditable={paragraph.editing} dangerouslySetInnerHTML={{ __html: paragraph.content }} />)
        )}      
      </div>
    </>
  )
}

function Blog(props) {
  let {t, lang} = useTranslation('admin');  

  // EditorJs é uma gracinha, mas ele tb é bem enrolado
  useEffect(() => {
    var EditorJs = require('@editorjs/editorjs');
    var ImageTool = require('@editorjs/image');
    var HeaderTool = require('@editorjs/header');

    var editor = new EditorJs({
      tools:{
        header: HeaderTool,
        image: {
          class: ImageTool,
          config: {
            uploader: {
              /**
               * Upload file to the server and return an uploaded image data
               * @param {File} file - file selected from the device or pasted by drag-n-drop
               * @return {Promise.<{success, file: {url}}>}
               */
              uploadByFile(file) {
                //console.log(file);
                let fd = new FormData();
                fd.append('fileUpload', file);
                fd.append('inputText', "this is just a test :3");

                return fetch('/api/upload', {
                  method: 'POST',
                  //headers: { 'Content-Type': 'application/json' },
                  //headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  //headers: { 'Content-Type': 'application/multipart/form-data;boundary="boundary"' },
                  //headers: { 'Content-Type': 'application/multipart/form-data' },
                  body: fd
                })
                .then(res => res.json())
                .then(response => {
                  return {
                    success: 1,
                    file: {
                      url: response.file_url
                    }
                  }
                })

                // your own uploading logic here
                //return MyAjax.upload(file).then(() => {
                  /*
                  return {
                    success: 1,
                    file: {
                      url: 'https://thiscatdoesnotexist.com/'
                      // any other image data you want to store, such as width, height, color, extension, etc
                    }
                  };
                  */
                //});
              }
            }
          }
        }
      },
      placeholder: 'Let`s write an awesome story!',
      holder: 'postEditor'

    });
  }, []);
 
  return (
    <>
      <Layout title={props.title}>
        <div className='col'>
          {/* 
            BLOG: 
            TITLE, CONTENT, TAGS
          */}
          <div className='card'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-12 postTitle'>
                  <h3>Post Title</h3>
                </div>
                <div className='col-12 postContent' id='postEditor'></div>
                
                <div className='col-12 postTags'>
                  <div className='row'>
                    <Tags placeholder="digite aqui as TAGs..." value="1,2,3,4,5,6"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

Blog.getInitialProps = async ({req, res, query }) => {
  if(!admUserLoginRedirect(req, res)) {

  }

  let title = '';
  let origin = '';
  let action = 'new';

  // check if we have a slug and if it is a valid one
  if(query.slug) {
    action = 'edit';
    // check if slug is valid
  }

  // 
  if(query.type === 'page') {
    origin = 'pages'
  } else if(query.type === 'tag') {
    origin = 'tags';
  } else {
    origin = 'blog';
  }

  // just a reference to output : 'blog_new_post'
  // this isn't the real page title, its just the tag
  // we will use to localization
  title = `${origin}_${action}_${query.type}`;

  return {
    title: title,
    slug: query.slug, 
    action: action,
    isEditing: (action === 'edit')
  };
}

export default Blog;
