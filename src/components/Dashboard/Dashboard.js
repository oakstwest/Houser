import React from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom'

export default class Dashboard extends React.Component {
    render() {
        return (
            <div> Dashboard

            <div className="box">
                    <Link to='/Wizard'><button className='btn'>Add New Property</button></Link>
                </div>

                <House />
            </div >
        )
    }
}
