import AdminHead from '../components/Head';
import DialogaSVG from '../components/shared/DialogaSVG';

function Layout(props) {
  return (
    <>
      <AdminHead title={props.title}/>
      <div className='admin'>
        <div className='auth-wrapper'>
          <div className='auth-nav'>
            <DialogaSVG />
          </div>
          <div className='container h-100 text-center'>
            <div className='row h-100 justify-content-center'>
              <div className='col' style={{maxWidth: '640px'}}>
                <div className='card'>
                  {props.children}
                </div>
              </div>
            </div>
            <div>Coded with <i className='fas fa-heart txt-danger' /> by Dialoga Studio</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout;
