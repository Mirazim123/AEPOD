import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EyesIcon(props) {
  return (
    <Svg
      width={22}
      height={13}
      viewBox="0 0 22 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.342 12.782l-1.931-.518.787-2.939a10.988 10.988 0 01-3.237-1.872L1.808 9.607.393 8.192l2.154-2.153A10.957 10.957 0 01.176.969L2.144.61C2.903 4.812 6.579 8 11 8c4.42 0 8.097-3.188 8.856-7.39l1.968.358a10.957 10.957 0 01-2.37 5.071l2.153 2.153-1.415 1.415-2.153-2.154a10.987 10.987 0 01-3.237 1.872l.787 2.94-1.931.517-.788-2.94a11.07 11.07 0 01-3.74 0l-.788 2.94z"
        fill="#fff"
      />
    </Svg>
  )
}

export default EyesIcon
