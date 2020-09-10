import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`


`;

export default class ContactForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          phone: '',
          address:'',
          message: '',
          choose:[]
        }
    }
    componentDidMount(){
        
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onPhoneChange(event) {
        this.setState({phone: event.target.value})
    }

    onAddressChange(event) {
        this.setState({address: event.target.value})
    }
    
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    onChooseChange(event) {
        this.setState({choose: event.target.value})
    }
    
    handleSubmit(event) {
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Your Phone Number" className="form-control" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Your Address" className="form-control" value={this.state.address} onChange={this.onAddressChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Message" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <select className="form-control" placeholder="Choose" value={this.state.choose} onChange={this.onChooseChange.bind(this)}>
                            {
                                this.state.choose.map(cho=>{
                                return <option key={cho} value={cho}>{cho}</option>
                                })
                            }
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Enquiry</button>
                </form>
            </div>
        )
    }
}