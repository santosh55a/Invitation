# Invite 
Invitation is sent to each of users from the list (located in `invite.component.ts`).
 Api calls are made sequentially for each email and the collected results are displayed on `invite-list.component.html` (redirect to `invite-list` page once the last email is sent). 

The error messages will be displayed individually with the information on the error content (e.g. _user1@santosh.com already exists_). 
Successful invitations will all be given in the form of their total number (e.g. _5 users successfully invited_).

## Development server

Run `npm run start:all` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
