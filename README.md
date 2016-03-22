#BoilerplateV 
An extensive HTML5 framework for building robust web sites utilising Jade, SCSS/PostCSS with Gulp.

Notes:
* Since PostCSS is not mature enough, I have SCSS as a branch. Short story, I used PostCSS with [cssgrace](https://github.com/cssdream/cssgrace) plugin. It doesn't allow you to use inline-block in a nest. So, I chose not to use PostCSS for now but might use in the future, since PostCSS is blazingly fast.

* gulp-sass though using node-sass options, can't make a sourcemap without gulp-sourcemaps
* for browsersync, because using node-gyp, see INSTALLATION part on https://github.com/nodejs/node-gyp
   P.S On my home machine (Win10), it works fine without installing the requirements

* To install latest and save to dev a module => npm i -D <module>@latest


##Steps
1. npm install
2. gulp (add --production for the production (minified) codes)

##HTML
Jade

##CSS
SCSS with the concept of BEM (Block Element Modifier) with ITCSS (Inverted Triangle CSS)

###Framework
Foundation 6 (as the time of writing)

Reason:
* It can generate the breakpoint-wis classes for you with a single variable change
* Smaller footprints
* A11y (Accessibility) Friendly
* [Other features](http://foundation.zurb.com/sites.html)

###ITCSS 
(ref: https://speakerdeck.com/dafed/managing-css-projects-with-itcss)

Managing CSS at scale is hard; and a lot harder than it should be. ITCSS is a simple, effective, and as-yet unpublished methodology to help manage, maintain, and scale CSS projects of all sizes. 
In this talk we’ll take a sneak peek at what ITCSS is and how it works to tame and control UI code as it grows.

The structure:

1. **Settings** - global variables, config switches, brand colours, etc.
2. **Tools** - Globally available tools, public mixins and helper functions.
3. **Generic** - Ground-zero styles (normalize.css, reset, box-sizing). Low specificity, far-reaching.
4. **Base** - Unclassed HTML elements (H1-H6, basic links, lists, etc). Last layer we see type selectors (e.g. a{}, blockqoute {}).
5. **Objects** - Cosmetic-free design patterns, OOCSS, begin using classes exclusively, agnostically named (e.g. .ui-list {}).
6. **Components** - Designed components, chunks of UI, still only using classes, more explicitly named (e.g. .product-list {}).
7. **Theme** (optional).
8. **Win/Trumps** - Helpers and overrides. Usually carry !important.

**ITCSS** benefits:
* Manages source order
* Filters explicitness
* Tames the cascade
* Sanitizes inheritance

### BEM
(ref: http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

**Important note:**
*Just because something happens to live inside a block it doesn’t always mean is is actually a BEM element*

### Tools/Mixins/Functions
**Important**:

1. All user-created functions must use f-*function-name* name convention, e.g. color: **f-color()** and put in **src/scss/02_tools/** folder and named **_tools.function.*function-name*.scss**.
2. All user-created mixins need to use m-*mixin-name* name convention: **@include m-icon()**. and put in **src/scss/02_tools/** folder and named **_tools.mixin.*mixin-name*.scss**
3. Foundation mixins found [here](foundation.zurb.com/sites/docs/sass-mixins.html)

##JS: Vanilla JS + jQuery

##Task Builder: Gulp

It's up to you what to choose. Gulp is easy and awesome. Others, I don't really think about them.

## Icons

I'm using gulp-iconfont to generate fonts. The SCSS file is generated from the src\_icons\icons_template.scss, which results in 03\_generic/\_generic.icons.scss. 

The icons scss follows the Font-Awesome standard, so use it like when you use Font-Awesome, but instead of using .fa, you need to use .v-icon. 

Although the template is similar to **FontAwesome**,  don't use it like .fa.fa-[icon-name], instead just use like **.v-icon-[icon-name]** e.g. .v-icon-facebook (don't need .v-icon.v-icon-facebook). **DON'T USE** "icon" as a class. **Adblock Plus** apparently has a CSS rule to hide icon-[social-icons] elements.