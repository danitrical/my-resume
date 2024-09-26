import React from "react"
import { IExperience } from "./types/experience.type"
import { Tag } from '../Tag';
export const Experience = ({companyName, startDate, endDate, location, designation, tags}: IExperience) => {
  return (
    <div className="flex flex-row justify-around my-5">
      <div className="w-1/3 text-right border-r-4 border-black pr-5">
        <p className="font-bold text-2xl">
            {companyName} 
        </p>
        <p className="font-light text-sm">
              {startDate} to {endDate || '*'}
        </p>
        <p className="font-light text-lg">
          {location}
        </p>
      </div>
      <div className="w-2/3 text-left pl-5">
        <h1 className="font-bold text-2xl">
          {designation}
        </h1>
        <div className="flex flex-row flex-wrap ">
          {tags.map(tag => <Tag name={tag} />)}
        </div>
      </div>
    </div>
  )
}