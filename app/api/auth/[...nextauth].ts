// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Credentials({
      // Xác thực thông qua đăng nhập thông thường
      async authorize(credentials) {
        // Thực hiện xác thực tại đây (ví dụ: truy vấn cơ sở dữ liệu)
        if (credentials.username === 'admin' && credentials.password === 'password') {
          // Nếu xác thực thành công, trả về một đối tượng user
          return { id: 1, name: 'Admin' }
        } else {
          // Nếu xác thực thất bại, trả về null
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id
      }
      return token
    }
  },
  secret: 'YOUR_SECRET_KEY', // Thay YOUR_SECRET_KEY bằng một giá trị bí mật thực tế
  session: {
    jwt: true,
  },
})
