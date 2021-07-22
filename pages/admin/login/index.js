// rect imports
import Router from 'next/router'
import {useState} from 'react';
import useTranslation from 'next-translate/useTranslation'

// core imports
const {getCurrentUser, loginUser} = require('../../../src/core/firebase/auth');

// page imports
import Layout from './layout';

function FormLogin() {
  let {t} = useTranslation('admin');

	const [errorMessage, setErrorMessage] = useState(null);

  async function userLoginValidation(event) {
    event.preventDefault();

    let data = await loginUser(event.target.email.value, event.target.password.value);

    if(data.status === 'success') {
      Router.push('/admin/dashboard')
    } else {
      let err = data.data.code;
      
      switch(data.data.code) {
        case "auth/invalid-email":
          err = t('login_error_invalid_email');
          break;
        case "auth/wrong-password":
          err = t('login_error_wrong_password');
          break;
        case "auth/user-not-found":
          err = t('login_error_user_not_found');
          break;
      }
      setErrorMessage(err);
    }
  }

	return (
    <>
      <form onSubmit={userLoginValidation}>
        <div className='alert alert-warning' role="alert" style={{display: errorMessage?"block":"none"}}>
          {errorMessage}
        </div>    
        <label className='input-container'>
          <i className='fas fa-at' aria-hidden="true"></i>
          <input className='input-field' type="text" placeholder={t('login_email')} name="email" />
        </label>
        <label className='input-container'>
          <i className='fas fa-lock' aria-hidden="true"></i>
          <input className='input-field' type="password" placeholder={t('login_password')} name="password" />
        </label>
        <button type="submit" className='btn btn-primary btn-block'>{t('login_submit')}</button>
      </form>
    </>
	)
}

function Login(props) {
  let {t} = useTranslation('admin');

  return (
    <>
      <Layout title={t('login_title')} >
        <div className='card-body'>
          <h4>{t('login_title')}</h4>
          <h6>{t('login_description')}</h6>
        </div>
        <div className='card-body'>
          <FormLogin />
        </div>
      </Layout>
    </>
  )
}

Login.getInitialProps = async ({req, res}) => {
  if(req.headers.cookie) {
    res.writeHead(302, { Location: '/admin/dashboard' });
    res.end();
  }

  return { };
}

export default Login;
