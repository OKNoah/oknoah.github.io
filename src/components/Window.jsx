import React, {PropTypes, Component} from 'react'
import Modal from 'react-dumb-modal'

import classes from './Window.scss'

export default class Window extends Component {
  static propTypes = {
    children: PropTypes.element,
    params: PropTypes.object,
    className: PropTypes.string,
    overlayClassName: PropTypes.string,
    dismiss: PropTypes.func
  }

  render () {
    const {dismiss} = this.props

    return (
      <Modal
        overlayClassName={ this.props.overlayClassName || classes.defaultModalOverlay }
        modalClassName={ this.props.className || classes.defaultModal }
        overlayStyle={{}}
        modalStyle={{}}
        dismiss={dismiss}
      >
        { React.cloneElement(this.props.children, {
          params: this.props.params,
          dismiss
        })}
      </Modal>
    )
  }
}
