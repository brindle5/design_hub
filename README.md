# DESIGN HUB

## UX

### Colour Scheme

### Typography

## User Stories

- As a site user, I can create an account so that other artists can find and contact me.
- As a site user, I can read other artists' profiles so that I can find someone to work with on projects.
- As a site user, I can edit my profile so that I can alter my interests.
- As a site user, I can delete my profile so that other users can no longer find me.
- As a site user, I can search for other artists so that I can find someone with the same interests.
- As a site user, I can message other artists so that I can organise collaborations.
- As a site user, I can contact the design hub directly so that I can raise issues, comments, or questions.
- As a site user, I can add a piece of artwork so that other artists can see my style and medium.
- As a site user, I can edit a piece of artwork so that I can reach the best possible audience.
- As a site user, I can delete a piece of artwork so that I can customise my profile for maximum benefit.


## Wireframes

## Features

### Existing Features

### Future Features

## Tools & Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [CSS](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) used for an enhanced responsive layout.
- [JavaScript](https://www.javascript.com) used for user interaction on the site.
- [Python](https://www.python.org) used as the back-end programming language.
- [Git](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [GitHub](https://github.com) used for secure online code storage.
- [GitHub Pages](https://pages.github.com) used for hosting the deployed front-end site.
- [Gitpod](https://gitpod.io) used as a cloud-based IDE for development.
- [React Bootstrap](https://getbootstrap.com) used as the front-end CSS framework for modern responsiveness and pre-built components.
- [Django](https://www.djangoproject.com) used as the Python framework for the site.
- [Django-allauth](https://django-allauth.readthedocs.io/en/latest/) used to provide registration functionality.
- [PostgreSQL](https://www.postgresql.org) used as the relational database management.
- [ElephantSQL](https://www.elephantsql.com) used as the Postgres database.
- [Heroku](https://www.heroku.com) used for hosting the deployed back-end site.
- [Cloudinary](https://cloudinary.com) used for online static file storage.
- [Whitenoise](https://whitenoise.readthedocs.io/en/latest/django.html) used for serving static files.
- [Django Filters](https://django-filter.readthedocs.io/en/stable/)- used for adding search functionality to serializers
- [Pillow](https://pypi.org/project/Pillow/) used for adding image processing capabilities

## Database Design

Entity Relationship Diagrams (ERD) help to visualize database architecture before creating models. I used [draw.io](https://app.diagrams.net/) to create my ERD.

![Entity relationship diagram screenshot](documentation/entity_relationship_diagram.png)

## Reuseable Components

## Agile Development Process

### GitHub Projects

[GitHub Projects](https://github.com/brindle5/design_hub/projects) served as an Agile tool for this project. I tracked my user stories using the basic Kanban board.

![Project board screenshot](documentation/project_board.jpg)

### GitHub Issues

[GitHub Issues](https://github.com/brindle5/design_hub/issues) served as an another Agile tool.
There, I used my own **User Story Template** to manage user stories. It also helped with milestone iterations on a weekly basis.

![Open issues screenshot](documentation/open_issues.png)

![Closed issues screenshot](documentation/closed_issues.png)

### MoSCoW Prioritization

I applied MoSCow prioritization and labels to my user stories within the Issues tab.

**Must Have**: guaranteed to be delivered 

- As a site user, I can create an account so that other artists can find and contact me.
- As a site user, I can read other artists' profiles so that I can find someone to work with on projects.
- As a site user, I can edit my profile so that I can alter my interests.
- As a site user, I can add a piece of artwork so that other artists can see my style and medium.
- As a site user, I can edit a piece of artwork so that I can reach the best possible audience.
- As a site user, I can delete a piece of artwork so that I can customise my profile for maximum benefit.

**Should Have**: adds significant value, but not vital 

There were no user stories placed in this category.

**Could Have**: has small impact if left out 

- As a site user, I can search for other artists so that I can find someone with the same interests.

**Won't Have**: not a priority for this iteration

- As a site user, I can delete my profile so that other users can no longer find me.
- As a site user, I can message other artists so that I can organise collaborations.
- As a site user, I can contact the design hub directly so that I can raise issues, comments, or questions.

## Testing

For all testing, please refer to the [TESTING.md](TESTING.md) file.

## Deployment

The live deployed application can be found deployed on [Heroku](https://design-hub-af7f99885c3f.herokuapp.com).

### ElephantSQL Database

This project uses [ElephantSQL](https://www.elephantsql.com) for the PostgreSQL Database.

To obtain your own Postgres Database, sign-up with your GitHub account, then follow these steps:
- Click **Create New Instance** to start a new database.
- Provide a name (this is commonly the name of the project: design_hub).
- Select the **Tiny Turtle (Free)** plan.
- You can leave the **Tags** blank.
- Select the **Region** and **Data Center** closest to you.
- Once created, click on the new database name, where you can view the database URL and Password.


### Heroku Deployment

### Local Deployment

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/brindle5/design_hub) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/brindle5/design_hub.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/brindle5/design_hub)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/brindle5/design_hub)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!


### Local VS Deployment

## Credits

### Content

### Media

### Acknowledgements