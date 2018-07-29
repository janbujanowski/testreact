import React, { Component } from 'react';

const MockData = [
    {
        name: 'Mark',
        last: 'Otto',
        user: 'somewhere@gmail.com'
    },

    {
        name: 'Ash',
        last: 'somewhere@gmail.com',
        user: 'somewhere@gmail.com'
    }
];

class NiceTable extends Component {
    constructor() {
        super();
        this.cyce = [
            {
                name: 'Mark',
                last: 'Otto',
                user: 'somewhere@gmail.com'
            },

            {
                name: 'Ash',
                last: 'somewhere@gmail.com',
                user: 'somewhere@gmail.com'
            }];
    }
    dejdane() {
        let list = [];
        for (let i = 0; i < 100; i++) {
            let pers = {
                name: 'Mark',
                last: 'Otto',
                user: 'somewhere@gmail.com'
            }
            list.push(pers);
        }

        return list;
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <h5>Basic Table</h5>
                            <div className="ibox-tools">
                                <a className="collapse-link">
                                    <i className="fa fa-chevron-up"></i>
                                </a>
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i className="fa fa-wrench"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-user">
                                    <li><a href="#">Config option 1</a>
                                    </li>
                                    <li><a href="#">Config option 2</a>
                                    </li>
                                </ul>
                                <a className="close-link">
                                    <i className="fa fa-times"></i>
                                </a>
                            </div>
                        </div>
                        <div className="ibox-content">

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {MockData.map((p, index) => {
                                        return (
                                            <TableRow index={index} name={p.name} last={p.last} user={p.user} />);
                                    })}
                                    {this.dejdane().map((p, index) => {
                                        return (
                                            <TableRow index={index} name={p.name} last={p.last} user={p.user} />);
                                    })}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

class TableRow extends Component {

    render() {
        const { index, name, last, user } = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{name}</td>
                <td>{last}</td>
                <td>{user}</td>
            </tr>
        );
    }
}

export default NiceTable