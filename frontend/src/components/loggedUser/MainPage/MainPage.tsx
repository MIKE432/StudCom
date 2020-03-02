import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../state/actions/userActions';
import SideBar from '../../core/SideBar/Sidebar';


const mapDispatchToProps = (dispatch: any) => ({
    logoutUser: () => dispatch(logoutUser()),
})

class MainPage extends React.Component<Record<string, any>, Record<string, any>> {
    render() {
        return (
            <div className='main-content'>
             <SideBar />
            <div>
                <button onClick={this.props.logoutUser} className="btn btn-success">Wyloguj sie</button>
            </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(MainPage)