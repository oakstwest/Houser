import React from 'react'
import { Link } from 'react-router-dom'
export default class Wizard extends React.Component {
    render() {
        return (
            <div>
                Wizard

             <div className="box">
                    <Link to='/Dashboard'><button className='btn'>Cancel</button></Link>
                </div>

            </div>
        )
    }
}
