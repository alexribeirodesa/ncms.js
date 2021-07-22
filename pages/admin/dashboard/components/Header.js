import DialogaSVG from '../../components/shared/DialogaSVG';

function Header(props) {
  return (
    <>
      <div className='header'>
        <div className='row'>
          <div className='col'>
            <DialogaSVG />
          </div>
          <div className='col-auto'>
            PROFILE
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;