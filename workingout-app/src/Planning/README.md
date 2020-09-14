# Pick Things Up and Put Them Down

## Project Description

My app is a library of some of the most common exercises, for specific muscle groups. I want to build an application where the user can comb through a variety of exercises, for each specific muscle group, as well as choose pre-determined workouts, if they so choose. As a user, they will also be able to add to the library themselves, if they so choose. It will include information about the workout and a video tutorial on how to properly perform the exercise.

## Wireframes

## Landing Page

![Screen Shot 2020-09-03 at 12 16 28 PM](https://user-images.githubusercontent.com/67292452/92140611-56ebb800-eddf-11ea-810c-8cb43f934284.png)

## Landing Page after selecting muscle group

![Screen Shot 2020-09-03 at 12 17 42 PM](https://user-images.githubusercontent.com/67292452/92140737-7f73b200-eddf-11ea-95be-86cdf7f3cf30.png)

## Landing Page after selecting specific workout

![Screen Shot 2020-09-03 at 12 18 23 PM](https://user-images.githubusercontent.com/67292452/92140825-9a462680-eddf-11ea-97d4-407177014da6.png)

## Workout Model - STILL THINKING THROUGH AT THIS TIME

[
{
exercise: String ,
muscleGroupOne: String ,
muscleGroupTwo: String,
muscleGroupThree: String
levelOfDifficulty: String,
workoutImageUrl: String,
workoutVideoUrl: String,
description: String
}]

### MVP User Stories

- As a user, I want to be able to click on the muscle group, bringing me to that specific muscle group page.
- As a user, I want to clearly be able to see a variety of workouts for each muscle group.
- As a user, I want to be able to add and remove workouts/ exercises
- As a user, I would like to be able to easily navigate the application.

_**MVP Stretch Goals**_

- As devs, I want to be able to create a user profile.
- As devs, I want to have a search function, to see if a specific workout is already in the library.
- As devs, I want their to be audio when making a selction
- As devs, I would like the user to be able to create a profile
- As devs, I would like the user to be able to track their progress
- As devs, we would like to have a library of over 100 exercises
- As devs, we would like to add a filter function.

**Technologies Used**

- ReactJS
- Javascript
- HTML
- CSS
- Bootstrap
- Python
- Django
- Django REST Framework

## Getting Started

- Open the application in a browser
- At the home page, you will be able to see the variety of muscle groups at the top. The specific muscle is highlighted in Red. 
- If you are interested in viewing a specific workout, for that muscle group,click the image of the specific body part. From there, you will be routed to that specific body part and a list of workouts.
- On the specific muscle page, the workouts are separated by difficulty. Click the specific workout, which will then route you to a page, describing the workout, along with a video tutorial. 
- If you would like to add a specific exercise, you can click “New Exercise” in the upper left hand corner, which will prompt you to add specific aspects that make up the workout.
- If you would like to edit an exercise, you can click on a specific exercise, which will take you to a new page. Once on the page, you would click, “Update”, prompting you to change any information you see fit(pun intended).

## Editing the Application

- If you wish to make edits to this application, you can find instructions for forking here. https://help.github.com/en/github/getting-started-with-github/fork-a-repo

## Contribution

This is a solo project presented for evaluation and is not open for outside contributions at this time. However, if you have feature suggestions to improve the usability or functionality of the application, feel free to create an Issue on this GitHub repository. https://github.com/teamscrum2000/font-end-uhhh
