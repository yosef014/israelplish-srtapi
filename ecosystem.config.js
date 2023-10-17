module.exports = {
  apps: [
    {
      name: 'israel_strapi',
      exec_mode: 'cluster',
      script: 'NODE_ENV=production yarn',
      args: 'start'
    }
  ]
}
