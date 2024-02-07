const mainUrl = 'https://65c3724b39055e7482c0e9a0.mockapi.io/books';

const routes = {
  main: () => mainUrl,
  certain: (id) => `${mainUrl}/${id}`,
};

export default routes;
