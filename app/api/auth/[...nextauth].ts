import CredentialsProvider from 'next-auth/providers/credentials';
import { ILoginUser } from './../../../models/user';
// pages/api/auth/my-auth-provider.js
import { signInAPI } from '@/services';
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'


export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: "email", type: "email", placeholder: "jsmith" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials:any,req) {
        const userData = await signInAPI(credentials);
        if (userData) {
          return userData
        } else {
          return  null;;
        }
      }
    })
  ],
  // secret: '432dbb939e2252afa6e5d602b68de896235e8170a554e9d3b9b7dfea28095b80',
  // session: {
  //   jwt: true,
  // },
});
