let baseUrl = "";
switch (process.env.NODE_ENV) {
    case 'dev':
        baseUrl = "http://localhost:8088/"  //开发环境url
        break
    case 'serve':
        baseUrl = "http://localhost:80/"   //生产环境url
        break
}
export default baseUrl;