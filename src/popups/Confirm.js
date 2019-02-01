
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  render() {
    let showModel = this.state.show ? 'modal fade show' : 'modal fade'
    let styles = this.state.show ? {display : 'block', paddingRight: '17px'} : {display : 'none'}
    return (
      <div>
        <button
          type="button" className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={()=> this.setState({show: true})}
        >
          Launch demo modal
        </button>
        <div
          className={showModel}
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
          style={styles}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=> this.setState({show: false})}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Body Content
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Confirm)
