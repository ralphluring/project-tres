import React,{Component} from 'react';
import axios from 'axios';

class Home extends Component {
    state = {user:{}}   
    componentDidMount() {
    
        axios.get('http://localhost:5000/whoami')
        .then(response => {
            console.log(response);
            this.setState({user:response.data})
        })
        .catch(function(error){
            console.log(error)
        })
    }


    render(){
        return <div><a href="http://localhost:5000/auth/google">LOGIN</a></div>
    }
}

export default Home;