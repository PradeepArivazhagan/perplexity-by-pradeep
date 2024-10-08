import What from "./What";
import bgImage from "../assets/bgImage.svg";
import SourceCard from "./SourceCard";
import ViewMoreCard from "./ViewMoreCard";
import SourceLinkCopy from "./SourceLinkCopy";
import Related from "./Related";
import KeepReading from "./KeepReading";
import Askfollowup from "./Askfollowup";
import logo from "../assets/logo.png";
import name from "../assets/name.png";

const Article = () => {
  return (
    <div className="w-[100%] bg-[#f2f3ed] lg:py-2 lg:pr-3 overflow-auto scroll-smooth">
      <div className="relative bg-white lg:rounded-md md:border border-[#ebece6] pb-4">
        <div className="sticky z-10 rounded-t-md top-0 lg:-top-2 bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 py-2 px-4 border-b border-slate-100">
          <div className="flex flex-row items-center justify-between md:justify-end">
            <div className="flex md:hidden flex-row items-center">
              <img className="w-10" src={logo} alt="logo" />
              <img
                className="w-[100px] lg:w-[106px]"
                src={name}
                alt="perplexity"
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="py-[8px] px-[10px] rounded-[4px]  border border-slate-200">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="bookmark"
                  className="svg-inline--fa fa-bookmark fa-fw fa-1x w-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
                  ></path>
                </svg>
              </div>
              <div className="py-[10px] px-[8px] rounded-[4px] bg-[#20808e] hover:bg-[#25838cd5]">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="link"
                  className="svg-inline--fa fa-link fa-fw fa-1x w-4 text-white"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M580.3 267.2c56.2-56.2 56.2-147.3 0-203.5C526.8 10.2 440.9 7.3 383.9 57.2l-6.1 5.4c-10 8.7-11 23.9-2.3 33.9s23.9 11 33.9 2.3l6.1-5.4c38-33.2 95.2-31.3 130.9 4.4c37.4 37.4 37.4 98.1 0 135.6L433.1 346.6c-37.4 37.4-98.2 37.4-135.6 0c-35.7-35.7-37.6-92.9-4.4-130.9l4.7-5.4c8.7-10 7.7-25.1-2.3-33.9s-25.1-7.7-33.9 2.3l-4.7 5.4c-49.8 57-46.9 142.9 6.6 196.4c56.2 56.2 147.3 56.2 203.5 0L580.3 267.2zM59.7 244.8C3.5 301 3.5 392.1 59.7 448.2c53.6 53.6 139.5 56.4 196.5 6.5l6.1-5.4c10-8.7 11-23.9 2.3-33.9s-23.9-11-33.9-2.3l-6.1 5.4c-38 33.2-95.2 31.3-130.9-4.4c-37.4-37.4-37.4-98.1 0-135.6L207 165.4c37.4-37.4 98.1-37.4 135.6 0c35.7 35.7 37.6 92.9 4.4 130.9l-5.4 6.1c-8.7 10-7.7 25.1 2.3 33.9s25.1 7.7 33.9-2.3l5.4-6.1c49.9-57 47-142.9-6.5-196.5c-56.2-56.2-147.3-56.2-203.5 0L59.7 244.8z"
                  ></path>
                </svg>
              </div>
              <div className="py-[7px] px-[8px] rounded-[4px] bg-[#20808e] hover:bg-[#25838cd5] text-white flex flex-row items-center gap-1">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fass"
                  data-icon="share"
                  className="svg-inline--fa fa-share fa-fw fa-1x w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M512 208L320 384H288V288H208c-61.9 0-112 50.1-112 112c0 48 32 80 32 80s-128-48-128-176c0-97.2 78.8-176 176-176H288V32h32L512 208z"
                  ></path>
                </svg>
                <h1 className="text-sm">Share</h1>
              </div>
            </div>
          </div>
        </div>

        <section id="introduction">
          <div className="mx-auto w-[90%] lg:w-[80%]">
            <img
              src={bgImage}
              alt="bgimage"
              className="h-5 md:h-10 lg:h-14 w-full opacity-5 object-cover"
            />
          </div>
          <div className="mx-auto w-[90%] lg:w-[80%]">
            <img
              src="https://images.unsplash.com/photo-1450133064473-71024230f91b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
              alt="person"
              className="scale-100 hover:scale-105 transition duration-700 delay-150 ease-in-out rounded-md h-52 md:h-96 w-full object-cover object-center shadow-md"
            />
          </div>
        </section>

        <div className="relative mx-auto w-[90%] lg:w-[80%]">
          <div className="mt-6 md:mt-8 flex flex-row gap-10 mb-40 ">
            <div className="w-full md:w-4/5">
              <h1 className="text-[#13343b] text-5xl ">
                David Lynch's Interview Project
              </h1>
              <div className="py-5 text-[#63645e] flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <div className="w-5 h-5 md:w-11 md:h-8 lg:w-8 lg:h-8 rounded-full bg-green-400"></div>
                  <div className="block md:hidden">
                    <h1 className="text-sm">elymc</h1>
                  </div>
                  <div className="hidden md:block">
                    <h1 className="text-sm">Curated by elymc</h1>
                    <p className="text-xs font-semibold">2 min read</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <div className="flex flex-row items-center gap-1">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="clock"
                      className="svg-inline--fa fa-clock fa-sm w-3 md:w-5 lg:w-3"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                      ></path>
                    </svg>
                    <h1 className="text-xs md:text-sm">22 hours ago</h1>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="eye"
                      className="svg-inline--fa fa-eye fa-fw fa-sm w-3 md:w-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                      ></path>
                    </svg>
                    <h1 className="text-xs md:text-sm">6,441</h1>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="code-fork"
                      className="svg-inline--fa fa-code-fork fa-fw fa-sm w-3"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M80 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80-32c0 35.8-23.5 66.1-56 76.3V192c0 22.1 17.9 40 40 40H304c22.1 0 40-17.9 40-40V156.3c-32.5-10.2-56-40.5-56-76.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3V192c0 48.6-39.4 88-88 88H248v75.7c32.5 10.2 56 40.5 56 76.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3V280H144c-48.6 0-88-39.4-88-88V156.3C23.5 146.1 0 115.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM256 432a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                      ></path>
                    </svg>
                    <h1 className="text-xs md:text-sm">162</h1>
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-base text-[#14333a] leading-7">
                <strong>D</strong>avid Lynch's Interview Project, a compelling
                documentary series directed by Austin Lynch and Jason S,
                chronicles a 20,000-mile journey across America through 121
                short interviews with individuals from small towns and rural
                areas. Set for an HD re-release on YouTube in summer 2024, this
                series offers an intimate glimpse into the diverse and
                unfiltered stories of everyday Americans, capturing the richness
                of their personal experiences and reflections on life.
              </p>
              <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2">
                <SourceCard />
                <SourceCard />
                <SourceCard />
                <ViewMoreCard />
              </div>

              <section id="projectoverview">
                <div className="my-14 text-[#14333a]">
                  <h1 className="text-3xl">Project Overview</h1>
                  <img
                    src="https://images.unsplash.com/photo-1450133064473-71024230f91b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
                    alt="person"
                    className="h-48 lg:h-80 object-cover object-center my-8 scale-100 hover:scale-105 transition duration-700 delay-150 ease-in-out rounded-md w-full shadow-md"
                  />
                  <p className="text-sm lg:text-base leading-6">
                    Conceived by David Lynch but directed by his son Austin
                    Lynch and collaborator Jason S, this unique documentary
                    series captures the essence of American life through 121
                    short interviews12. The project, which spanned a 20,000-mile
                    journey across the United States over 70 days, features
                    randomly selected individuals from small towns and rural
                    areas3. Subjects were discovered in various locations, from
                    bars to roadsides, and encouraged to share their personal
                    stories, dreams, and reflections on life24. Each 3-4 minute
                    episode offers an intimate glimpse into the diverse
                    experiences of everyday Americans, covering topics ranging
                    from childhood aspirations to profound life changes13.
                  </p>
                  <SourceLinkCopy />
                </div>
              </section>

              <section id="productionjourney">
                <div className="my-14 text-[#14333a] text-sm lg:text-base">
                  <h1 className="text-3xl">Production Journey</h1>
                  <p className="my-6 leading-6">
                    The Interview Project's production journey was an ambitious
                    undertaking, spanning 70 days and covering 20,000 miles
                    across the United States12. The team, led by Austin Lynch
                    and Jason S, embarked on this extensive road trip with no
                    predetermined plan, allowing for spontaneous encounters and
                    authentic storytelling2. Their approach involved driving
                    through various locations, entering bars, and exploring
                    different settings to find interviewees, resulting in a
                    diverse collection of 121 unique stories13.
                  </p>
                  <ul className="my-3 list-disc px-10 flex flex-col gap-3">
                    <li>
                      The production process was characterized by its organic
                      nature, with the team adapting to each new location and
                      interviewee they encountered2.
                    </li>
                    <li>
                      Interviews were conducted in a variety of settings, from
                      hotel rooms to outdoor locations, adding visual diversity
                      to the series1.
                    </li>
                    <li>
                      The project's soundtrack, composed by Dean Hurley,
                      complemented the raw, unscripted nature of the
                      interviews4.
                    </li>
                    <li>
                      Despite David Lynch's involvement in conceptualizing and
                      introducing the project, the actual filming and direction
                      were handled by his son Austin and collaborator Jason S,
                      bringing a fresh perspective to the documentary style5.
                    </li>
                  </ul>
                  <SourceLinkCopy />
                </div>
              </section>

              <section id="contentsignificance">
                <div className="my-14 text-[#14333a] text-sm lg:text-base">
                  <h1 className="text-3xl">Content and Significance</h1>
                  <p className="my-6 leading-6">
                    David Lynch's Interview Project offers a unique and intimate
                    portrait of American life, capturing the diverse experiences
                    and perspectives of ordinary people across the country. The
                    series' content and significance can be summarized as
                    follows:
                  </p>
                  <ul className="my-3 list-disc px-10 flex flex-col gap-3">
                    <li>
                      Each 3-4 minute episode features a single interviewee
                      sharing personal stories, dreams, and reflections on
                      life12.
                    </li>
                    <li>
                      The project covers a wide range of topics, from childhood
                      aspirations to profound life changes, providing a raw and
                      unfiltered view of American experiences13.
                    </li>
                    <li>
                      Interviewees come from various backgrounds and locations,
                      including small towns and rural areas often overlooked by
                      mainstream media14.
                    </li>
                    <li>
                      The series showcases the beauty in everyday life and finds
                      profound meaning in seemingly mundane experiences,
                      reflecting Lynch's artistic vision3.
                    </li>
                    <li>
                      By presenting these stories without judgment or
                      commentary, the project allows viewers to connect directly
                      with the interviewees and their experiences13.
                    </li>
                    <li>
                      The Interview Project serves as a time capsule of American
                      life in the early 21st century, preserving diverse voices
                      and perspectives for future generations35.
                    </li>
                  </ul>
                  <p>
                    The significance of the project lies in its ability to
                    humanize and give voice to individuals who might otherwise
                    go unheard, creating a tapestry of American experiences that
                    challenges preconceptions and celebrates the complexity of
                    human life13.
                  </p>
                  <SourceLinkCopy />
                </div>
              </section>

              <section id="remasteredcollection">
                <div className="my-14 text-[#14333a] text-sm lg:text-base">
                  <h1 className="text-3xl">HD Remastered Collection</h1>
                  <img
                    src="https://images.unsplash.com/photo-1450133064473-71024230f91b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
                    alt="person"
                    className="my-8 scale-100 hover:scale-105 transition duration-700 delay-150 ease-in-out rounded-md w-full shadow-md"
                  />
                  <p className="leading-6">
                    youtube.com youtube.com Watch The Interview Project is set
                    for a remarkable revival in 2024, marking its 15th
                    anniversary with a high-definition re-release of all 121
                    episodes on YouTube12 . This remastered version offers
                    viewers a chance to experience the raw, unfiltered stories
                    of American life with enhanced visual quality, preserving
                    the authenticity and emotional depth of each interview1.
                  </p>
                  <ul className="my-3 list-disc px-10 flex flex-col gap-3">
                    <li>
                      The re-release is scheduled for the summer of 2024,
                      commemorating the project's initial launch on June 1,
                      200912 .
                    </li>
                    <li>
                      All episodes will be available in HD, a feature previously
                      unavailable during the original release2 .
                    </li>
                    <li>
                      The project team aims to introduce these compelling
                      stories to a new audience while allowing longtime fans to
                      revisit the series with improved clarity2 .
                    </li>
                  </ul>
                  <p>
                    This re-release not only celebrates the project's legacy but
                    also ensures that these valuable snapshots of American life
                    remain accessible and relevant in the digital age13.
                  </p>
                  <SourceLinkCopy />
                </div>
              </section>

              <Related />

              <div className="mt-20 text-[#14333a]">
                <div className="flex flex-row items-center gap-2">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fak"
                    data-icon="page"
                    className="svg-inline--fa fa-page fa-fw w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M369.6 313.6c-41.9 0-79 20.5-102.4 51.8c-23.4-31.4-60.5-51.8-102.4-51.8H36.8v51.2h128c42.2 0 76.8 34.6 76.8 76.8v25.6h51.2V441.6c0-42.2 34.6-76.8 76.8-76.8h128V313.6h-128zM292.8 32H241.6V211.2h51.2V32zM68.4 103.6L32.1 139.8 158.9 266.5l36.2-36.2L68.4 103.6zm397.9 .2L339.5 230.5l36.2 36.2L502.4 140l-36.2-36.2z"
                    ></path>
                  </svg>
                  <h1 className="text-lg font-semibold">Keep Reading</h1>
                </div>
                <div className="my-4 grid grid-cols-2 lg:grid-cols-4 gap-2">
                  <KeepReading />
                  <KeepReading />
                  <KeepReading />
                  <KeepReading />
                </div>
              </div>
            </div>

            {/*On Page Navigation*/}
            <div className="hidden sticky w-1/5 lg:2/5 md:flex flex-col gap-2">
              <a
                href="#introduction"
                className="py-0 px-3 border-l-[3px] border-[#153137] text-[#13343b]  text-sm lg:text-base"
              >
                Introduction
              </a>
              <a
                href="#projectoverview"
                className="py-0 px-3 border-l-[3px] border-[#eaeae7] text-[#82837D] text-sm lg:text-base"
              >
                Project Overview
              </a>
              <a
                href="#productionjourney"
                className="py-0 px-3 border-l-[3px] border-[#e5e7e6] text-[#82837D] text-sm lg:text-base"
              >
                Production Journey
              </a>
              <a
                href="#contentsignificance"
                className="py-0 px-3 border-l-[3px] border-[#e5e7e6] text-[#82837D] text-sm lg:text-base"
              >
                Content and Significance
              </a>
              <a
                href="#remasteredcollection"
                className="py-0 px-3 border-l-[3px] border-[#e5e7e6] text-[#82837D] text-sm lg:text-base"
              >
                HD Remastered Collection
              </a>
            </div>
          </div>
        </div>

        <Askfollowup />

        <What />
      </div>
    </div>
  );
};

export default Article;
