function DialogaCMSApp({ Component, pageProps, router }) {
  if( router.pathname.includes('admin') ) {
    // load the admin styles
    require('./admin/style.admin.css');
  } else {
    // load the tamplate styles
    require('../public/assets/styles.css');
  }

  //console.log("Component");
  //console.log(Component);
  //console.log("pageProps");
  //console.log(`router.pathname: ${JSON.stringify(router.pathname)}`);

  //require('../public/assets/styles.css');
  
  return <Component {...pageProps} />
}
  
export default DialogaCMSApp