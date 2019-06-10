import React from 'react'
import {Location} from '@reach/router'
import {css} from 'theme-ui'

const base = 'https://github.com/dan-fritchman/fritch.mn/edit/master/www'

export default () => (
  <Location>
    {({location}) => {
      let path = location.pathname
      const lastChar = path[path.length - 1]
      if (lastChar === '/') {
        path = path.substring(0, path.length - 1)
      }

      return (
        <a
          href={base + path + '.md'}
          css={css({
            display: 'inline-block',
            color: 'inherit',
            fontSize: 1,
            my: 4
          })}
        >
          Edit this page on GitHub
        </a>
      )
    }}
  </Location>
)
