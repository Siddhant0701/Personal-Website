import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  SKILL_DATA,
  TOOLS_SKILL,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.8)" }}
      className="flex flex-col items-center justify-center gap-8 h-full relative overflow-hidden py-24"
    >
      <SkillText />

      <div className="w-[1200px] grid grid-cols-8 gap-6 mt-8">
        {SKILL_DATA.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            iconName={skill.iconName}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="w-[1200px] grid grid-cols-7 gap-6 mt-12">
        {BACKEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            iconName={skill.iconName}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
            <div className="w-[1200px] grid grid-cols-6 gap-6 mt-12">
        {TOOLS_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            iconName={skill.iconName}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="w-[1200px] grid grid-cols-5 gap-6 mt-12">
        {FULLSTACK_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            iconName={skill.iconName}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
            <div className="w-[1200px] grid grid-cols-4 gap-6 mt-12">
        {FRONTEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            iconName={skill.iconName}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
      </div>
    </section>
  );
};
