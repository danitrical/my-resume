import React from "react"

export const Tag = ({name}: {name: string}) => {
  return (
    <div className="rounded-2xl bg-[#27272A] text-[#006fee] px-4 py-1 mr-2 my-1 flex text-sm border-2">
      {name}
    </div>
  )
}