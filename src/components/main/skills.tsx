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
      className="flex flex-col items-center justify-center gap-8 h-full relative overflow-hidden py-24 px-4"
    >
      <SkillText />

      {/* Programming Languages */}
      <div className="max-w-[1200px] w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
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

      {/* Backend Skills */}
      <div className="max-w-[1200px] w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-6 mt-8">
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

      {/* Development Tools */}
      <div className="max-w-[1200px] w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6 mt-8">
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

      {/* Frontend Skills */}
      <div className="max-w-[1200px] w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-8">
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

      {/* DevOps & Cloud */}
      <div className="max-w-[1200px] w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 mt-8">
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
    </section>
  );
};
