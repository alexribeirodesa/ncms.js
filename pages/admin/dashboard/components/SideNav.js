import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
//import ScroolDiv from '../../../src/components/ScroolDiv';
import { Scrollbars } from 'react-custom-scrollbars';

function SideNav(props) {
  let {t, lang} = useTranslation('admin');  

  return (
    <>
      <div className='side-nav'>
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200} hideTracksWhenNotNeeded={true} universal={true}>
          <a href={`/${lang}/admin/dashboard`}><span className='material-icons-outlined'>dashboard</span><span>{t('dashboard_sidenav_dashboard')}</span></a>
          <a href={`/${lang}/admin/dashboard/blog`}><span className='material-icons-outlined'>article</span><span>{t('dashboard_sidenav_blog')}</span></a>
          <a href={`/${lang}/admin/dashboard/pages`}><span className='material-icons-outlined'>content_copy</span><span>{t('dashboard_sidenav_pages')}</span></a>
          <a href={`/${lang}/admin/dashboard/tags`}><span className='material-icons-outlined'>local_offer</span><span>{t('dashboard_sidenav_tags')}</span></a>
          <a href={`/${lang}/admin/dashboard/vault`}><span className='material-icons-outlined'>inventory_2</span><span>{t('dashboard_sidenav_vault')}</span></a>
          <a href={`/${lang}/admin/dashboard/users`}><span className='material-icons-outlined'>manage_accounts</span><span>{t('dashboard_sidenav_users')}</span></a>
          <a href={`/${lang}/admin/dashboard/settings`}><span className='material-icons-outlined'>build</span><span>{t('dashboard_sidenav_settings')}</span></a>
        </Scrollbars>
      </div>
    </>
  )
}

export default SideNav;
