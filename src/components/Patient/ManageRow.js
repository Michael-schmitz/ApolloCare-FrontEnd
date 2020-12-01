import React, {Component, Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import getTime from '../../utils/getTime';
import moment from 'moment';
import empty from 'is-empty';

import {Divider, Grid} from '@material-ui/core';
import {ChevronRight} from '@material-ui/icons';

class ManageRow extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		const {appointment, theme, small, xs, filter} = this.props;

		return (
			<Link to={`/patient/appointments/${filter}/${appointment.id}`}>
				<div style={{display: "flex", flexWrap: "wrap", position: "relative", justifyContent: "space-between", padding: "1rem", background: "rgb(238, 238, 238)", cursor: "pointer"}}>
					<Grid item container xs={12} sm={2}><img src={`https://apollocare.blob.core.windows.net/doctor${appointment.doctor.id}/profile`} alt="Profile" style={{height: xs ? "12rem" : "8.5rem", width: "100%", objectFit: "cover", borderRadius: 6}}/></Grid>
					<Grid item container xs={12} sm={10}>
						<div style={{display: "flex", flexDirection: "column", width: "100%", marginLeft: !xs ? "1rem" : "", marginTop: xs ? "0.5rem" : ""}}>
							<span style={{width: "100%", fontSize: "2rem", color: "black"}}>{appointment.doctor.fname} {appointment.doctor.lname}</span>
							<span style={{fontWeight: 300, width: "100%", marginTop: "0.15rem", color: "black", fontSize: "1.1rem"}}>{appointment.doctor.detail.practicename}</span>
							<span style={{fontWeight: 300, width: "100%", marginTop: "0.15rem", color: "black", fontSize: "1.1rem"}}>{moment.utc(appointment.appointmentdate).format("MMM Do, YYYY")}</span>
							<span style={{fontWeight: 300, width: "100%", marginTop: "0.15rem", color: "black", fontSize: "1.1rem"}}>{getTime(appointment.starttime)} - {getTime(appointment.endtime)}</span>
						</div>
					</Grid>
					<div style={{display: "flex", alignItems: xs ? "flex-end" : "center", position: "absolute", right: 0, height: "100%", bottom: 0}}>
						<ChevronRight style={{fontSize: "3rem", marginRight: "0.5rem", marginBottom: xs ? "0.5rem" : "", color: "black"}}/>
					</div>
				</div>
				<Divider />
			</Link>
		)
	}
}

export default withRouter(ManageRow);