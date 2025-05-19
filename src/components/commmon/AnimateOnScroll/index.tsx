
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../../helper/utils";
import {AnimateOnScrollProps} from "../../../types";


export function AnimateOnScroll({
  children,
  className,
  threshold = 0.3,
  delay = 0,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);
 return (
    <div
      ref={ref}
      className={cn(
        "animate-on-scroll",
        isVisible && "active",
        delay > 0 && `transition-all duration-500 delay-${delay * 100}`,
        className
      )}
      style={{ 
        transitionDelay: delay ? `${delay * 100}ms` : undefined,
        opacity: isVisible ? 1 : 0 
      }}
    >
      {children}
    </div>
  );
}
