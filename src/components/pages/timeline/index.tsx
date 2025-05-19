import { Calendar } from "lucide-react";
import React from "react";
import { AnimateOnScroll } from "../../commmon/AnimateOnScroll";
import { experiences } from "../../../helper";

export function Timeline() {
    return (
        <section id="experience" className="py-16 px-4 bg-white dark:bg-gray-900">
            <div className="container mx-auto max-w-4xl">
                <AnimateOnScroll>
                    <h2 className="text-3xl font-bold text-center">
                        <span className="text-primary font-mono">#</span> Work Experience
                    </h2>
                    <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
                        My professional journey in the software development industry.
                    </p>
                </AnimateOnScroll>
                <div className="relative mt-6">
                    {experiences.map((item, index) => (
                        <div key={index} className="mb-8 flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
                                    <Calendar className="h-5 w-5" />
                                </div>
                                {index !== experiences.length - 1 && (
                                    <div className="h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm font-medium text-blue-500">
                                        {item.company}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {item.date}
                                    </p>
                                    <p className="mt-1 text-gray-700 dark:text-gray-300">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
