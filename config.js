module.exports = {
  port: process.env.PORT || 8080,
  db: {
    prod: process.env.DATABASE_URL || 'mongodb+srv://binimesh7:Mummy@1997@cluster0.6y78c.mongodb.net/Cluster0?retryWrites=true&w=majority',
    test: 'mongodb+srv://binimesh7:Mummy@1997@cluster0.6y78c.mongodb.net/Cluster0?retryWrites=true&w=majority',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
