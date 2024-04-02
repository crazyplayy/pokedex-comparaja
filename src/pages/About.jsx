import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const About = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const loadMarkdown = async () => {
      const response = await fetch("/ABOUT.md");
      const data = await response.text();
      setMarkdown(data);
    };

    loadMarkdown();
  }, []);

  return <ReactMarkdown children={markdown} />;
};

export default About;