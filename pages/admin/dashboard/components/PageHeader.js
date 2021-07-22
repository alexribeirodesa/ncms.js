import { Breadcrumbs } from 'nextjs-breadcrumbs'

function PageHeader(props) {
  const example = Breadcrumbs();

  return (
    <>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-between page-header'>
          <div className='col'>
            <h2>{props.title}</h2>
          </div>
          <div className='col-auto'>
            {example}
          </div>
        </div>
      </div>
    </>
  )
}

export default PageHeader;
