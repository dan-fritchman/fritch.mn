import React from 'react'
import { Link } from 'gatsby'
import { css } from 'theme-ui'
import pkg from '@mdx-js/mdx/package.json'
import Burger from './burger'
import theme from './theme'
import DarkToggle from './dark-toggle'
import Search from './search'

const socialLinks = [
  {
    name: "GitHub",
    logo: "github",
    url: "https://github.com/dan-fritchman"
  },
  {
    name: "GitLab",
    logo: "gitlab",
    url: "https://gitlab.com/dan-fritchman"
  },
  {
    name: "Medium",
    logo: "medium",
    url: "https://medium.com/@dan_fritchman"
  },
  {
    name: "Twitter",
    logo: "twitter",
    url: "https://twitter.com/dan_fritchman"
  },
  {
    name: "Facebook",
    logo: "facebook",
    url: "https://www.facebook.com/danfritchman"
  },
  {
    name: "LinkedIn",
    logo: "linkedin",
    url: "https://www.linkedin.com/in/danfritchman/"
  }
];

const LogoLink = props => {
  const { url, logo, name, dark } = props;
  return <a
    href={url}
    css={css({
      display: 'flex',
      alignItems: 'center',
      p: 3,
      color: 'inherit'
    })}
  >
    <img
      src={`https://icon.now.sh/${logo}/24/${dark ? 'fff' : '000'}`}
      alt={name}
    />
  </a>
}

const MenuButton = props => (
  <button
    title="Toggle Menu"
    {...props}
    css={css({
      appearance: 'none',
      border: 0,
      color: 'inherit',
      p: 2,
      bg: 'transparent',
      borderRadius: 4,
      '&:focus': {
        outline: '1px solid'
      },
      [theme.mediaQueries.big]: {
        display: 'none'
      }
    })}
  >
    <Burger />
  </button>
)

export default ({ toggleMenu, dark, setDark }) => (
  <header
    css={css({
      display: 'flex',
      alignItems: 'center',
      fontSize: 14
    })}
  >
    <Link
      to="/"
      css={css({
        display: 'flex',
        alignItems: 'center',
        p: 3,
        color: 'inherit',
        fontWeight: 'bold',
        textDecoration: 'none'
      })}
    >
      <img
        src="https://github.com/dan-fritchman.png"
        alt="fritch.mn"
        height="32"
        css={css({
          mr: 3
        })}
      />
      <span
        css={{
          display: 'none',
          [theme.mediaQueries.big]: {
            display: 'inline'
          }
        }}
      >
        fritch.mn
      </span>
    </Link>
    <div css={{ margin: 'auto' }} />

    {socialLinks.map(s => <LogoLink dark={dark} {...s} />)}
    <Search />
    <DarkToggle dark={dark} setDark={setDark} />
    <MenuButton
      onClick={toggleMenu}
      css={css({
        mr: 2
      })}
    />
  </header>
)
