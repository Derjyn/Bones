# Bones
Bones is a minimal-frills grid system utilizing flex-box. There are a few extras
included such as a very basic reset, some mod and utility classes that expand upon the
functionality of the grid system, and various media queries for common device screen sizes. Outside of those extras, Bones is simply a grid system to put meat on.

---

## Usage
When utilizing a grid system, we tend to "think like tables", with content being laid out in rows and columns. In Bones, a row is referred to as a "spine" and columns as "ribs". This may seem odd to some, as generally human spines are vertical, and ribs horizontal. Anyhow, on with the usage now that we know spines are rows and ribs are columns within the grid system.

A layout element designated as a spine will be as wide as it's parent container, or rather spines fill parent container widths. So if your body element were 960px in width, a div with a spine class within the body would also be 960px, filling that width (save for any padding or margins added).

Within that spine, a div with the class rib will by default also fill the width. That is, a single basic rib will be a full-width column. Adding more ribs within a spine, we see the grid system starting to kick in. Ribs will be equal width by default. Once we start adding size classes to ribs, the full power of Bones comes out to play. For example, a div designated "rib four" would be 50% wide within it's parent spine. Bones is based on those crazy eights- that is the widths are broken up into chunks divisible by 8. Here are the rib sizes:

* rib one: 12.5%  
* rib two: 25%  
* rib three: 37.5%  
* rib four: 50%  
* rib five: 62.5%  
* rib six: 75%  
* rib seven: 87.5%  
* rib full: 100%  

You can mix and match ribs to lay out your content as you see fit. The sizes are easily changed; You could alter Bones to utilize a 12 column system, for example. Enough mindless jabbering, here is a basic code example:

```html
<body>
  <div class="spine">
    <div class="rib two">
      Some content.
    </div>
    <div class="rib grower">
      Other random content.
    </div>
  </div>
</body>
```

That chunk of code would result in a row with two columns, one being 25% wide, the other filling the remaining space. Notice the "grower" class on the second rib. That enables a rib to grow in width, to the remaining space available within a spine. The grower class is referred to as a "mod" class. The mod classes help to shove ribs around or resize them, among other things. Here is an example of using the margin mod classes:

```html
<body>
  <div class="spine">
    <div class="rib two r-margin">
      Some content
    </div>
    <div class="rib grower">
    </div>
  </div>
</body>
```

This bit of code would produce a layout block similar to the first example, but the first rib would nudge the second grower rib over (16px by default). There are margin mods for the top, right, bottom, and left of a rib, all utilizing intuitive class names:

```css
.t-margin
.r-margin
.b-margin
.l-margin
```

For convenience, here is a full list of the mod classes that affect ribs:

```css
/*** MARGIN MODS ***/
.t-margin { margin-top: 16px;   }
.r-margin { margin-right: 16px; }
.b-margin { margin-bottom: 16px;}
.l-margin { margin-left: 16px;  }

/*** PUSH MODS ***/
.push-one   { margin-left: 12.5%; }
.push-two   { margin-left: 25%;   }
.push-three { margin-left: 37.5%; }
.push-four  { margin-left: 50%;   }
.push-five  { margin-left: 62.5%; }
.push-six   { margin-left: 75%;   }
.push-seven { margin-left: 87.5%; }

/*** OTHER MODS ***/
.rib.grower { flex: 1 0 0; }
.rib.spaced { padding: 16px; }
```

Spines have a few mod classes as well:

```css
/*** SPINE MODS ***/
.spine.center     { justify-content: center; }
.spine.centerAll  { align-items: center; justify-content: center; }
.spine.spaced     { padding: 8px; }
.spine.stretch    { align-items: stretch; }
```

There are also several "utility" class included in the Bones css, although these are in a state of flux and may be removed at any given time. Here are those classes:

```css
.breaker              { width: 100%; }
.breaker.sixteen      { height: 16px; }
.breaker.thirty-two   { height: 32px; }
.breaker.fourty-eight { height: 48px; }
.breaker.sixty-four   { height: 64px; }

.f-left { float: left; }
.f-right{ float: right; }

.filler {
  margin: 0;
  padding: 0 !important;
  width: 100%;
}

.no-b-margin { margin-bottom: 0; }
.no-t-margin { margin-top: 0; }
.no-l-margin { margin-left: 0; }
.no-r-margin { margin-right: 0; }

.rib img { padding: 0 16px 8px 16px; }

/*
  Z-INDEX FIX (HOPEFULLY), SEE: http://goo.gl/Wtw7qS
  APPLY THIS CLASS TO THE FIRST PARENT CONTAINER (A
  SPINE PERHAPS?) TO HELP OUT WITH Z-FIGHTING ISSUES
*/
.z-fix { opacity: 0.999; }
```

---

### Everlasting Roadmap
* Tighten up media queries
* Enhance GitHub readme with description and usage details
* Future-proof for various new CSS3 awesomeness

---

### Changelog
**01/23/2014**
* Minor cleanup
* A few tweaks
* Updated readme a bit, added basic usage details as well
as fixed some dorky spelling and grammar

**11/13/2014**
* Added Grunt
* Minor cleanup

**10/09/2014**
* More housecleaning
* Looking to the future for more layout sauce

**09/23/2014**
* Cleaned up CSS
* Modified overview and demo layouts a bit
* Worked on wording, spelling, and grammar of the overview page

**09/12/2014**
* Removed Flesh as these two are totally separate, and Soma will showcase the two together
* Cleaned up CSS, adhering to the Google HTML/CSS style guide

**09/11/2014**
* Removed all Flesh related CSS
* Tweaked overview/demos
* Cleaned up code

**09/10/2014**
* Started making moves to utilize Flesh
* Further updated overview and demos

**09/08/2014**
* Organized CSS a bit
* Removed redundant junk
* Implemented push classes
* Fixed issue with lonely ribs
* Updated demo, moved to 2 examples and an overview/usage page

**09/03/2014**
* Updated usage/demo example
* Added experimental push classes
* Tweaked typography a bit
* Cleaned up CSS code layout and removed redundant crap
* Added "Flesh" section to help separate Flesh and Bones

**08/21/2014**
* Officially entered ALPHA stage!
* Tightened up media queries a bit for smaller screens
* Updated demo and separated demo CSS from Bones core CSS
* Updated typography

**08/20/2014**
* Nothing yet, it was just created! In a day!

---

#### Credits
[Google](http://google.com) \- For search awesomeness