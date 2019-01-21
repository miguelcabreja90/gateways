/**
 * Created by Migue on 18/1/2019.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import TableRow from './TableRow';
export default class ListGateway extends Component {
    constructor(props) {
        super(props);
        this.state = {gateway: [], peripheral: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/gateway')
            .then(response => {
                this.setState({gateway: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })


    }

    tabRow() {
        return this.state.gateway.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div style={{marginTop: 10}} className="content table-responsive table-full-width">

                <Link to={'/gateway/create'} className="btn btn-primary fa fa-plus"> Create</Link>


                <h3 align="center">Gateway List</h3>
                <table className="table table-hover" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Name</th>
                        <th>IP Adress</th>
                        <th colSpan="3">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}

