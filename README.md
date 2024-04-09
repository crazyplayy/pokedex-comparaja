# <center> INSTALLATION GUIDE </center>

Clone the repository to a folder of your choosing:

### `git clone https://github.com/crazyplayy/pokedex-comparaja.git`

Go into the folder you just cloned:

### `cd pokedex-comparaja`

To run this project is **recommended** to have _npm_ installed. If you don't have it installed on your machine run the following command:

### `npm install -g npm`

If you aleady have it, install the necessary dependencies:

### `npm install`

To start the application, just run the following command:

### `npm start`

#

# <center> PROJECT OVERVIEW </center>

## <center> Why this project was created </center>

This project is the result of a professional challenge presented to _crazyplayy_ as part of an interview process.

## <center> What is this project? <center>

As decribed in the challenge, <br /> It is a React application that
includes the integration of state management and styled components.
The application fetches data from an external API -
<a href="https://pokeapi.co/">PokéAPI</a> - and presents it in an
aesthetically pleasing manner with responsive design. The
application must implement error handling for API call failures,
routing issues, or error messages. Furthermore, the code should be
well-organized, readable, and maintainable, adhering to industry
best practices and standards. The goal of the project was to develop
an application to search for Pokémon by number or name and display
the results on a card. However, feeling very inspired and ecstatic
with the context of the challenge, the project was developed way
further than required.

## <center> Features <center>

Feature 1: Pokémon Search

- A search bar that allows the user to search for Pokémon by number or name and display the results on a card.

  - The card displays the Pokémon image, name, number, types, weight, height, and base stats.
  - The card allows the user to switch between the normal and shiny form of the Pokémon upon clicking a button.
  - The card allows the user to switch between the male and female (when available) form of the Pokémon upon clicking a button.

Feature 2: Complete Pokédex

- A complete Pokédex that allows the user to explore Pokémon in their numerical order.
  - Pagination allows the user to sort between sequential pages,
    go to a specific page, jump to the last page, and jump back to
    the first page.
  - The cards flip when you hover the mouse, showing additional
    Pokémon information on the back.

Feature 3: Favorites

- A Favorites system that allows the user to keep track of their favorite Pokémon.
  - A heart icon is displayed on any Pokémon card, allowing the user to favorite such Pokémon.

## <center> The creation process </center>

This section outlines the steps taken during the creation of the project.

> Step 1: Mockups

The same way it's odd to build a house without blueprints,
creating the frontend for an application without a mockup feels
unnatural to me. Before I started coding, I took some time to list
the features I wanted in the final product and sketched some basic
layouts of the components on paper. After that, I searched online
for aesthetic designs and created mockups for the components I
wanted to implement, using them as guidelines for creating the
frontend of my application. The mockups can be seen in the
<i>mockups</i> folder in the repository of this project.

> Step 2: Pokémon Search

This was the core feature of the application, as it was the
primary requirement. I began by developing the search bar
component and ensuring that the card component appeared in the
correct location. Once I had this functionality sorted out, I
implemented the search functionality to work properly and then
turned my attention to designing the card. I decided to split the
required information inside the card rather than having it all
arranged from top to bottom, as I had seen in several other
projects. This resulted in having the Pokémon image, name, and
number on the left side of the card, while the weight and height
were on the right side. Feeling that the card looked a bit empty
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

> Step 3: Error Handling

After everything was in place, I proceeded to make the search
functionality work as intended and started addressing edge cases.
While considering possible search inputs that the user could
provide, I personalized the messages displayed to the user and
also addressed the loading aspect of the component. The components
that I implemented here to handle both loading and errors were
then reused in my other components, so it felt rewarding to have
done a good job here.

> Step 4: Complete Pokédex

When I first read the assignment, this was what I initially
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
and different from the search Pokémon card.

> Step 5: Favorites

After implementing the CompleteDex, I drew inspiration from some
other projects and created a Pokémon favorites system. This
feature was common in other projects, and it felt right to include
it since we were iterating over so many Pokémons and users could
only be interested in comparing a specific few (especially since
the search feature was implemented separately). So, I implemented
a simple favorites logic and added a heart icon to the CompleteDex
cards, allowing the user to easily add or remove Pokémon from
their favorites.

> Step 6: Header, Footer & Routing

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

> Step 7: Enhance Features

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

> Step 8: Final Touches & Bug Fixes

