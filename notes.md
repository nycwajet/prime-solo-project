## Passport intro

key take-aways:

- req.isAuthenticated() - true if a suser is logged in and false otherwise
- req.user  - gives you h=the looged in user info
- rejectUnathenticated - middleWare to protect routes from public access or people not  logged in 

## User Types or groups
Add a property to your user table
- admin proprty as a Boolean true/false
- user type property as a strint with known values like 'admin' 'group1' 'group2'