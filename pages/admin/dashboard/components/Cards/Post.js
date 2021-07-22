function Post(props) {
	return (
		<>
      <div className='card'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-auto d-flex align-items-center'>
              {/* 
                visibility visibility_off lock 
                article image format_quote
              */}
              <span className='material-icons'>visibility</span> 
            </div>
            <div className='col d-flex align-items-center'>
              <h4 className='m-0'>{'{POST_TITLE}'}</h4>
            </div>
            <div className='col-auto'>
              <div className='row'>
                <div className='col-auto'>
                  <button type='button' className='btn btn-primary btn-sm'>
                    <span className='material-icons-outlined d-flex align-items-center'>edit</span> 
                  </button>
                </div>
                <div className='col-auto'>
                  <button type='button' className='btn btn-primary btn-sm'>
                    <span className='material-icons-outlined d-flex align-items-center'>delete</span> 
                  </button>
                </div>
              </div>
            </div>
            <div className='col col-12'>
              <div className='row'>
                <div className='col-auto'>
                  <span className='material-icons-outlined d-flex align-items-center'>link</span> 
                </div>
                <div className='col'>
                  <h6 className='m-0'>{'{POST_SLUG}'}</h6>
                </div>
                <div className='col-auto'>
                  <span className='material-icons-outlined d-flex align-items-center'>link</span> 
                </div>
                <div className='col'>
                  <h6 className='m-0'>{'{POST_SLUG}'}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</>
	)
}

export default Post
