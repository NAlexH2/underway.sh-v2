import { Link } from "react-router-dom";
import { ClassStyles, IDStyles } from "@/styles";

const projURL = "https://github.com/NAlexH2/underway.sh";

export const UnderwayShV3 = () => {
  return (
    <div className="my-3 mx-5">
      <div className="text-center">
        <Link
          to={projURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl italic underline decoration-honey font-semibold"
          id={IDStyles.TextLink}
        >
          underway.sh
        </Link>
      </div>
      <br />
      <p className="float-left border-r-5 border-b-5 mr-5 mb-4">
        <div className="text-2xl underline decoration font-medium decoration-honey">
          Tech Stack:
        </div>
        <ul className={`${ClassStyles.CustomList} mb-4`}>
          <li className="mt-1 ml-5">AWS Amplify (Hosting)</li>
          <li className="mt-1 ml-5">
            <Link
              to={"https://vite.dev/"}
              target="_blank"
              rel="noopener noreferrer"
              id={IDStyles.TextLink}
            >
              Vite
            </Link>
          </li>
          <li className="mt-1 ml-5">React</li>
          <li className="mt-1 ml-5">TypeScript</li>
          <li className="mt-1 ml-5">
            <Link
              to={"https://tailwindcss.com/"}
              target="_blank"
              rel="noopener noreferrer"
              id={IDStyles.TextLink}
            >
              Tailwind CSS
            </Link>
          </li>
          <li className="mt-1 ml-5">HTML</li>
          <li className="mt-1 ml-5">AI coding agents</li>
        </ul>
      </p>
      <div className="text-justify">
        <p className="mt-3">
          <i>underway.sh</i> is the current version of my personal site, and the
          first one I built alongside AI agents rather than entirely by hand. I
          still made the calls &mdash; the stack, the layout, what lives where,
          and how it should feel &mdash; but a lot of the scaffolding,
          boilerplate, and more than a few bug hunts got handed off to an agent
          working next to me. It turned building a website into something closer
          to a conversation.
        </p>
        <p className="mt-3">
          The stack is kept deliberately small so I could stay close to the
          code: Vite, React, and TypeScript, styled with Tailwind CSS and
          deployed on AWS Amplify. Trimming the tooling down &mdash; no Material
          UI, no Framer Motion &mdash; meant building my own components and doing
          my own light animation in plain CSS and Tailwind. Pairing with an
          agent made that faster without letting me skip the understanding; I was
          reviewing and correcting real code, not just accepting it.
        </p>
        <h3 className="underline decoration-honey mt-3">
          What Building With Agents Changed
        </h3>
        <p className="mt-3">
          The rhythm is different. Instead of grinding alone through docs for
          hours, I could describe what I wanted, get a first pass, and spend my
          time deciding rather than typing every line. The agent handled the
          repetitive parts &mdash; wiring up routes, drafting components, chasing
          down a build that refused to cooperate &mdash; and I stayed the one
          steering. The result is a site I still understand end to end, built in
          a fraction of the time the last version took.
        </p>
        <h3 className="underline decoration-honey mt-3">Why Vite?</h3>
        <p className="mt-1">
          Quite simple reasoning actually: I used it before! I knew how to set it
          up and customize various features while learning new ones too (such as
          aliasing). Earlier versions of the site started as raw HTML/CSS, then a
          NextJS build where I found myself stressing over client- and
          server-side rendering and never quite trusting the automatic routing.
          With Vite I get the features I liked from NextJS while being explicit
          about routing through React Router &mdash; on my terms.
        </p>
        <h3 className="underline decoration-honey mt-3">
          Where Is This Deployed?
        </h3>
        <p className="mt-3">
          The website is built and deployed from AWS Amplify. Amplify
          automatically detects changes to the source and rebuilds, much like
          GitHub Actions can too. I also used GitHub Pages and Actions for test
          deployments to make sure it looked right periodically.
        </p>
        <h3 className="underline decoration-honey mt-3">
          How Long Did This Take?
        </h3>
        <p>
          Far less than it used to. Working with an agent, the bulk of this
          version came together in about a week of off-and-on evenings around
          other commitments &mdash; a fraction of the roughly 2.5 months the V2
          took me, back when every new concept was something I had to research
          and wire up entirely on my own.
        </p>
      </div>
    </div>
  );
};

export default UnderwayShV3;
