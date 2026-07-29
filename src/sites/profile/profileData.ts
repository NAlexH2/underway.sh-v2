// Canonical copy for the alex.underway.sh profile. Single-sourced.
// No em dashes or en dashes anywhere in the visible copy.

export interface WriteupPara {
  p: string;
}
export interface WriteupSub {
  sub: string;
}
export interface WriteupList {
  list: string[];
}
export type WriteupBlock = WriteupPara | WriteupSub | WriteupList;

export interface Project {
  title: string;
  dates: string;
  url?: string;
  featured?: boolean;
  stack?: string[];
  writeup?: WriteupBlock[];
}

export interface Job {
  title: string;
  subtitle?: string;
  location?: string;
  dates: string;
  bullets: string[];
}

export interface SiteData {
  wordmark: string;
  name: string;
  nav: string[];
  greeting: string;
  bio: string[];
  present: string[];
  before: string[];
  beforeOutro: string;
  experience: Job[];
  projects: Project[];
  footer: { github: string; linkedin: string };
}

export const SITE: SiteData = {
  wordmark: "alex.underway.sh",
  name: "Nicholas Alexander Harris",
  nav: ["Bio", "Experience", "Projects"],
  greeting: "Good evening!",

  bio: [
    `My name is <i><b>Nicholas Alexander Harris,</b></i> though I prefer to go by my middle name, Alex. I'm a systems administrator on the Live Ops team at <a href="https://www.grindinggear.com/" target="_blank" rel="noopener noreferrer">Grinding Gear Games</a> in Auckland, New Zealand, where I help keep Path of Exile 1 and 2 online and healthy. Before this I served eight years in the United States Navy, then earned a Bachelor of Science and a Master of Science in Computer Science at <a href="https://www.pdx.edu/" target="_blank" rel="noopener noreferrer">Portland State University</a>, in the <a href="https://www.pdx.edu/engineering/" target="_blank" rel="noopener noreferrer">Maseeh College of Engineering and Computer Science</a>, with a minor in Mathematics.`,
    `Over the years, friends have described me as "resilient" and "soft-spoken." They're qualities I've grown to embrace as reflections of both my character and my journey. These traits weren't always a natural part of me, but the challenges I've faced and the experiences I've gained have shaped me into a more grounded and thoughtful person.`,
  ],

  present: [
    `My team is small, which means the work is broad: server infrastructure, internal tooling, and whatever the day turns out to need. It's reactive by design and has an on-call rotation. It's the first job I've had where the shape of the day is genuinely unknown when it starts, and I've always found that exciting. New day, new problems to solve.`,
  ],

  before: [
    `I enlisted in the Navy in 2012 as an Electronics Technician. Four of those years were aboard the USS Theodore Roosevelt, where I ran three maintenance work centers and kept the ship's external radio communications alive, in and out of homeport and through a seven month deployment that took us from Norfolk, Virginia the long way around the world to San Diego, California. A considerable distance to cover to end up in the same country. Then three years at Commander Fleet Activities Sasebo, Japan, handling logistics for US, Japanese, Australian, Canadian and Indian naval forces during port visits, running helicopter operations in and out of the base, and giving weekly operations intelligence briefings to the command triad. I left in 2020 as a Second Class Petty Officer.`,
    `The Navy is where I picked up the parts of this work that aren't code. How to read a procedure and understand why it exists, how to hand something off cleanly, and how to work alongside people who are counting on you. Things break regardless of how careful anyone is. What you can control is being steady while you sort it out.`,
    `Portland State came next. I finished my BS, spent nearly four years as a teaching assistant walking first year students through their first programs, interned at CDK Global migrating a Pick database to AWS Aurora in C++ for a 542% pipeline speedup, and completed my Master's in June 2025 with a 3.95 GPA. Along the way I spent a term researching and writing a paper on computer vision, and built a solo data pipeline for live TriMet transit data that is still the most I've enjoyed any project in school.`,
  ],
  beforeOutro: `To see the work itself, please visit my projects section.`,

  experience: [
    {
      title: "Grinding Gear Games",
      subtitle: "Systems Administrator / DevOps, Live Ops",
      location: "Auckland, New Zealand",
      dates: "February 2026 - Present",
      bullets: [
        "Build and maintain code infrastructure for the Live Ops team, refactoring existing systems to run smarter and more efficiently against our current cloud providers.",
        "Ran cost analysis for a cloud provider across several months of research and infrastructure setup, helping get contracts signed and the platform ready in time for the Path of Exile 2 0.5.0 launch.",
        "Improved day-to-day operating efficiency through impactful improvements to the team's internal tooling.",
        "Share the on-call rotation (currently once every four weeks), responding to and resolving live service issues for Path of Exile 1 and 2.",
      ],
    },
    {
      title: "CDK Global",
      subtitle: "Software Engineering Intern",
      location: "Portland, Oregon",
      dates: "June 2025 - December 2025",
      bullets: [
        "Developed a Ruby on Rails API endpoint and background job system to deliver near real-time vehicle cost updates in Roadster.",
        "Integrated Confluent Kafka, AWS EventBridge, and an internal Vehicle Cost API to trigger updates and log changes in the activity stream.",
        "Ensured sales staff had the most accurate pricing and profit calculations available during deal finalization.",
        "Applied event-driven patterns to keep vehicle cost data consistent across services, with every change traceable through the activity stream.",
        "Collaborated with the team through design discussion, code review, and iterative testing to ship the feature into a production workflow.",
      ],
    },
    {
      title: "CDK Global",
      subtitle: "Software Engineering Intern",
      location: "Portland, Oregon",
      dates: "June 2024 - October 2024",
      bullets: [
        "Enhanced C++ infrastructure to migrate data from a Pick database to the cloud as part of CDK's modernization of CDK Drive software for car dealerships. Increased pipeline speed and validity to AWS Aurora through Kafka messaging service, taking a serial pipeline and modifying it to be parallel, producing an average of 542% performance uplift.",
        "Developed and enhanced software solutions within the automotive industry, focusing on creating scalable, efficient, and user-friendly applications to meet client needs and industry standards.",
        "Collaborated with cross-functional teams to identify and resolve performance bottlenecks, ensuring smooth deployment and optimal functionality of enterprise-level systems.",
        "Gained experience in debugging, code optimization, and implementing new features while adhering to strict project deadlines and maintaining high-quality standards.",
        "Participated in team meetings and code reviews to exchange knowledge, refine best practices, and contribute to the overall improvement of development workflows.",
        "Leveraged technical expertise and problem-solving skills to deliver impactful contributions in a fast-paced, results-driven environment.",
      ],
    },
    {
      title: "Portland State University",
      subtitle: "Teacher's Assistant",
      location: "Portland, Oregon",
      dates: "April 2021 - December 2024",
      bullets: [
        "Facilitated introductory programming labs into the field of Computer Science for first year students as a peer educator, helping students learn how to execute their first program to building abstract data types by practicing in the lab environment and providing meaningful constructive feedback.",
        "Performed training for new hires over a 10-week period each term to enable smooth and successful integration in the team, as well as working with students through open conversations and role-playing as students with broken code.",
        "Created new course materials for all students to use and practice with in the Computer Science program for their first year of lower division courses.",
      ],
    },
    {
      title: "United States Navy",
      subtitle: "Electronics Technician, 2nd Class",
      dates: "February 2012 - February 2020",
      bullets: [
        "USS Theodore Roosevelt (February 2013 - February 2017): Manager of three maintenance work centers, tracking and performing maintenance on dozens of large systems with hundreds of maintenance action items each to maintain external radio communications on-board the ship. Created and executed meticulous inventory systems for 40,000 pieces of ship's technical documentation, saving countless person-hours.",
        "Commander Fleet Activities Sasebo, Japan (May 2017 - February 2020): Tracked, authorized, and issued approved logistical requests for US, Japanese, Australian, Canadian, and Indian naval forces during port visits. Conducted helicopter operations in and out of Sasebo for VIPs and same-day high-priority service items delivered to ships at sea. Performed weekly Operations Intelligence briefings with the command triad and high-ranking officers.",
      ],
    },
  ],

  projects: [
    {
      title: "underway.sh",
      dates: "July 2026",
      url: "https://github.com/NAlexH2/underway.sh",
      featured: true,
      stack: [
        "AWS Amplify (Hosting)",
        "Cloudflare (DNS)",
        "Vite",
        "React",
        "React Router",
        "TypeScript",
        "Tailwind CSS",
        "HTML",
        "AI coding agents",
      ],
      writeup: [
        { p: `<i>underway.sh</i> is the current version of my personal site, and the first one I built alongside AI agents rather than entirely by hand. I still made the calls (the stack, the layout, what lives where, and how it should feel) but a lot of the scaffolding, boilerplate, and more than a few bug hunts got handed off to an agent working next to me. It turned building a website into something closer to a conversation.` },
        { p: `The stack is kept deliberately small so I could stay close to the code: Vite, React, and TypeScript, styled with Tailwind CSS and deployed on AWS Amplify. Trimming the tooling down, no Material UI and no Framer Motion, meant building my own components and doing my own light animation in plain CSS and Tailwind. Pairing with an agent made that faster without letting me skip the understanding; I was reviewing and correcting real code, not just accepting it.` },
        { sub: `What Building With Agents Changed` },
        { p: `The rhythm is different. Instead of grinding alone through docs for hours, I could describe what I wanted, get a first pass, and spend my time deciding rather than typing every line. The agent handled the repetitive parts, wiring up routes, drafting components, chasing down a build that refused to cooperate, and I stayed the one steering. The result is a site I still understand end to end, built in a fraction of the time the last version took.` },
        { sub: `Why Vite?` },
        { p: `Quite simple reasoning actually: I used it before! I knew how to set it up and customize various features while learning new ones too (such as aliasing). Earlier versions of the site started as raw HTML/CSS, then a NextJS build where I found myself stressing over client and server side rendering and never quite trusting the automatic routing. With Vite I get the features I liked from NextJS while being explicit about routing through React Router, on my terms.` },
        { sub: `One Build, Three Subdomains` },
        { p: `underway.sh is a single build that serves three hostnames. Cloudflare handles DNS, pointing underway.sh, alex.underway.sh, and q.underway.sh at the same AWS Amplify deployment. On load, the app reads the subdomain and mounts the matching site: the root shows a landing page, alex. shows this profile, and q. shows Querium. React Router then takes over inside the profile to move between the Bio, Experience, and Projects sections.` },
      ],
    },
    {
      title: "TriMet Data Pipeline",
      dates: "April 2024 - June 2024",
      url: "https://github.com/NAlexH2/ETL-TriMetPipeline",
      stack: ["Google Cloud Platform (GCP)", "Python (Pandas, Requests, Psycopg2, Beautiful Soup 4)", "Linux System Services", "Bash", "CRON Tabs", "PostgreSQL", "JSON"],
      writeup: [
        { p: `This pipeline was part of a class project, but was significant in scale that students had a chance to experience the full length of constructing and managing a data pipeline. The data was provided freely and graciously by <a href="https://trimet.org/about/index.htm" target="_blank" rel="noopener noreferrer">TriMet</a> (Portland Metro area public transportation).` },
        { p: `Students had the option to either work on it in a group of 4 to 6 people, or on their own. I elected to do the project solo as I had wanted to really push my Python skills to limit and also gain the full experience of learning from the process, end to end. This benefited me greatly as I learned more than I expected, and found myself enjoying it more than any other project I've ever worked on in school.` },
        { p: `Because of this, I found myself looking more for data engineering roles over others. I began also doing side projects that were just exploring accessing and harvesting data from other places on the net just to explore this specialization of software engineering a bit more.` },
        { p: `I've made my google <a href="https://docs.google.com/presentation/d/1zwebj1bL0xYedI6ku5EEljGD72pKLKqQsEkvEro4beA/edit?usp=drive_link" target="_blank" rel="noopener noreferrer">slides</a> and the <a href="https://drive.google.com/file/d/13ah6aVZQ6AwBv5OBT88kJJH_HsmaSLNJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">video presentation</a> public to view for the final stage of the project. These both were part of the final milestone requirement, and there was no in-person presentation conducted by instruction of the professor.` },
        { p: `Another important thing to note: each day we were expected to collect data, and if that day passed, that data was lost, and we would have incomplete data. This will come up in the near future of this writeup.` },
        { p: `We were expected to pull data from two endpoints daily. Initially it was just a breadcrumb of a given group of vehicles (I had the 'snickers' vehicle group). Each group consisted of almost 100 vehicles each. Each vehicle had a fluctuating amount of breadcrumb data. What's in a breadcrumb? Event trip id, stop id, date, vehicle id, distance traveled in meters, activity time in seconds (counts up from 0 starting at midnight), GPS longitude and GPS latitude. There was also the number of GPS satellites the bus was tracking, as well as a GPS_HDOP value. Neither of these were retained in the final database that was built, but were incredibly helpful for validating data.` },
        { p: `Now how did this pipeline flow. By the end of the project there were 3 different virtual machines setup on GCP: first was to pull breadcrumb data, another was to pull stop event data, and the last was to manage the assertions and transformations on the data then put it into a PostgreSQL database. The first two VM would publish, while the last VM would subscribe and wait for the data to come through.` },
        { sub: `Challenges: Wrong Google Cloud Python Package` },
        { p: `There were many instances where I hit blockers. A prominent one at the very start of the project was the issue of Google Pub/Sub performance. Initially, the Python script managing the subscribing part of the pipeline was using the <code>googleapiclient.discovery</code> package. Instead it should have been using the <code>google.cloud</code> package, and once this was corrected and the code refactored, the subscribing went from around 12 hours down to about 4 minutes for around 300k daily records. The publishing also was impacted by this oversight, going from 1.5 hours down to somewhere between 5 and 10 seconds for the same number of records.` },
        { sub: `Many Pending Threads` },
        { p: `Another issue encountered was <b>data was being dropped after being sent to the publisher.</b> This wasn't a package issue, but rather an issue with how messages were acknowledged after being published. This is called a "future" in this context.` },
        { p: `This was something I had to figure out farther into the project than I had liked. Given a list of futures waiting for results, a blocking for loop was used to wait until they are all properly popped from this list. This ensures all messages are published before moving on. This is <b>A</b> solution, and it's because not all <code>future.results()</code> happen quick enough, and threads get piled up and may be lost when the script ends. Because of this, the missing acknowledgment was causing several thousands of records to just never be sent. The time it took to publish all of this data wasn't actually because of the pending threads, just the amount of data being sent. 99% of the time spent on publishing was actually spent on publishing, not waiting for pending threads.` },
        { sub: `Having Complete Data` },
        { p: `Complete data in this context means I had data from every day of the term. As mentioned in the opening segment of this project, if a day was missed, that data was permanently lost. This challenge was solved by two approaches: modular design of the entire pipeline and backing up the data. Let me discuss the modular design first, as it paints the picture for how I was able to have complete data for the entire pipeline.` },
        { p: `<b>For the modular design:</b> Each Python file written was capable of running entirely independently of the entire pipeline for both debugging and testing purposes. You are probably wondering then, how can a pipeline be a pipeline if each piece can operate independently of the other? Well, each script has certain requirements to be able to actually run. Most require either data to have been pulled down from the endpoints provided to us by the University, or to have existing data sitting in another directory from the publisher. Comments exist at the top of each file indicating if a chunk of this pipeline can be ran independently, or under what conditions it can be ran. Again, this was mostly for debugging and testing purposes!` },
        { p: `<b>Backing up data:</b> Backing all the data up that was collected was several approaches. Initially, I would just save it to my computer locally. Not ideal, but it's what I had for the moment, and that was okay! However, I quickly wanted to automate this with one of the virtual machines I was running the code on. Discovering the service account was a google email of sorts, I was able to give the account permission to my school provided google drive. Once this was done, I was able to send all the data to the drive daily, automatically.` },
        { p: `A few lines in the backup script essentially facilitate the entire backup from local storage to the cloud. For every file pulled from the endpoint, it would be uploaded to the cloud in a loop. If you want to see it, you can go look at the backup code <a href="https://github.com/NAlexH2/TriMet-Data-Pipeline-CS510/blob/main/src/mainpipe/uploadgdrive.py" target="_blank" rel="noopener noreferrer">here</a>.` },
        { sub: `Lessons Learned` },
        { list: [
          `Optimizing Data Processing: Learned how to efficiently handle real-time data streams, particularly the importance of optimizing Pub/Sub for fast data publishing and subscribing.`,
          `Handling Large-Scale Data: Gained experience in managing and processing massive datasets, understanding database performance considerations, and the importance of structuring queries for scalability.`,
          `Effective Use of Cloud Services: Deepened my understanding of integrating cloud services like Google Pub/Sub and PostgreSQL, and the significance of selecting the right libraries for seamless service communication.`,
          `Troubleshooting and Debugging: Improved my troubleshooting skills by addressing synchronization issues and fine-tuning system performance, ensuring timely data updates.`,
          `Automation and Reliability: Gained insight into system automation (via crontabs and scheduled tasks) and the importance of backup strategies to maintain data integrity and reliability.`,
        ] },
      ],
    },
    {
      title: "Video Game Search",
      dates: "November 2023 - December 2023",
      url: "https://github.com/NAlexH2/gcp-video-game-search",
      stack: ["Python", "Flask/Jinja2", "HTML & Tailwind CSS", "IGDB and its API", "Google Cloud Vision AI API", "Docker"],
      writeup: [
        { p: `This website was put together for a final project during Fall term at Portland State University, and was started the 28th of November 2023 and completed on the 6th of December 2023. The only requirements that we had to be concerned with (at the graduate level) was that it must incorporate 2 different API. It is a Flask application hosted on the Google Cloud Platform (GCP) through their Cloud Run service using a docker image built from the source I produced.` },
        { p: `I have had an idea for awhile that I wanted to turn into something more tangible: create a website that allows a person to explore the entirety of video game history. That is a tall order, especially for this final project! Having still wanted to make this, I elected to go a simpler path, allowing people to query the Internet Games Database (IGDB) and see information regarding that search.` },
        { p: `I had also needed to select another API. During this brainstorming process, the class had just gone through learning how to use Google Cloud AI API, and I figured that generating labels to be used as the alt text on the games cover art would be a good idea. It is/was, but the training data isn't curated towards games cover art, so the results were mixed.` },
        { p: `For example: it knows who Mario is, but not Sonic (mostly). So if you look up a Mario and Sonic sports game, the alt text accurately generates for Mario, but not Sonic... Or any of the other characters that appear on the box art, again, mostly.` },
        { sub: `Challenges` },
        { p: `The hardest part of this project was parsing the data from the IGDB API after receiving it. Initially, I thought it was just getting the app to appear in the dev environment I was using, but the IGDB API is particularly stale.` },
        { p: `When retrieving information, some of the endpoints were non-functional, and so there were workarounds that had to be performed to get the exact data I needed. This included, but not limited to: obtaining the exact release date, the ESRB age rating, and only wanting to view actual real and released games.` },
        { p: `IGDB allows anyone, it seems, to upload and add a game to the database. This means there are games that are simply fan creations that don't live on the mainstream. This is fine, but it was interfering with more legitimate results causing these fan creations to have precedence over mainstream releases.` },
        { p: `I had to develop this workaround to source legit titles because of the limitations I had to set for both the IGDB API and Google Cloud Vision AI API. If the user attempted too many results, the page would eventually timeout instead of waiting for a response.` },
        { sub: `Jinja Templates Are Pretty Cool!` },
        { p: `One thing I had discovered working on this project and reading through documentation was that Jinja templates can smartly identify which HTML components to render based on if the response data was returned with or without certain information.` },
        { p: `In one example, I have a Jinja for loop going through a "games" response object (which has multiple results from the query the user did), and for each game, if <code>game["aggregated_rating"]</code> has data, then the score, out of 100, would be displayed.` },
        { p: `However, if it does not have any data, the page will alert the user that for some reason IGDB currently does not have any critical reviews aggregated for a certain game. I had to do this for the ESRB rating as well, as it is possible for the IGDB to have a released game in their records, but missing the rating for one reason or another.` },
        { sub: `How Long Did This Take?` },
        { p: `I was given approximately 2 weeks to utilize all the knowledge from the class to finish this final project. However, I was finished in a far shorter amount of time, and the project was completed in approximately 6 days. I elected to work ahead of the class material as to give myself as much time needed to complete the project. Easing my future school work debt made this project incredibly manageable!` },
      ],
    },
    {
      title: "SAFE",
      dates: "January 2023 - June 2023",
      url: "https://github.com/PSU-MCECS-SAFE/SAFE",
      stack: ["TypeScript", "React", "MaterialUI", "NodeJS", "Express", "REST API", "PM2", "Python"],
      writeup: [
        { p: `SAFE, the System for Anonymous Feedback. In our final two terms as Undergraduate students at Portland State University, we are tasked with developing a product that can be used within the community called a "Capstone Project". The purpose of this project is to not only give back to the Portland community in some way, but to also demonstrate the skills and abilities we have learned in the years we've attended PSU.` },
        { p: `These projects are essentially auctioned off to the team who is the most convincing they can succeed at it. Teams are selected by the people who requested to be a team lead at the start of the first term. The SAFE project was in high-demand by all teams as it was something people felt was important, a project that gave back not to any community, but the community we were all part of: PSU's Computer Science Department.` },
        { p: `The front is put together is a React app using TypeScript as the language. Components came from Material UI, with styling and CSS done natively by modifying CSS attributes directly or using a styling component.` },
        { p: `The backend has several components to it:` },
        { list: [
          `PostgreSQL Database to capture and store feedback.`,
          `Express REST API to capture POST requests from the website and store them inside the database.`,
          `Configuration file that can be updated seamlessly to transfer message receipts to another individual.`,
          `PM2 to restart the REST API in the event there are configuration changes.`,
          `Python deployment script to make setup as simple as possible and support production like environment testing.`,
        ] },
      ],
    },
    {
      title: "HaskellGo",
      dates: "February 2023 - March 2023",
      url: "https://github.com/NAlexH2/HaskellGo",
      stack: ["Haskell", "Haskell Language Server", "GHC", "Cabal"],
      writeup: [
        { p: `The game of "Go" is ancient and the first instances of the game being played goes back around 4,000 years ago in China. It has stood the test of time and is still enjoyed by many people world wide. This repository is an attempt to re-create the game using Haskell as the language of choice while utilizing <a href="https://docs.haskellstack.org/en/stable/" target="_blank" rel="noopener noreferrer">The Haskell Tool Stack</a>.` },
        { sub: `Capturing Units (CaptureGo.hs)` },
        { p: `Firstly, let me explain some vocabulary you will see coming up.` },
        { list: [
          `<b>Unit:</b> A collection of stones of the same color where their cardinal intersections (north, south, east, west) connect.`,
          `<b>Liberties:</b> The cardinal positions of a stone that are currently <i>empty</i>. This means that no stone has yet to be placed next to another stone, regardless of the color.`,
        ] },
        { p: `This was the task that took me the longest to figure out. I could not manage to find a way for a period of time on what solution would work best. At a certain point I ran into the issue of having 3 to 5 functions attempting to tackle this issue. I took a step back and re-examined the issue. Each "stone" in a unit must lose all its liberties to be considered captured.` },
        { p: `Once I realized all I had to do was examine each stone to check its liberties and then check all the other stones in that unit for the same instance of losing all their liberties. From there, the code returned True or False for each stone. True if it lost all its liberties, False if any of its liberties were not occupied. If any were False, then the unit had not been captured; if all were True then the unit had been captured.` },
        { sub: `Identifying Units (CaptureGo.hs)` },
        { p: `This was the 2nd most difficult task, weirdly enough. It had felt (at first) as if it was going to take me the entire duration of the project but I found myself noticing a pattern in the code I had already wrote.` },
        { p: `This pattern actually saved me a lot of time trying to generate a solution, and I realized that my arrays had something along these lines of overlapping values, for example <code>[[0,1,3],[2,3],[3,5,6],[4,7],[5,8]]</code>.` },
        { p: `Once recognizing this pattern, and a bit more research, <code>a \`union\` b</code> could do a lot of heavy lifting in identifying my overlapping values. There is a lot of summarizing happening I will admit, but with some fancy logic and a bit of function composition the above array came out to a nice neat list of lists like this: <code>[[0,1,2,3,5,6,8],[4,7]]</code>.` },
        { p: `Where the first was all the Black stones in a unit, and the second was all the White stones in a unit. This part was not explicitly ordered this way, but the example comes from a real list I had generated while working on the problem with testBoard2 in GoTests.hs.` },
        { p: `This then allowed me to start working on identifying which stones needed to be captured. Single stones were trivial in comparison.` },
      ],
    },
    {
      title: "Phone Bill",
      dates: "August 2022",
      url: "https://github.com/NAlexH2/phonebill-android-project",
      stack: ["Android Studio", "Java", "Maven", "XML", "JUnit", "JaCoCo"],
      writeup: [
        { p: `Phone Bill Manager. This was a project that was given to me during my summer 2022 term at Portland State University in the "Advanced Programming with Java" class where I did incremental development on various projects that culminated our knowledge to this point. All skills and tools I learned throughout the term were put to the test for this project and required us to develop a simple (but functional) toy android application to "manage" customer phone bills.` },
        { p: `The previous projects took on different forms using basic command line programs which took in command line arguments to handle the user's request. Each of these projects required tests to support sufficient code coverage and included documentation as well.` },
        { p: `The first required simply adding and tracking a single customer's bill. The second required tracking the customer's bill in a text file. The third required tracking multiple customers, the dates, times, duration, and sorting based on the date/time. If date/time were the same, then sort by the phone number and finally "pretty printing" all this data to make it human readable.` },
        { p: `The fourth used the REST API and utilized a Java servlet to handle requests from the command line. The user would enter in data to request/add/search for and the servlet would respond. All data was kept in volatile memory and not stored permanently in any sort of way. The requirements were fairly similar to the previous projects (aside from the fourth). It had to store data, be human readable, and searchable.` },
        { p: `All of these prior projects put me on the path to develop something fun and interesting as I did with the Android Phone Bill Manager mobile application.` },
      ],
    },
  ],

  footer: {
    github: "https://github.com/NAlexH2",
    linkedin: "https://www.linkedin.com/in/nalexh2/",
  },
};

export default SITE;
