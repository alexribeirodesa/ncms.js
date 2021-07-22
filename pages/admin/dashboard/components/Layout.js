import AdminHead from '../../components/Head';

import Header from './Header';
import SideNav from './SideNav';
import PageHeader from './PageHeader';

function Layout(props) {
  return (
    <>
      <AdminHead title={props.title} />
      <div className='admin'>
        <div className='dashboard-wrapper'>
          <div className='container-fluid'>
            <div className='row page'>
              <div className='col page-body'>
                <PageHeader title={props.title} />
                <div className='container-lg' style={{padding: '0px'}}>
                  {props.children}
                </div>
              </div>
            </div>
          </div>
          <SideNav />
          <Header />
        </div>
      </div>
    </>
  )
}

export default Layout;
