import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

class FeaturedJobs extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { jobs } = this.props
    if (!jobs.isFetched) {
      return (
        <>
          <table className="table table-hover mb-5">
            <thead>
              <tr>
                <th scope="col"><h1 className='text-dark'>Featured Jobs</h1></th>
              </tr>
            </thead>
            <tbody>
              {
                jobs && jobs.map(item => (
                  <tr key={uuidv4()}>
                    <td className='row'>
                      <Link to={`/${item.id}/`} className='text-left col-lg-6 col-md-6 col-sm-6 col-11'><h4>{item.title}</h4></Link>
                      <h5 className='text-right col-lg-6 col-md-6 col-sm-6 col-11'>{item.location}</h5>
                      <small className='text-left col-lg-6 col-md-6 col-sm-6 col-11 text-muted'>{item.company} ~ <span className='text-success'>{item.type}</span></small>
                      <small className='text-right col-lg-6 col-md-6 col-sm-6 col-11 text-muted'>{item.created_at}</small>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </>
      )
    }
  }

}

export default FeaturedJobs

