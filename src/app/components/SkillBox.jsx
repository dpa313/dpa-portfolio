import React from 'react'
import htmlImg from '@/assets/skills/html.png'
import csslImg from '@/assets/skills/css.png'
import tailImg from '@/assets/skills/tail.png'
import bootstrapImg from '@/assets/skills/bootstrap.png'
import jsImg from '@/assets/skills/js.png'
import reactImg from '@/assets/skills/react.png'
import firebaseImg from '@/assets/skills/firebase.png'
import mongoImg from '@/assets/skills/mongo.png'
import expressImg from '@/assets/skills/ex.png'

const SkillBox = () => {
    const skillListTop = [
        {
          skill: "HTML 5",
          image: htmlImg,
        },
        {
          skill: "CSS3",
          image: csslImg,
        },
        {
          skill: "Tailwind",
          image: tailImg,
        },
        {
          skill: "Bootstrap",
          image: bootstrapImg,
        },
        {
          skill: "Javascript",
          image: jsImg,
        },
        {
          skill: "React",
          image: reactImg,
        },
        {
          skill: "Firebase",
          image: firebaseImg,
        },
        {
          skill: "MongoDB Atlas",
          image: mongoImg,
        },
        {
          skill: "Express.js",
          image: expressImg,
        },
      ];

  return (
    <div className="pt-2 xs:py-5 md:py-20 px-5 lg:px-48 space-y-9">
      <div
        className="flex justify-center flex-wrap gap-5 md:gap-10"
      >
        {skillListTop.map((skill, index) => {
          return (
            <div
              key={index}
              className="relative size-32  rounded-md overflow-hidden"
            >
              <div className="bg-cronic-gradient absolute left-[-40%] top-[-20%] w-[180%] h-[150%] animate-rotate"></div>
              <div className="absolute top-[1px] left-[1px] p-2 size-[126px] flex flex-col items-center justify-center gap-2  text-center bg-[#0a212b] rounded-lg">
                <img
                  src={skill.image}
                  alt=""
                  className="object-fit object-cover size-24"
                />
                <p className="text-xs text-[#c5c6c7]">{skill.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
  )
}

export default SkillBox