# Testing

Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

[Homepage](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdesign-hub-af7f99885c3f.herokuapp.com%2F) | No errors 

![Html homepage validation screenshot](documentation/html_homepage_validation_screenshot.png)

Add Artwork Page | No errors

![Html add artwork validation screenshot](documentation/html_add_artwork_validation_screenshot.png)

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate  my [CSS file](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdesign-hub-af7f99885c3f.herokuapp.com) | Pass

![CSS validation screenshot](documentation/css_validation_screenshot.png)

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

#### API

axiosDefaults.js | Pass

![JS axios defaults validation screenshot](documentation/js_axiosdefaults_validation_screenshot.png)

#### Components

ArtworkAsset.js | Few warnings

![JS artwork asset validation screenshot](documentation/js_artworkasset_validation_screenshot.png)

EditDeleteDropdown.js | Some warnings

![JS edit delete dropdown validation screenshot](documentation/js_editdeletedropdown_validation_screenshot.png)

NavBar.js | Few errors

![JS navbar validation screenshot](documentation/js_navbar_validation_screenshot.png)

#### Contexts

CurrentUserContext.js | Few warnings

![JS contexts validation screenshot](documentation/js_contexts_validation_screenshot.png)

#### Hooks

useClickOutsideToggle.js | Pass

![JS hooks validation screenshot](documentation/js_hooks_validation_screenshot.png)

#### Pages

##### Auth

SignUpPage.js | Few warnings

![JS sign up page validation screenshot](documentation/js_sign_up_page_validation_screenshot.png)

SignInPage.js | Few warnings

![JS sign in page validation screenshot](documentation/js_sign_in_page_validation_screenshot.png)

##### Artwork

ArtworkListPage.js | Few warnings

![JS artwork list page validation screenshot](documentation/js_artworklist_page_validation_screenshot.png)

AddArtworkPage.js | Few warnings

![JS add artwork page validation screenshot](documentation/js_addartwork_page_validation_screenshot.png)

EditArtworkPage.js | Few warnings

![JS edit artwork page validation screenshot](documentation/js_editartwork_page_validation_screenshot.png)

ArtPiecePage.js | Few warnings

![JS art piece page validation screenshot](documentation/js_artpiece_page_validation_screenshot.png)

### Python

