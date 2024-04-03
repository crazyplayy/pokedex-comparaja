import React from "react";
import { Typography, Divider } from "antd";

const { Title } = Typography;

const AboutPage = () => {
  return (
    <div style={{ padding: 30 }}>
      <Title level={2} style={{ textAlign: "center" }}>
        Project Overview
      </Title>

      <Divider />

      <div>
        <Title level={3} style={{ textAlign: "center" }}>
          Why this project was created
        </Title>
        <p>
          This project is the result of a professional challenge presented to{" "}
          <i>crazyplayy</i> as part of an interview process.
        </p>
      </div>

      <Divider />

      <div>
        <Title level={3} style={{ textAlign: "center" }}>
          What is this project?
        </Title>
        <p>
          As decribed in the challenge, <br /> It is a React application that
          includes the integration of state management and styled components.
          The application fetches data from an external API -{" "}
          <a href="https://pokeapi.co/">PokéAPI</a> - and presents it in an
          aesthetically pleasing manner with responsive design. The application
          must implement error handling for API call failures, routing issues,
          or error messages. Furthermore, the code should be well-organized,
          readable, and maintainable, adhering to industry best practices and
          standards. The goal of the project was to develop an application to
          search for Pokémon by number or name and display the results on a
          card. However, feeling very inspired and ecstatic with the context of
          the challenge, the project was developed way further than required.{" "}
        </p>
      </div>

      <Divider />

      <div>
        <Title level={3} style={{ textAlign: "center" }}>
          Features
        </Title>
        <ul>
          <strong>Feature 1: Pokémon Search</strong>
          <blockquote>
            <p>
              A search bar that allows the user to search for Pokémon by number
              or name and display the results on a card.
            </p>

            <ul>
              <li>
                <p>
                  The card displays the Pokémon image, name, number, types,
                  weight, height, and base stats.{" "}
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <p>
                  The card allows the user to switch between the normal and
                  shiny form of the Pokémon upon clicking a button.{" "}
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <p>
                  The card allows the user to switch between the male and female
                  (when available) form of the Pokémon upon clicking a button.{" "}
                </p>
              </li>
            </ul>
          </blockquote>
          <strong>Feature 2: Complete Pokédex</strong>
          <blockquote>
            <p>
              Complete Pokédex that allows the user to explore Pokémon in their
              numerical order.
            </p>

            <ul>
              <li>
                <p>
                  Pagination allows the user to sort between sequential pages,
                  go to a specific page, jump to the last page, and jump back to
                  the first page.{" "}
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <p>
                  The cards flip when you hover the mouse, showing the Pokémon
                  weight, height, and base stats on the back.{" "}
                </p>
              </li>
            </ul>
          </blockquote>
          <strong>Feature 3: Favorites</strong>
          <blockquote>
            <p>
              Favorites system that allows the user to keep track of their
              favorite Pokémon.
            </p>

            <ul>
              <li>
                <p>
                  A heart icon is displayed on any Pokémon card, allowing the
                  user to favorite such Pokémon.{" "}
                </p>
              </li>
            </ul>
          </blockquote>
        </ul>
      </div>

      <Divider />

      <div>
        <Title level={3} style={{ textAlign: "center" }}>
          Creation process
        </Title>
        <p>
          This section outlines the steps taken during the creation of the
          project.
        </p>
      </div>

      <div>
        <Title level={3} style={{ textAlign: "center" }}>
          Issues
        </Title>
        <ul>
          <strong>Issue 0: Colorblind</strong>
          <blockquote>
            <p>
              Yes, both are correct. This is issue 0, and I am colorblind.
              Although I really enjoy frontend development, even without
              starting a project, I am already having trouble with the colors.
              The issue is not what I see, but the fact that the effect and
              color palette I find appealing are not the same the user is going
              to see, so me choosing colors is always a problem, and I have to
              ask my colleagues to help choose the palette every time to ensure
              the final effect is the desired one.
            </p>
          </blockquote>

          <strong>Issue 1: Alignment and Attention to Detail</strong>
          <blockquote>
            <p>
              I cannot convey the dimension of the headache that the alignment,
              positioning, and centering of the card elements gave me. This was
              really the hardest part, since my heart starts racing if
              something, especially the details are not perfectly aligned, with
              the correct padding, overlaying other components... However, this
              is just the common feeling of being a frontend dev playing with
              CSS properties.
            </p>
          </blockquote>
          <strong>Issue 2: Flippable Cards</strong>
          <blockquote>
            <p>
              This was a complicated issue because the cards would always stay
              out of place or reshape the whole grid upon changing the position
              properties. Besides this, the back card is larger than the front
              card, so they occupy more space, which means they overlap the
              other cards on the grid, which means you have to change their
              relative position, decrease padding, increase margin between
              cards... You can feel how quickly the hole starts to get deeper.
              Also, since the cards flip on mouse hover, you cannot click the
              favorite button on the front card, so I had to also make the
              favorite icon appear on the back, where you are able to actually
              click it. Not the "normal" behavior, but adapted to the
              circumstances. It took me a while to get this whole flip card
              feature right, but I made a huge party in tears when I finally got
              it right.
            </p>
          </blockquote>
          <strong>Issue 3: Shiny Button</strong>
          <blockquote>
            <p>
              Making the button stay in the correct position was a pain,
              especially when the screen resolution is resized. In fact, I was
              unable to make the card look as good as I wanted in the mobile
              version.
            </p>
          </blockquote>
          <strong>Issue 4: Design Expertise</strong>
          <blockquote>
            <p>
              There is a reason why I am a frontend developer and not a UI/UX
              engineer. Whenever I try to develop a component from scratch it
              turns out very obtuse, plain, or raw. I never like what I do, and
              normally the styling ends up different from component to component
              or far away from the objective. This is the reason why I use
              external UI libraries, especially antd, since they make the
              aesthetic very clean and allow me to focus on the implementation
              and functionality, especially at early stages, instead of
              aesthetic and overall appeal of the application.
            </p>
          </blockquote>
          <strong>Issue 5: Pagination Component</strong>
          <blockquote>
            <p>
              Even though I prefer to use UI libraries, I <i>can</i> design
              components. So, I decided to build the Pagination component myself
              to show my competences. It was a well fought war between Stack
              Overflow threads, CSS forums, and documentation, but in the end, I
              emerged victorious.
            </p>
          </blockquote>
        </ul>
      </div>

      <Divider />

      <div>
        <Title level={3} style={{ textAlign: "center" }}>
          Future features
        </Title>
        <p>
          This section outlines potential features that could be implemented in
          the future. Some of them I actually tried to implement on this project
          but ended up leaving them for a future update since the API responses
          are very dense and require a huge number of sequential calls to get
          some of these features working, which would endanger the
          responsiveness of the current application.
        </p>
        <ul>
          <li>
            Display a Carousel containing the evolution line of the Pokémon
            displayed on the card upon search.
          </li>
          <li>Make Pokémon sprites (images) animated.</li>
          <li>Add a filter by Pokémon type on the Pokédex.</li>
          <li>
            Make a toggle or setting that makes the background of the cards the
            same color as the first Pokémon type.
          </li>
        </ul>
      </div>

      <Divider />

      <div>
        <Title level={3} style={{ textAlign: "center" }}>
          Improvements
        </Title>
        <p>This section suggests areas for improvement or optimization.</p>
        <ul>
          <li>Data parsing can be improved, especially after being fetched.</li>
          <li>Have tests for every UI component using Jest.</li>
          <li>Mobile version properly adapted.</li>
        </ul>
      </div>
      <Divider />
    </div>
  );
};

export default AboutPage;
