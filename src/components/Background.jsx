import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'
import { PatternLines } from '@vx/pattern'
import { Bar } from '@vx/shape'
import { RadialGradient } from '@vx/gradient'
import { tween, easing } from 'popmotion'
import { MotionValue } from 'popmotion-react'

const stateChangeHandlers = {
  on: ({ value }) => tween({
    from: '#DA3424',
    to: '#8EB3DF',
    flip: Infinity,
    duration: 3000,
    yoyo: 10,
    ease: easing.easeIn
  })
    .pipe((v) => {
      const round = (val) => Math.round(val / 5) * 5
      const val = v.match(/\d+/g)
      return `rgba(${round(val[0])}, ${round(val[1])}, ${round(val[2])}, 1)`
    })
    .start(value),
  off: ({ value }) => tween({
    from: '#8EB3DF',
    to: '#DA3424',
    duration: 3000,
    ease: easing.easeIn
  })
    .pipe((v) => {
      const round = (val) => Math.round(val / 5) * 5
      const alpha = v.match(/\d\.\d+/g)
      const val = v.match(/\d+/g)
      return `rgba(${round(val[0])}, ${round(val[1])}, ${round(val[2])}, 1)`;
    })
    .start(value)
}

export default class Background extends Component {
  static propTypes = {
    user: PropTypes.object
  }

  heroCTAClickHander () {
    browserHistory.push('/portfolio')
  }

  render () {
    return (
      <MotionValue
        initialState="on"
        onStateChange={stateChangeHandlers}
      >
        {({ v }) => {
          return (
            <svg
              style={{
                backgroundColor: '#005DA8',
                width: '100%',
                height: '100vh',
                position: 'fixed',
                zIndex: -1,
                top: 0
              }}
            >
              {/* <PatternLines
                id="bg"
                height={10}
                width={10}
                stroke={'blue'}
                strokeWidth={1}
                orientation={['diagonal']}
              />*/}
              <RadialGradient
                id="gradient"
                from={v}
                fromOpacity={1}
                toOpacity={0}
                r={"75%"}
              />
              <PatternLines
                id="bg2"
                height={20}
                width={20}
                stroke={v}
                strokeWidth={2}
                orientation={['diagonal']}
              />
              <PatternLines
                id="bg2"
                height={20}
                width={20}
                stroke={v}
                strokeWidth={2}
                // strokeDasharray={v ? `${v.split(',')[1] % 10}, 10` : undefined}
                orientation={['diagonal']}
              />
              <Bar
                fill={`url(#gradient)`}
                height={1000}
                width={10000}
              />
              <Bar
                fill={`url(#bg2)`}
                height={1000}
                width={10000}
              />
            </svg>
          )
        }}
      </MotionValue>
    );
  }
}
