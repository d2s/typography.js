// @flow
import gray from 'gray-percentage'
import type { OptionsType } from 'Types'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import verticalRhythm from 'compass-vertical-rhythm'

const theme: OptionsType = {
  title: 'Twin Peaks',
  baseFontSize: '21px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Rosario',
      styles: [
        '700',
      ],
    },
    {
      name: 'Crimson Text',
      styles: [
        '400',
        '400i',
        '600',
      ],
    },
  ],
  headerFontFamily: ['Rosario', 'sans-serif'],
  bodyFontFamily: ['Crimson Text', 'serif'],
  headerGray: 10,
  bodyGray: 27,
  headerWeight: '700',
  bodyWeight: 400,
  boldWeight: 600,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const linkColor = '#ff5700'
    const vr = verticalRhythm({
      baseFontSize: '19px',
      baseLineHeight: '29.85px',
    })
    return {
      a: {
        color: linkColor,
        textDecoration: 'none',
        textShadow: '.03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff', // eslint-disable-line
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
      },
      'a:hover,a:active': {
        textShadow: 'none',
        backgroundImage: 'none',
      },
      'h1,h2,h3,h4,h5,h6': {
        marginTop: rhythm(1.5),
        marginBottom: rhythm(0.5),
      },
      'ul,ol': {
        marginLeft: rhythm(2/3),
      },
      // children ol, ul
      'li>ol,li>ul': {
        marginLeft: rhythm(2/3),
        marginBottom: 0,
      },
      // Blockquote styles.
      blockquote: {
        ...scale(1/5),
        borderLeft: `${rhythm(3/16)} solid ${linkColor}`,
        color: gray(41),
        paddingLeft: rhythm(13/16),
        fontStyle: 'italic',
        marginLeft: 0,
        marginRight: 0,
      },
      'blockquote > :last-child': {
        marginBottom: 0,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: gray(options.bodyGray),
        fontStyle: 'normal',
        fontWeight: options.bodyWeight,
      },
      'blockquote cite:before': {
        content: '"— "',
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
        blockquote: {
          borderLeft: `${rhythm(3/16)} solid ${linkColor}`,
          color: gray(41),
          paddingLeft: rhythm(9/16),
          fontStyle: 'italic',
          marginLeft: rhythm(-3/4),
          marginRight: 0,
        },
      },
    }
  },
}

export default theme

