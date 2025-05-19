import React from 'react';
import { Code, Server, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimateOnScroll } from '../../commmon/AnimateOnScroll';
import { Skill } from '../../../types';
import { frontendSkills, backendSkills, wipSkills } from '../../../helper';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};


const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="mb-4">
        <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.proficiency}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
            <motion.div
                className="bg-blue-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.proficiency}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            />
        </div>
    </div>
);

export function Skills() {
    return (
        <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto max-w-4xl">
                <AnimateOnScroll>
                    <h2 className="text-3xl font-bold text-center">
                        <span className="text-primary font-mono">#</span> Skills &
                        Technologies
                    </h2>
                    <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
                        I've worked with a variety of technologies in the mobile & web development
                        world. Here's a snapshot of my technical skills:
                    </p>
                </AnimateOnScroll>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:grid-cols-3 gap-6"
                >
                    {/* Frontend Development */}
                    <motion.div variants={item} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <div className="flex items-center gap-3 mb-2">
                            <Code className="w-6 h-6 text-blue-500" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frontend</h3>
                        </div>
                        {frontendSkills.map((skill, index) => (
                            <SkillBar key={index} skill={skill} />
                        ))}
                    </motion.div>

                    {/* Backend Development */}
                    <motion.div variants={item} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <div className="flex items-center gap-3 mb-2">
                            <Server className="w-6 h-6 text-green-500" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Backend and tools</h3>
                        </div>
                        {backendSkills.map((skill, index) => (
                            <SkillBar key={index} skill={skill} />
                        ))}
                    </motion.div>

                    {/* Database & Tools */}
                    <motion.div variants={item} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <ClipboardList className="w-6 h-6 text-purple-500" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Work in Progress</h3>
                        </div>
                        {wipSkills.map((skill, index) => (
                            <SkillBar key={index} skill={skill} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}