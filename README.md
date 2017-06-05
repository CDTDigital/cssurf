# CSSurf

This is a set of California government stylesheets written in `scss`
and using compass. The styles are alpha candidates and subject to
radical renovation by actual visual designers.

Goals of the stylsheets:

* Lightweight with low download cost
* Responsive in mobile, tablet and desktop
* Programmable rather than hackable
* Based on a strict style guide
* Work in bad old IE without restyling

## Inspiration

When I first encountered [@stubornella's OOCSS](https://github.com/stubbornella/oocss/wiki),
my mind was blown. I had been hacking my way through CSS always adding
more css with every change by product and design. Realizing that CSS
could be programmable and small was a completely new way of thinking about
styling web pages. I have been changed by her work forever.

I first adapted her great ideas with a great team via [NailPolish](https://github.com/socialchorus/nail_polish/tree/master/app/assets/stylesheets/nail_polish), a rails gem
that included both these style concepts and also a javascript framework.

I separated for my own use the styles into [this project](ttps://github.com/baccigalupi/shipd_style).
It works great for quickly getting running with a good looking website
that is easy to configure and customize.

This new rendition comes with color and fonts that are close to the
emerging California styles.

## Principles

Working around legacy box models in IE can be a big problem. Newer CSS
has this solved with [box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing?v=control).
It works for IE8 and higher. This system works for lower versions of IE
too, by adding a lot more HTML separation of concerns.

The main idea is that html elements with `padding`, `margin` and border never
are constrained by width. Otherwise the element becomes unpredictable
across browsers.For example, a div that has a width of 20% and a 10px padding is how
many pixels wide, what percentage total? Even when width and padding/margin
are in the same units, they don't behave well across browsers and often
overflow their containers.

##### An example of separated html concerns

    <div class='row'>
      <div class='inner border'>
        Hello, properly separated world
      </div>
    </div>

The `row` class defines the element as taking the entire 100% of its
container. The `inner` class adds padding of a size specified in
variables.

##### A failing example of html separation of concerns

    <div class='row inner border'>
      Hello, properly separated world
    </div>

The border on this element will fall outside it's container, making
everyone unhappy. That is because the `row` is 100% (a width) and then
there is both padding and a border, which push the div size beyond the
100% of its container.

## The grid

Width defining elements at a high level fall into the categories of rows
and units. We have already seen the `row` class in action. Rows take up
the whole 100% of their bounding container. Rows can be filled with
units and other rows. Units take up a percentage of the row. There are
several css classes that define units: `unit`, `unit-right',
`last-unit`.

`unit` creates a little widthless container within a row. Rows are built
to house these floating units. `unit-right` is a unit that floats to the
right. And the `last-unit` will take up the remainder of the row.

Width of these units are defined by a separate series of classes:

* `size-1-1{width:100%;}`
* `size-1-2{width:50%;}`
* `size-1-3{width:33.33333%;}`
* `size-1-4{width:25%;}`
* `size-1-5{width:20%;}`
* `size-2-3{width:66.66666%;}`
* `size-2-5{width:40%;}`
* `size-3-4{width:75%;}`
* `size-3-5{width:60%;}`
* `size-4-5{width:80%;}`

These are all percentages. You can create other classes that divide the
100% pie differently, but the grid is flexible enough to leave the world
of percentages. Sometimes that is needed, for example, an image might
need to be a specific size. The `last-unit` will take up the rest of the
line which keeps other elements from creeping into uncomfortable places.

## Responsive gridding

In order to keep at the top of conciousness the increasing share of web
usage from smartphones, it is wise to design websites with mobile first.
These grid styles are actuall the mobile or base grid styles, and can be
overwritten by tablet and desktop styles, bound by breakpoints.

More description of how to use these styles will come. Meanwhile, please
check out the `demo/styles.html` which uses these to great effect!

## Form elements

Inputs, buttons and other form elements present their own cross-browser
issues, particularly when it comes to the box-window issues.

This library uses special containers to work around the issues:

    <div class='input-container'>
      <input type='text' name='email'>
    </div>

Adding the above coupling of elements leads to inputs that can be set to
the width of the elements they are contained within.

It is also true that buttons which are default styles with a shadow
benefit from a tiny container wrapper that ensures the shadow shows up:

    <div class='shadow-container'>
      <button>Hello!</button>
      <!-- Also with theses:
        <input type='submit' value='Save'>
        <a href='/sign-in' class='button'>Sign in</a>
      -->
    </div>

## What else?

Lots, but not much documentation yet. Also, this is just a candidate, so
subject to change.

