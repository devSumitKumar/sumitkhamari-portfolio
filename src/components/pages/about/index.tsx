import React from 'react';
import { Github, Linkedin, Mail, FolderGit } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "../../commmon/avatar";
import { URL_CONST } from '../../../helper';

export function About() {
  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10" />
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="order-2 md:order-1 max-w-2xl">
            <p className="text-primary font-mono font-medium animate-fade-in-delay-1 opacity-0">
              Hello, my name is
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 animate-fade-in-delay-2 opacity-0">
              Sumit K Khamari
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mt-2 animate-fade-in-delay-3 opacity-0">
              I build things for the Mobile & Web.
            </h2>
            <p className="text-muted-foreground mt-6 text-lg animate-fade-in-delay-4 opacity-0">
              With 9+ years of experience in Application Development (4 - iOS Native, 5 - React) React development, I’ve built and deployed mobile applications across e-commerce, banking, and startup ecosystems. My expertise lies in developing cross-platform apps that are fast, scalable, and user-friendly while ensuring top-notch performance and security.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-delay-4 opacity-0">
              <a
                href={URL_CONST.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href={URL_CONST.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href={URL_CONST.GMAIL}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href={URL_CONST.REPO_PATH}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <FolderGit className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in-delay-2 opacity-0">
            <Avatar className="w-60 h-60 border-4 border-primary/20 shadow-xl">
              <AvatarImage src="https://avatars.githubusercontent.com/u/35481452?v=4" alt="Sumit Khamari" />
              <AvatarFallback className="text-5xl">SK</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <a
        href="#skills"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
      </a>
    </section>
  );
}