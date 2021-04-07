# Weber State University - Admissions Web Site

This is the code base for the Admissions site redesign

The GetIntoWeber "Visit" page is also maintained here.

The Virtual Tour code will also be maintained here.


## Notes

The /admissions-counselors directory also includes all the code for the interactive "hover map."


### Map SVGs

Located in admissions/modules/hover-map (not in code/modules)


### Subpages

Each subpage directory has a backup html doc that is an earlier safety version of the page and has a working copy html doc that pushes to a prod version html that ends with -deploy


### CSS

Main css (admissions-pages.scss) is compiling everything to the /css directory.

Each sub-page has a local scss file that is compiled to the main css file

The admissions-pages-dev.scss file compiles dev partials when and where necessary and compiles in place.

Utilities are imported to admissions-pages-dev.scss


#### SCSS File Architecture

pages/admissions-pages.scss -> imports utilities and partials. Top level

pages/main-template/admissions-page-template.scss -> main template for all SUBPAGES

pages/admissions-home/admissions-home.scss -> all css specific to the Admissions home page

pages/admissions-counselors/admissions-counselors.scss -> css for all of the elements on the admissions counselors page

pages/subpages/*banners -> specific css for each subpage banner with specific svg or jpg urls

### Virtual Campus Tour
The scss (currently (8/15/2020)) compiles separately, not as a partial to admissions-pages.scss