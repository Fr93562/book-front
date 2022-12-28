import paths from './paths';

const template = {
    header: {
        resume: {},
        navigation: [
            { url: paths.home.path, label: paths.home.name },
            { url: paths.projects.path, label: paths.projects.name },
            { url: paths.articles.path, label: paths.articles.name },
            { url: paths.contact.path, label: paths.contact.name },
        ],
    },
    content: {},
    footer: {},
};