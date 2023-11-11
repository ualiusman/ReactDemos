import styled from "styled-components"
import { AccuracyEnum, accuracyKeyForegroundColorMap, accuracyKeyColorMap } from "../../utilities/accuracy.utils"

export const StyledVirtualKeyButton = styled.button < { accuracy: AccuracyEnum }>`
margin: 2px;
height: 90px;
min-width: 80px;
padding-left: 10px;
padding-right: 10px;
color: white;
font-size: 30px;
font-weight: bold;
border-radius: 10px;
border: 2px solid #787C7F;
background: ${props => accuracyKeyColorMap.get(props.accuracy)};
&:hover {
border: 5px solid #787C7F;
}`