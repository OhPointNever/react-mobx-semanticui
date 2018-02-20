import React from 'react'
import {Button} from 'semantic-ui-react'

const Widget = ({myProp}) => <Button content="Don't threaten me with a dead fish!" onClick={_handleClick} />

const _handleClick = () => alert(
    "Half dead he might be, but I'll come up after you and wake you up with a live one."
)

export default Widget
