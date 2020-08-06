import React from 'react'

function Jobs(props) {
  const { jobs, match } = props
  console.log(match)
  console.log(jobs)
  const item = jobs.find(item => item.id === match.params.id)
  var div = document.createElement('div')
  div.innerHTML = item.description
  var divApply = document.createElement('div')
  divApply.innerHTML = item.how_to_apply
  if (!item) {
    return <h1>Error 404 : Item not found</h1>
  }
  return (
    <>
      <div className='container-fluid m-lg-5'>
        <div className='row'>
          <div className='col-lg-8 col-md-8 col-sm-12'>
            <h2 className='text-success'>Job Title : <u><strong>{item.title}</strong></u></h2>
            <h4>Location : <u><strong>{item.location}</strong></u></h4>
            <h3><u><strong>Description :</strong></u></h3>
            <p>{div.innerText}</p>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <h3 className='ml-3'><u><strong>Company details :</strong></u></h3>
            <div className="card m-3" style={{ width: "18rem" }}>
              <img src={item.company_logo} className="card-img-top img-fluid" alt='img' />
              <div className="card-body">
                <h5 className="card-title">{item.company}</h5>
                <a href={item.company_url} className="stretched-link">Go to there website</a>
              </div>
            </div>
            <div className="card text-white bg-success m-3" style={{maxWidth: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">How to apply?</h5>
                  <p className="card-text">{divApply.innerText}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jobs