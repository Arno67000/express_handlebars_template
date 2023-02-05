# express_handlebars_template

Template to create a web-app using express.

## Development

-   clone the repository and move to the created directory
-   run `yarn install`
-   modify or create your own .handlebars files and update router to fit your needs
-   run `yarn sass` to watch your scss files and updaye the style.css file

** Build your app **

-   use `yarn build` to build your app

** Serve your app **

-   use `yarn start` to build and serve your app
-   open your browser on localhost:[APP_PORT] || localhost:3000

## STATIC FILES

To serve static resources you'll have to put them in the `static/` directory and maybe update the `copyStatics` script in `package.json` to move them to the `build/` directory.

## LINTER/FORMATTER

Use `yarn format` and `yarn lint` to format and check your code.

## DEVELOP USING DOCKER

-   run your app in a development container using `docker run -dp 3000:3000 -w /app --mount type=bind,src="$(pwd)",target=/app node:18-alpine sh -c "yarn install && yarn start"`.

-   open your browser on localhost:3000

You can also add some tools like nodemon or parcel to make it easier to refresh your app.

## DEPLOY WITH DOCKER

-   create the app image using `docker build -t [your_own_tag] .`
-   serve the image using `docker run -dp 3000:3000 [your_own_tag]`
-   check if running with `docker ps -a`
-   open your browser on localhost:[APP_PORT] || localhost:3000
