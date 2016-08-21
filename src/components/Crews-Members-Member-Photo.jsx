import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import AvatarEditor from 'react-avatar-editor';
import avatarPlaceholder from '../../static/avatar.png';
import S3Upload from 'react-s3-uploader/s3upload'
import ProgressBar from 'react-progressbar'

import classes from './Crews-Members-Member-Photo.scss'

@connect(
  state => ({ user: state.auth.data })
)
export default class Avatar extends Component {
  static propTypes = {
    user: PropTypes.object,
    photo: PropTypes.string,
    slug: PropTypes.string,
    showEditPhoto: PropTypes.bool,
    onToggleEditMode: PropTypes.func,
    getMembers: PropTypes.func,
    onPhotoEditSuccess: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      scale: 1,
      droppedImage: null,
      uploadProgress: 0
    }
  }

  progressHandler (percent) {
    this.setState({uploadProgress: percent})
  }

  uploadHandler () {
    const toBlob = require('canvas-to-blob')
    const {slug} = this.props
    const canvas = this.refs.editor
    const cavasData = canvas.getImageScaledToCanvas().toDataURL()
    const canvasScaled = toBlob(cavasData)
    canvasScaled.lastModifiedDate = new Date()
    canvasScaled.name = `${slug}.png`

    const upload = new S3Upload({
      fileElement: {files: [canvasScaled]},
      signingUrl: `/member/${slug}/photo`,
      onFinishS3Put: this.props.onPhotoEditSuccess,
      signingUrlHeaders: {Authorization: window.localStorage.authToken},
      contentDisposition: 'auto',
      server: process.env.APIHOST,
      onProgress: ::this.progressHandler
    });

    return upload;
  }

  dropFileHandler (event) {
    this.setState({droppedImage: event.target.value})
  }

  scaleHandler (event) {
    const {value} = event.target
    this.setState({scale: parseFloat(value)})
  }

  render () {
    const {showEditPhoto, photo} = this.props;

    const customPhoto = 'https://s3-us-west-2.amazonaws.com/spya/memberphotos/' + photo

    const photoSrc = photo ? customPhoto : avatarPlaceholder

    if (showEditPhoto) {
      if (__CLIENT__) {
        return (
          <div className={classes.photoContainer}>
            <AvatarEditor
              ref="editor"
              style={{width: '168px'}}
              image={this.state.droppedImage || photoSrc}
              width={168}
              height={130}
              border={0}
              color={[0, 0, 255, 1]} // RGBA
              scale={this.state.scale}
              onDropFile={::this.dropFileHandler}
            />
            { !this.state.uploadProgress ?
              <div>
                <input
                  name="scale"
                  type="range"
                  step="0.01"
                  defaultValue="1"
                  min="1"
                  max="2"
                  onChange={::this.scaleHandler}
                />
                <input
                  type="button"
                  onClick={::this.uploadHandler}
                  value="Save photo"
                />
              </div>
            :
              <ProgressBar completed={this.state.uploadProgress}/>
            }
          </div>
        )
      } else if (!__CLIENT__) {
        return null
      }
    } else if (!this.props.showEditPhoto) {
      return (
        <img
          src={photoSrc}
          alt="User photo"
        />
      )
    }
  }
}
