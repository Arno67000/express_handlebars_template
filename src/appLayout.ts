export const appLayout = [
    {
        name: "sass/ :",
        description:
            "store scss files exported from main.scss. They will be transferred to static/style/style.css",
        subfolders: [
            { name: "base/", description: "basic styles" },
            { name: "components/", description: "components styles" },
            { name: "layout/", description: "pages styles" },
            { name: "utils/", description: "mixins, variables and keyframes" },
        ],
    },
    {
        name: "static/ :",
        description:
            "store all files needed for the web page rendering (images, style files, etc...)",
        subfolders: [
            { name: "fonts/", description: "font files" },
            { name: "images/", description: "put images, icons, etc" },
            { name: "style/", description: "will contain style files" },
            {
                name: "[other]/",
                description:
                    "any other directories to sort files that you need to serve",
            },
        ],
    },
    {
        name: "views/ :",
        description:
            "store all files containing your html code in .handlebars files",
        subfolders: [
            {
                name: "layouts/",
                description:
                    "containing your pages, main.handlebars is the entry point",
            },
            {
                name: "files...",
                description:
                    "all your components that you want to add dynamically into layout files",
            },
        ],
    },
    {
        name: "src/* :",
        description: "any other ts files (or directories) you need",
        subfolders: [
            {
                name: "Express.ts",
                description: "Express class to build the app",
            },
            {
                name: "app.ts",
                description:
                    "entry point for application, app declaration and listener",
            },
            {
                name: "Router.ts",
                description:
                    "routing to manage application rendering using res.locals",
            },
        ],
    },
];
