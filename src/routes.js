const mainUrl = 'https://65d3741e522627d50108eef3.mockapi.io/book';

const routes = {
  main: () => mainUrl,
  certain: (id) => `${mainUrl}/${id}`,
};

export default routes;