At this point, my goal was just to tidy up the application and
address anything that was missing. This included creating a{" "}
<i>Page Not Found</i> component, an <i>About</i> page, styling
both, and tidying up some smaller loose ends. Although bug fixing
was ongoing throughout the development process, I also focused my
efforts at this stage on addressing any console erros, remaining
fixes needed, and thoroughly testing everything to find anything
that might have gone unnoticed.

> Step 9: Code Refactoring & Cleaning

As a final step, I refactored my code by moving all inline styles
to specific CSS files, added comments to ensure clarity and
maintainability, and relocated API calls to a separate file. These
efforts aimed to make the code more readable and maintainable
overall, ensuring that after a week's time, not only God
understands how the code works.

## <center> Issues <center>

The machine is always right, and for all those bugs and misaligned components, the problem is always between the desk and the chair.

> Issue 0: Colorblind

Yes, both are correct. This is issue 0, and I am colorblind.
Although I really enjoy frontend development, even without
starting a project, I am already having trouble with the colors.
The issue is not what I see, but the fact that the effect and
color palette I find appealing are not the same the user is going
to see, so me choosing colors is always a problem, and I have to
ask my colleagues to help choose the palette every time to ensure
the final effect is the desired one.

> Issue 1: Alignment and Attention to Detail

I cannot convey the dimension of the headache that the alignment,
positioning, and centering of the card elements gave me. This was
really the hardest part, since my heart starts racing if
something, especially the details are not perfectly aligned, with
the correct padding, overlaying other components... However, this
is just the common feeling of being a frontend dev playing with
CSS properties.

> Issue 2: Flippable Cards

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

> Issue 3: Shiny Button

Making the button stay in the correct position was a pain,
especially when the screen resolution is resized. In fact, I was
unable to make the card look as good as I wanted in the mobile
version.

> Issue 4: Design Expertise

There is a reason why I am a frontend developer and not a UI/UX
engineer. Whenever I try to develop a component from scratch it
turns out very obtuse, plain, or raw. I never like what I do, and
normally the styling ends up different from component to component
or far away from the objective. This is the reason why I use
external UI libraries, especially Ant Design, since they make the
aesthetic very clean and allow me to focus on the implementation
and functionality, especially at early stages, instead of
aesthetic and overall appeal of the application.

> Issue 5: Pagination Component

Even though I prefer to use UI libraries, I <i>can</i> design
components. So, I decided to build the Pagination component myself
to show my competences. It was an intense battle fought through
Stack Overflow threads, CSS forums, and documentation, but in the
end, I emerged victorious.

> Issue 6: Menu Deprecation

This was the final hurdle I faced before crossing the finish line.
I was fixing the console errors I still had after implementing
everything, and this was the most troublesome. The menu component
in Ant Design suffered a change after an upgrade in a specific
version, so it was constantly launching a deprecation warning
regarding this alteration. To make this work, I went through the
official documentation, Stack Overflow threads, and even delved
into Chinese GitHub issues from the official Ant Design
repository. This was really a pain to solve, not because the
solution was complex, but because finding it was so hard.

> Issue 7: CSS <i>!important</i>

As I finished everything and was cleaning and refactoring my code,
I decided to move all inline styles in any component to specific
CSS files in order to make the code more readable and
maintainable. However, although 97% went pretty well, I still
ended up using <i>!important</i> 5 times, although in just three
different class selectors. It still bothers me to have this
keyword in my CSS files, but I really did try to avoid it, and it
is only there because I ran out of ideas to make it work on those
specific class selectors.

## <center> Future features </center>

This section outlines potential features to be implemented in the
future. Some of them I actually tried to implement on this project
but ended up leaving them for a future update since the API
responses are very dense and require a huge number of sequential
calls to get some of these features working, which would endanger
the responsiveness of the current application.

- Display a Carousel containing the evolution line of the Pokémon displayed on the card upon search.
- Make Pokémon sprites (images) animated.
- Add a filter by Pokémon type on the Pokédex.
- FMake a toggle that makes the background of the cards the same color as the first Pokémon type.

## <center> Improvements </center>

This section suggests areas for improvement or optimization.

- Convert the application to implement Typescript
- Data parsing can be improved, especially after being fetched.
- Have tests for every UI component using Jest.
- Components size upon resizing the page
- Mobile version properly adapted.

#

# <center> QUICK DEMO </center>


https://github.com/crazyplayy/pokedex-comparaja/assets/48414755/78a565f4-9b9c-472a-a5e9-df88fd0a5014





