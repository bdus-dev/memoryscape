const variables = {
    er: {
        app: 'er',
        col: '#7a1dcf',
        title: {
            main: 'memoryscapes 01',
            sub: 'lungo la via emilia'
        }
    },

    italia: {
        app : 'italia',
        col : '#7a1dcf',
        title : {
            main: 'memoryscapes 02',
            sub: 'viaggio in italia'
        }
    }
};

const index = window.location.href.includes('ms-emilia-romagna.homemovies.it') ? 'er' : 'italia';
export const {app, col, title} = variables[index];