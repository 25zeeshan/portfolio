export const scrollToSection = (section) => {
  const aboutSection = document.getElementById(section);
  aboutSection.scrollIntoView({ behavior: "smooth" });
};
