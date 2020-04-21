import styled from 'styled-components'
import Theme from "../../theme";
import { IButtonGroupStyles } from './ButtonGroup'

export const StyledButtonGroup = styled.div<IButtonGroupStyles>(
   {
      display: 'flex',
      flexGrow: 1,
      alignItems: 'flex-end'
   },
   ({ space, justifyContent }) => ({
      justifyContent,
      '> *:nth-child(n)': {
         margin: `${Theme.space[0]}px ${space}px`
      },

      '> *:first-child': {
         marginLeft: '0px'
      },

      '> *:last-child': {
         marginRight: '0px'
      }
   })
)
