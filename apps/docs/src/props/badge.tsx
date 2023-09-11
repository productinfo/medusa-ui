import { PropTable } from "@/components/props-table"
import { PropDataMap } from "@/types/props"

const badgeProps: PropDataMap = [
  {
    prop: "color",
    type: {
      type: "enum",
      values: ["green", "red", "blue", "orange", "grey", "purple"],
    },
    defaultValue: "grey",
  },
  {
    prop: "size",
    type: {
      type: "enum",
      values: ["small", "base", "large"],
    },
    defaultValue: "base",
  },
  {
    prop: "rounded",
    type: {
      type: "enum",
      values: ["base", "full"],
    },
    defaultValue: "base",
  },
]

const Props = () => {
  return <PropTable props={badgeProps} />
}

export default Props
