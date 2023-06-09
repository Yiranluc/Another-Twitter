# Twitter-Clone
# Deliverables
## Link to the repo:

https://github.com/Yiranluc/bingfan-tian-yiran-wang-project3

## This project is deployed on Render:

You can start visit our Twitter clone project from [link](https://twitter-clone-cm03.onrender.com/)

## Collaborators:
 - Yiran Wang, Bingfan Tian

## Bonus points we attempted:
 - Early Submission
 - Password Encryption
 - Image Status Updates

## What we implement:
 - Login/Logout
 - Sign up new user with basic input check
 - Home page, view without login and post tweet with login
 - post a new tweet with image (by image url)
 - Tweet detail page, can edit the tweet if you are the author
 - Personal profile page, can edit the profile if this is your account

## Writeup: Collaborators wrote this together
### What were some challenges you faced while making this app?
For us, the biggest challenge was checking and keeping track of the login user status. We tried several different solutions on the internet including cookies, Session storage. In addition, we referenced tailwind CSS instead of traditional CSS files to increase the maintainability of our code. Some Youtube videos gave us design ideas.
[tailwind CSS](https://tailwindcss.com/)

[reference 1](https://www.youtube.com/watch?v=P4kuSxpjA48)

[reference 2](https://www.youtube.com/watch?v=g-bY6hf6GCw)

[reference 3](https://www.youtube.com/watch?v=tSwVLJZpXyQ)

### Given more time, what additional features, functional or design changes would you make?

Given more time, we would like to continue implementing the features of commenting, retweeting, replying and liking, and following other users. Currently, we just add some buttons on the front end, but these buttons do not perform any function. This is our next step! In addition, currently, our picture status posting can only be achieved by adding a picture url, but in real life, Twitter and users can post their own local pictures to the server, which is also a feature worth implementing.


### What assumptions did you make while working on this assignment?

We assume that the user understands that we upload images via URL. Due to the complexity of the database storage of local pictures, we gave up the function of implement local upload. In addition, we assume no more than one user should try to log in to our Twitter-Clone in one browser at a time. We assumed this so that we would not handle or notify users about this situation either. All users may face some unexpected errors if they do so. However, different users on different browsers or machines can log in to our app at the same time.

### How long did this assignment take to complete?

2 weeks in total.
