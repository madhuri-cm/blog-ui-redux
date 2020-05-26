import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

class UserShow extends React.Component{

    
    render(){
        return(
            <div>
                {
                    this.props.user ? 
                    ( <div>
                            <h1>USER NAME:{this.props.user.name}</h1>
                            <h2>POSTS WRITTEN BY USER </h2>
                            <ul>{
                                this.props.post.map(pos=>{
                      return <li key ={pos.id}><Link to={`/posts/${pos.id}`}>{pos.title}</Link></li>
                      })
                       }</ul> 
                       </div>)
                         : 
                    
                    ( <p>Loading...</p>)
                }
    

            </div>
        )
    }
}

const mapStateToProps = (state, props)=>{
    return{
        user:state.users.find(user => user.id == props.match.params.id),
        post:state.posts.filter(post=> post.userId == props.match.params.id)
    }
}

export default connect(mapStateToProps)(UserShow)

 