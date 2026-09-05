type SocialIconProps = {
  className?: string;
};

export const LinkedIn: React.FC<SocialIconProps> = ({ className }) => {
  return (
    <a
      href="https://www.linkedin.com/in/haffi-irfan-b8a71021a/"
      className={`${className || ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5C4.98 4.6 4.09 5.5 3 5.5S1 4.6 1 3.5 1.89 1.5 3 1.5s1.98.9 1.98 2zM.5 8.5h5V23h-5V8.5zm7.5 0h4.8v2h.07c.67-1.2 2.3-2.46 4.73-2.46C21.38 8.04 23 10.26 23 14.11V23h-5v-7.78c0-1.86-.03-4.26-2.59-4.26-2.59 0-2.99 2.03-2.99 4.13V23h-5V8.5z" />
      </svg>
    </a>
  );
};

export const Github: React.FC<SocialIconProps> = ({ className }) => {
  return (
    <a
      href="https://github.com/haffiirfan"
      className={`${className || ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2.1c-3.2.69-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.51.11-3.15 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.8 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.64.23 2.85.11 3.15.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.4-5.25 5.69.42.36.79 1.07.79 2.17v3.22c0 .32.21.68.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
      </svg>
    </a>
  );
};
export const Email: React.FC<SocialIconProps> = ({ className }) => {
  return (
    <a
      href="mailto:haffiirfan@gmail.com"
      className={`${className || ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    </a>
  );
};
