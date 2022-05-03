# Binder.io
    
Milestone Project II for NJIT Coding Bootcamp, created by Darius M, Alex C, Christian C, Ella G

## Note Taking App

Binder.io is a notetaking app that allows basic CRUD functionality.


### Features

Binders, Incomplete-Status, CRUD

### Bonus Features

Task-List, Collaborative note-taking, extra styling

## Data Models

Models for SQL Tables

### User Table

| UserId | UserName | Password | DisplayName |

### UserBinders

| BinderId | BinderTitle | UserId | DateCreated |

### Notes

| NoteId | BinderId | NoteTitle | NoteContent | DateModified | 

## Tasks
| Date | Contributor | Summary |
| ---- | ----------- | ------- |
| Sun. 4/24 | Darius | ReadMe file, initial commit. |
| Tues. 4/26 | Darius | Navigator / TopBar component. Began SideBar, ViewPort. Need to review documentation on passing data between parent and child in SPA format. |
| Tues. 4/26 | Chris | Skeletons for BinderContent, Binders, CreateBinders, CreateNote, EditNote, Home, LogIn, NoteContent, SignUp, UserSettings. |
| Thurs. 4/28 | Darius | SideBar content. Binder.js content. Binder.js returns list of binders. Binder.js is currently imported into SideBar. Began work on LogIn form. |
| Thurs. 4/28 | Chris | Styled Login/Signup forms slightly and added temp. login/signup & signout logic, including alerts for bad attempts. |
| Sun. 5/1 | Chris | Tweaked const. names and added first draft login/signup server request logic. |

## Project Planning
| Date | Goals |
| ---- | ----- |
| Sun. 4/24 | Create GitHub repository. Add collaborators. Complete README.md, tasks sectioned out |
| Tues. 4/26 | Ensure understanding of version control through Git, Basic Models for SQL Database, Skeleton of the website |
| Thurs. 4/28 | Complete Skeleton of Front-End to visualize database querying |
