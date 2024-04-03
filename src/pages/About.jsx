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
        <blockquote>
          <p>
            This project is the result of a professional challenge presented to{" "}
            <i>crazyplayy</i> as part of an interview process.
          </p>
        </blockquote>
      </div>

      <Divider />

      <div>
        <Title level={3} style={{ textAlign: "center" }}>
          What is this project?
        </Title>
        <blockquote>
          <p>
            As decribed in the challenge, <br /> It is a React application that
            includes the integration of state management and styled components.
            The application fetches data from an external API -{" "}
            <a href="https://pokeapi.co/">PokéAPI</a> - and presents it in an
            aesthetically pleasing manner with responsive design. The
            application must implement error handling for API call failures,
            routing issues, or error messages. Furthermore, the code should be
            well-organized, readable, and maintainable, adhering to industry
            best practices and standards. The goal of the project was to develop
            an application to search for Pokémon by number or name and display
            the results on a card. However, feeling very inspired and ecstatic
            with the context of the challenge, the project was developed way
            further than required.{" "}
          </p>
        </blockquote>
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
        <ul>
          <strong>Step 1: Mockups</strong>
          <blockquote>
            <p>
              The same way it's odd to build a house without blueprints,
              creating the frontend for an application without a mockup feels
              unnatural to me. Before I started coding, I took some time to list
              the features I wanted in the final product and sketched some basic
              layouts of the components on paper. After that, I searched online
              for aesthetic designs and created mockups for the components I
              wanted to implement, using them as guidelines for creating the
              frontend of my application. The mockups can be seen in the{" "}
              <i>mockups</i> folder in the repository of this project.
            </p>
          </blockquote>

          <strong>Step 2: Pokémon Search</strong>
          <blockquote>
            <p>
              This was the core feature of the application, as it was the
              primary requirement. I began by developing the search bar
              component and ensuring that the card component appeared in the
              correct location. Once I had this functionality sorted out, I
              implemented the search functionality to work properly and then
              turned my attention to designing the card. I decided to split the
              required information inside the card rather than having it all
              arranged from top to bottom, as I had seen in several other
              projects. This resulted in having the Pokémon image, name, and
              number on the right side of the card, while the weight and height
              were on the left side. Feeling that the card looked a bit empty
              and that there was more information that could be presented, I
              added the Pokémon's types and base stats to the left side. This
              balanced out the card nicely. Next, I focused on aligning and
              centering everything, which was quite challenging. Once everything
              was in place, I added a finishing touch by creating a shiny button
              to display the shiny version of the Pokémon upon clicking it.
              After I was satisfied with the final version of the card, I added
              a logo to the search bar, as it felt empty. I then stylized the
              search bar and button, and finally, I added some shadow to both
              components to make them stand out from the white background.
            </p>
          </blockquote>

          <strong>Step 3: Error Handling</strong>
          <blockquote>
            <p>
              After everything was in place, I proceeded to make the search
              functionality work as intended and started addressing edge cases.
              While considering possible search inputs that the user could
              provide, I personalized the messages displayed to the user and
              also addressed the loading aspect of the component. The components
              that I implemented here to handle both loading and errors were
              then reused in my other components, so it felt rewarding to have
              done a good job here.
            </p>
          </blockquote>

          <strong>Step 4: Complete Pokédex</strong>
          <blockquote>
            <p>
              "When I first read the assignment, this was what I initially
              thought I was going to create, and I was excited about it. Only
              after some careful readings did I understand that what I was being
              asked to do was much simpler. However, it never left my mind, so
              as soon as I finished the core required feature, I started
              creating my <i>CompleteDex</i> feature. This complete Pokédex
              feature is what the majority of projects you find online
              implement; however, they normally are very simple and incorporate
              the search feature in it. I decided to take a different approach
              and have them separate. So, this feature only displays a
              pre-determined amount of Pokémons per page and allows the user to
              iterate over the sequential pages, jump to the last page, or back
              to the initial page. I made sure the data fetching was working
              properly and the Pokémons were being displayed correctly. Then, I
              finished stylizing the Pokémon cards so they would feel aesthetic
              and different from the search Pokémon card."
            </p>
          </blockquote>

          <strong>Step 5: Favorites</strong>
          <blockquote>
            <p>
              After implementing the CompleteDex, I drew inspiration from some
              other projects and created a Pokémon favorites system. This
              feature was common in other projects, and it felt right to include
              it since we were iterating over so many Pokémons and users could
              only be interested in comparing a specific few (especially since
              the search feature was implemented separately). So, I implemented
              a simple favorites logic and added a heart icon to the CompleteDex
              cards, allowing the user to easily add or remove Pokémon from
              their favorites.
            </p>
          </blockquote>

          <strong>Step 6: Header, Footer & Routing</strong>
          <blockquote>
            <p>
              With all three principal features implemented, I could now focus
              on making the application properly navigable. To do this, I first
              created a Header and stylized it to have the necessary tabs and
              keep track of which tab was being clicked. Then, I created a
              simple Footer. Lastly, I started my battle with routing the
              application. Although the <i>react-router-dom</i> library makes
              the process much simpler, I was not aware of the new features and
              implementations of this library in its most updated version. So, I
              spent a good amount of time fighting with it and trying to make
              everything work as intended.
            </p>
          </blockquote>

          <strong>Step 7: Enhance Features</strong>
          <blockquote>
            <p>
              I could now navigate my application very easily and see the
              features working together seamlessly. While testing their
              behavior, I started brainstorming ideas about what else could be
              done within the timeframe and with the current knowledge that I
              had. I listed all the possible enhancements I could think of,
              filtered out the more "out there" ones, sorted them by complexity,
              and got to work. One of the most relevant enhancements I made was
              to the CompleteDex cards. Since the cards are all the same in the
              projects I looked into, I decided to add a twist and make them
              behave differently. When you hover the mouse over the cards, they
              flip themselves, and on the back of the card, the height, weight,
              and base stats are displayed, as well as the back of the Pokémon.
              It's a nice touch if I may say so myself. Other enhancements
              include pagination allowing the user to jump to a specific page, a
              gender button to show the Pokémon's female version when available,
              adding the favorites feature to the Pokémon card search as well,
              and a creating a background pattern for the application.
            </p>
          </blockquote>

          <strong>Step 8: Final Touches & Bug Fixes</strong>
          <blockquote>
            <p>
              At this point, my goal was just to tidy up the application and
              address anything that was missing. This included creating a{" "}
              <i>Page Not Found</i> component, an <i>About</i> page, styling
              both, and tidying up some smaller loose ends. Although bug fixing
              was ongoing throughout the development process, I also focused my
              efforts at this stage on addressing any console erros, remaining
              fixes needed, and thoroughly testing everything to find anything
              that might have gone unnoticed.
            </p>
          </blockquote>

          <strong>Step 9: Code Refactoring & Cleaning</strong>
          <blockquote>
            <p>
              As a final step, I refactored my code by moving all inline styles
              to specific CSS files, added comments to ensure clarity and
              maintainability, and relocated API calls to a separate file. These
              efforts aimed to make the code more readable and maintainable
              overall, ensuring that after a week's time, not only God
              understands how the code works.
            </p>
          </blockquote>
        </ul>
      </div>

      <Divider />

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
              to show my competences. It was an intense battle fought through
              Stack Overflow threads, CSS forums, and documentation, but in the
              end, I emerged victorious.
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
            Display a Carousel component containing the evolution line of the Pokémon
            displayed on the card upon search.
          </li>
          <li>Make Pokémon sprites (images) animated.</li>
          <li>Add a filter by Pokémon type on the CompleteDex.</li>
          <li>
            Make a toggle that allows the background of the cards to be the
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
          <li>Components size upon resizing the page</li>
          <li>Mobile version properly adapted.</li>
        </ul>
      </div>
      <Divider />
    </div>
  );
};

export default AboutPage;
