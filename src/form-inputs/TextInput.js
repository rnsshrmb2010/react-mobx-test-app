
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class TextInput extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let field = this.props.field;
		let autoFocus = false;
		if(this.props.autoFocus) {
			autoFocus = this.props.autoFocus
		}
		let cont = `form-group col-${this.props.cols} ${field.errors.length > 0 && 'has-error'}`
		return (
			<div className={cont}>
				<label>{field.label}<sup className="text-danger">{field.required && '*'}</sup></label>
				<div className={this.props.className}>
					<input
						autoFocus={autoFocus}
						name={field.name}
						placeholder={field.label}
						className={"form-control form-control-sm " + (field.errors.length > 0 && 'error-input')}
						type={"text"}
						autoComplete={field.name}
						value={field.value}
						onChange={this.props.handleChange}
					/>
					<span className="input-group-postpend"><i className={"input-icon "+this.props.icon}></i></span>
					<div className="col-md-12">
						<div className="row">
							{field.errors.length > 0 && field.errors.map(error => (
								<div key={error} className="text-danger">
									{error}&nbsp;
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(TextInput)