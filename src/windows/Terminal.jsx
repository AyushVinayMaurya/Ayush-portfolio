import WindowControls from "#components/WindowControls";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { Check, Flag } from "lucide-react";
import { useState } from "react";

const Terminal = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const displayedStack = selectedCategory
    ? techStack.filter((stack) => stack.category === selectedCategory)
    : techStack;

  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@Ayush % </span> show tech stack
        </p>
        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {displayedStack.map(({ category, items }) => (
            <li
              key={category}
              className="flex items-center cursor-pointer hover:opacity-75 transition-opacity"
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category ? null : category
                )
              }
            >
              <Check className="check" size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item}
                    {i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="footnote">
          <p>
            <Check size={20} /> {displayedStack.length} of {techStack.length}{" "}
            stacks loaded successfully.
          </p>
          <p className="text-black">
            <Flag size={15} fill="black" />
            Render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
