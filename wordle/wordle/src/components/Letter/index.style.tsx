import style from 'styled-components'
import { AccuracyEnum, accuracyColorMap } from '../../utilities/accuracy.utils'

export const StyledLetterButton = style.button <{ accuracy: AccuracyEnum }>`
    margin: 2px;
    width: 50px;
    height: 50px;
    border-radius: 2px;
    color: white;
    font-size: 30px;
    font-weight: bold;
    background-color: ${ prop => accuracyColorMap.get(prop.accuracy)}
`