# ClickView Programming Practical

Please try and complete as much of this practical as possible in the allotted time. You will be judged on your overall design skills, use of language best practices, code reuse and design patterns. Keep in mind that this is not an assignment and there are no strict marking criteria or rules. We are simply looking for a demonstration of your ability to design and implement software.

## Background

ClickView enables educators to manage media across many platforms. One component of this is to navigate videos by folder and filter them by tags. In this practical you will create a single page web application that lets a user browser videos by folder those filter those videos by tags.

## Overview

Use the provided array of videos (found in videos.js) to create a single page web application that lets users browse videos by folder and filter those videos by tags. See example.html on how to use the array.

## Task 1: Set up a public git repository

You will submit your code to us via a public git repository. We strongly recommend using GitHub or GitLab, but any public git provider is acceptable. **Please commit your code at the end of every task.**

## Task 2: Display Videos

Display all the items in the video array in the provided videos.js file. How you display them is up to you (grid, list, table, tiles, etc).

## Task 3: Add a way to browse videos by folder

Add functionality that enables a user to browse videos by folder in a logical hierarchical structure.

Folders are nested, there is no limitation on how deep this nesting goes and the relationship
between parent and child is denoted by “->” (hyphen + greater than sign).

Example: `Senior` -> `English` -> `Journalism`

## Task 4: Add a way to filter videos by tags

Add functionality that enables a user to filter videos by tags.

## Task 5: Create a readme.md [Compulsory]

Provide instructions on how to get your code up and running as a `readme.md` file in your git repository. Please also list any dependencies that are not managed by a package manager.

**Note**

- This webpage should be a single page app, meaning that there should be no reloading of the window when navigating from for example English to Physics.
- Please do not modify the provided JavaScript file
- We strongly encourage the use of any js frameworks you may be familiar with such as React, Angular, Vue, Ember, Backbone, JQuery, Underscore, Bootstrap, Material UI etc.
