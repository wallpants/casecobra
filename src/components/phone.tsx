import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
   imgSrc: string;
   dark?: boolean;
   className?: string;
}

export const Phone = ({ imgSrc, dark = false, className, ...rest }: Props) => {
   return (
      <div {...rest} className={cn("relative pointer-events-none z-50 overflow-hidden", className)}>
         {/* eslint-disable-next-line */}
         <img
            src={dark ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"}
            className="pointer-events-none z-50 select-none"
            alt="phone"
         />
         <div className="absolute -z-10 inset-0">
            {/* eslint-disable-next-line */}
            <img src={imgSrc} className="object-cover" alt="overlaying phone image" />
         </div>
      </div>
   );
};
