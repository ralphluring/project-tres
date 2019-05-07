import React,{Component} from 'react';
import axios from 'axios';

class Home extends Component {
    state = {user:{}}   
    componentDidMount() {
    
        axios.get('/whoami')
        .then(response => {
            console.log(response);
            this.setState({user:response.data})
        })
        .catch(function(error){
            console.log(error)
        })
    }


    render(){
        return <div><a href="/auth/google">LOGIN</a></div>
    }
}

export default Home;