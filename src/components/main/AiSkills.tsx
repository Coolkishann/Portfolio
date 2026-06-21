'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { useLanguage } from '@/components/language-provider'
import { skills } from '@/constants'

export const AiSkills: FC = () => {
  const { t } = useLanguage()

  // Grab the specific categories you recently added
  const aiAndDesignSkills = skills.filter((s) =>
    ['ai', 'design'].includes(s.category) ||
    ['gsap', 'threejs', 'barbajs'].includes(s.skill_name)
  )

  return (
    <section id="ai-skills" className="relative w-full bg-background transition-colors">
      <div className="max-w-[880px] mx-auto grid grid-cols-1 min-[880px]:grid-cols-[40px_800px_40px] w-full">
        <div className="hidden min-[880px]:block bg-diagonal-stripes-animated border-x border-border" />

        <div className="relative border-x border-border min-[880px]:border-x-0 px-6 py-10">
          {/* Section Header on Border Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-background px-4 whitespace-nowrap">
            <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
              {t.AiSkills.title}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="flex justify-center w-full"
          >
            <div className="flex flex-wrap justify-center gap-x-[10px] gap-y-[10px] max-w-4xl">
              {aiAndDesignSkills.map((skill) => (
                <div
                  key={skill.skill_name}
                  title={skill.skill_name}
                  className="w-[48px] h-[48px] sm:w-[40px] sm:h-[40px] rounded-[13px] bg-[#242938] flex items-center justify-center overflow-hidden shadow-sm transition-transform duration-200 cursor-pointer hover:scale-105"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={skill.Image}
                    alt={skill.skill_name}
                    className="w-[28px] h-[28px] sm:w-[32px] sm:h-[28px] "
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="hidden min-[880px]:block bg-diagonal-stripes-animated border-x border-border" />
      </div>
    </section>
  )
}

export default AiSkills
