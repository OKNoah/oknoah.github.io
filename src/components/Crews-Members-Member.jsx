import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getMembersCrews} from 'redux/modules/membersCrews'
import {getMembers, getCrewMembers} from 'redux/modules/members'

import Window from './Window'
import CrewsMenu from './Crews-Members-Member-CrewsMenu'
import Photo from './Crews-Members-Member-Photo'

import classes from './Crews-Members-Member.scss'

@connect(
  state => ({
    user: state.auth.data,
    members: state.members.data,
    crews: state.crews.data,
    membersCrews: state.membersCrews.data
  }),
  dispatch => bindActionCreators({
    getMembersCrews,
    getCrewMembers,
    getMembers
  }, dispatch)
)
export default class Member extends Component {
  static propTypes = {
    name: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.string,
    user: PropTypes.object,
    onJoinCrew: PropTypes.func,
    onLeaveCrew: PropTypes.func,
    onDeleteMember: PropTypes.func,
    params: PropTypes.object,
    getMembersCrews: PropTypes.func,
    getCrewMembers: PropTypes.func,
    getMembers: PropTypes.func,
    members: PropTypes.array,
    crews: PropTypes.array,
    membersCrews: PropTypes.array
  }

  constructor (props) {
    super(props)
    this.state = {
      showCrewsModal: false,
      showEditPhoto: false
    }
  }

  leaveCrewHandler (crew) {
    this.props.onLeaveCrew({
      member: this.props.slug,
      crew: crew || this.props.params.crew
    })
    .then(() => {
      this.props.getMembersCrews(this.props.slug)
    })
  }

  joinCrewHandler (crew) {
    const {slug} = this.props

    this.props.onJoinCrew({
      member: slug,
      crew
    })
    .then(() => {
      this.props.getMembersCrews(slug)
    })
  }

  deleteMember () {
    if (confirm('Are you sure you want to delete this member and remove them from all crews?')) {
      this.props.onDeleteMember(this.props.slug)
    }
  }

  crewModalHandler () {
    if (this.state.showCrewsModal) {
      this.setState({showCrewsModal: false})
    } else {
      this.props.getMembersCrews(this.props.slug)
      .then(() => {
        this.setState({showCrewsModal: true})
      })
    }
  }

  toggleEditPhotoHandler () {
    this.setState({ showEditPhoto: !this.state.showEditPhoto })
  }

  photoEditSuccessHandler () {
    const {crew} = this.props.params
    if (crew) {
      this.props.getCrewMembers(crew)
    } else if (!crew) {
      this.props.getMembers()
    }
  }

  render () {
    const {
      name,
      description,
      user,
      slug,
      photo,
      params: {crew}
    } = this.props

    return (
      <div className={classes.member}>
        <Photo
          onPhotoEditSuccess={::this.photoEditSuccessHandler}
          onToggleEditMode={::this.toggleEditPhotoHandler}
          showEditPhoto={this.state.showEditPhoto}
          photo={photo}
          slug={slug}
        />
        {!this.state.showEditPhoto &&
          <div>
            <div><b>{name}</b></div>
            <div>{description}</div>
          </div>
        }
        { user &&
          <div className={classes.actionContainer}>
            <div
              className={classes.action}
              onClick={::this.toggleEditPhotoHandler}
            >
              <i
                className="fa fa-picture-o"
                title="Edit this member's photo"
              />
            </div>
            <div
              className={classes.action}
              onClick={::this.crewModalHandler}
            >
              <i
                className="fa fa-users"
                title="Edit this member's crews"
              />
            </div>
            <div
              alt="Remove member from crew"
              className={classes.actionDelete}
              onClick={crew ? ::this.leaveCrewHandler : ::this.deleteMember}
            >
              <i
                className="fa fa-user-times"
                title="Delete this member"
              />
            </div>
          </div>
        }
        {this.state.showCrewsModal &&
          <Window
            dismiss={::this.crewModalHandler}
          >
            <CrewsMenu
              members={this.props.members}
              crews={this.props.crews}
              membersCrews={this.props.membersCrews}
              onJoinCrew={::this.joinCrewHandler}
              onLeaveCrew={::this.leaveCrewHandler}
              name={name}
              slug={slug}
            />
          </Window>
        }
      </div>
    )
  }
}
