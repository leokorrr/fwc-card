import React, {Component} from 'react'

class MainLayout extends Component {
    render() {
        const Component = this.props.component
        const {location} = this.props
        return (
            <Component location={location}/>
        )
    }
}

export default MainLayout