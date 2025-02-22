export const BLOGPOST_CLASSNAMES = [
  "grid grid-flow-col gap-0 mx-auto",
  "backdrop-blur-[5px] font-visuelt shadow-3xl relative backdrop-brightness-[55%] backdrop-contrast-[112%]",
  "overflow-y-scroll  scrollbar-thumb-fondy scrollbar-track-read scrollbar-thin",
  "transition-none duration-0 animate-none",
  "h-screen max-w-[900px] w-[900px] grid grid-flow-row gap-6",
  "border-sharper  border-opacity-10 py-[50px]",
  "bg-[#1E1E1E] bg-opacity-[95%]",
];

export const BORDER_POSTS_CLASSNAMES = [
  "boxy rounded-[2px] grid grid-flow-row backdrop-blur-[2px] backdrop-brightness-[65%] backdrop-contrast-[112%] shadow-3xl",
];

export const BLOGPOST_ANIMATION_VARIANTS = {
  initial: {
    opacity: 1,
    y: 0,
    x: 75,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
  },
  transition: {
    duration: 0.35,
  },
};