I have used the recommended [PEP8 CI Python Linter](https://pep8ci.herokuapp.com) to validate all of my Python files.

#### Artists app

- [Models.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/artists/models.py) | No errors

![Python artists models validation screenshot](documentation/python_artists_models_validation_screenshot.png)

- [Serializers.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/artists/serializers.py) | No errors

![Python artists serializers validation screenshot](documentation/python_artists_serializers_validation_screenshot.png)

- [Urls.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/artists/urls.py) | No errors

![Python artists urls validation screenshot](documentation/python_artists_urls_validation_screenshot.png)

- [Views.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/artists/views.py) | No errors

![Python artists views validation screenshot](documentation/python_artists_views_validation_screenshot.png)

#### Artwork app

- [Models.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/artwork/models.py) | No errors

![Python artwork models validation screenshot](documentation/python_artwork_models_validation_screenshot.png)

- [Serializers.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/artwork/serializers.py) | No errors

![Python artwork serializers validation screenshot](documentation/python_artwork_serializers_validation_screenshot.png)

- [Urls.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/artwork/urls.py) | No errors

![Python artwork urls validation screenshot](documentation/python_artwork_urls_validation_screenshot.png)

- [Views.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/artwork/views.py) | No errors

![Python artwork views validation screenshot](documentation/python_artwork_views_validation_screenshot.png)

#### Comments app

- [Models.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/comments/models.py) | No errors

![Python comments models validation screenshot](documentation/python_comments_models_validation_screenshot.png)

- [Serializers.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/comments/serializers.py) | No errors

![Python comments serializers validation screenshot](documentation/python_comments_serializers_validation_screenshot.png)

- [Urls.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/comments/urls.py) | No errors

![Python comments urls validation screenshot](documentation/python_comments_urls_validation_screenshot.png)

- [Views.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/comments/views.py) | No errors

![Python comments views validation screenshot](documentation/python_comments_views_validation_screenshot.png)

#### Artists Collective Project

- [Permissions.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/artists_collective/permissions.py) | No errors

![Python artists collective permissions validation screenshot](documentation/python_artists_collective_permissions_validation_screenshot.png)

- [Serializers.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/artists_collective/serializers.py) | No errors

![Python artists collective serializers validation screenshot](documentation/python_artists_collective_serializers_validation_screenshot.png)

- [Settings.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/artists_collective/settings.py) | No errors

![Python artists collective settings validation screenshot](documentation/python_artists_collective_settings_validation_screenshot.png)

- [Urls.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/artists_collective/urls.py) | No errors

![Python artists collective urls validation screenshot](documentation/python_artists_collective_urls_validation_screenshot.png)

- [Views.py](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/brindle5/design_hub/main/artists_collective/views.py) | No errors

![Python artists collective views validation screenshot](documentation/python_artists_collective_views_validation_screenshot.png)

## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

**Chrome:** works as expected

![Chrome homepage screenshot](documentation/features_homepage_screenshot.png)

![Chrome add artwork screenshot](documentation/features_addartwork_screenshot.png)

![Chrome edit artwork screenshot](documentation/features_editartwork_screenshot.png)

**Edge:** works as expected

![Edge homepage screenshot](documentation/edge_homepage_screenshot.png)

![Edge add artwork screenshot](documentation/edge_addartwork_screenshot.png)

![Edge edit artwork screenshot](documentation/edge_editartwork_screenshot.png)

**Firefox:** works as expected

![Firefox homepage screenshot](documentation/firefox_homepage_screenshot.png)

![Firefox add artwork screenshot](documentation/firefox_addartwork_screenshot.png)

![Firefox edit artwork screenshot](documentation/firefox_editartwork_screenshot.png)

## Responsiveness

### Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

**Artwork List Page:**

![Homepage lighthouse report](documentation/lighthouse_homepage_screenshot.png)

**Add Artwork Page:**

![Add artwork lighthouse report](documentation/lighthouse_addartwork_screenshot.png)

**Edit Artwork Page:**

![Edit artwork lighthouse report](documentation/lighthouse_editartwork_screenshot.png)

### Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

User Action - Expected Result - Pass/Fail 

#### Home Page (Before sign in/sign up)
- Click on Sign In – Redirect to ‘Sign In’ page - Pass
- Click on Sign Up – Redirect to ‘Sign Up’ page  - Pass

#### Sign In page
- Username – User is prompted to complete username field - Pass
- Password - User is prompted to complete password field - Pass
- User clicks ‘Sign In’ – Redirect to homepage - Pass

#### Sign Up page
- Username - User is prompted to enter a username – Pass
- Password – User is prompted to enter a password – Pass
- Password (again) – User is prompted to enter their password a second time – Pass
- Click ‘Sign Me Up’ – Redirect to homepage  - Pass

#### Home page (after Sign In/Sign Up)
- Click on ‘Sign Out’ – User redirected to homepage showing Sign In/Sign Up options– Pass 
- Click on ‘Add Artwork’ - Redirect to ‘Add Artwork page – Pass
- Click on edit icon from three dots dropdown - Redirect to ‘Edit Artwork page – Pass
- Click on delete icon from three dots dropdown – Artwork deleted from database  – Pass

#### Add Artwork page
- Image field – User can't submit an empty image field – Pass
- Image field – User can upload an image but select a replacement image -  Pass
- Title field – User can't submit an empty title field – Pass
- Click on ‘Cancel’ – Redirect to home page with no changes – Pass

#### Edit Artwork page
- Image field- User can change image, or leave as is - Pass
- Title field – User can change title, or leave as is - Pass
- Click on 'Save Changes' - Redirect to homepage, changes saved in the database - Pass
- Click on ‘Cancel’ - Redirect to home page with no changes - Pass

## User Story Testing

All of my site's features fulfil the needs set out in my user stories:

- As a site user, I can create an account so that other artists can find and contact me.

![Sign up screenshot](documentation/features_signup_screenshot.png)

- As a site user, I can add a piece of artwork so that other artists can see my style and medium.

![Add artwork screenshot](documentation/features_addartwork_screenshot.png)

- As a site user, I can edit a piece of artwork so that I can reach the best possible audience.

![Edit artwork page screenshot](documentation/features_editartwork_screenshot.png)

- As a site user, I can search for other artists so that I can find someone with the same interests.

![Search bar screenshot](documentation/features_searchbar_screenshot.png)

### Bugs

**Fixed Bugs**

#### Migrations not being applied

One of the main bugs was changes to the models not being successfully migrated into the database. I fixed this by deleting the migrations files within each app, deleting the db.sqlite3 database and resetting the elephantsql database. Once I had done this I ran ‘python manage.py makemigrations’ and ‘python manage.py migrate’ and the problem was resolved.

#### Edit Artwork Page not loading

To resolve this issue, I rolled back to a previous commit using git reset --hard. Then I removed a duplicated line of code that was causing the problem.

#### Add/Edit Artwork Page not redirecting to homepage

To fix this problem, I added 'history.push('/') after the images are sent to the database. 

## Unfixed Bugs

There are no unfixed bugs that I'm aware of.