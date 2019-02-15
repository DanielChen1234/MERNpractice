import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap'
import {connect} from 'react-redux'
import {addItem} from '../actions/itemActions'

class ItemModel extends Component {
    constructor(){
        super();
        this.state = {
            model: false,
            name: ''
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    onSubmit = (evt) => {
        evt.preventDefault();

        const newItem = {
            name: this.state.name
        }

        //Add Item via Action
        this.props.addItem(newItem)//

        //close modal
        this.toggle()
    }

    render(){
        return(
            <div>
                <Button
                    color='dark'
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Item</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for='item'></Label>
                            <Input type='text' name='name' id='item' placeholder='add shopping item' onChange={this.onChange} />
                            <Button color='dark' style={{marginTop: '2rem'}} block onSubmit={() => this.onSubmit(this.state)}>Add Item</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (obj) => dispatch(addItem(obj))
})

export default connect(null, mapDispatchToProps)(ItemModel)