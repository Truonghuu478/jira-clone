import NextAuth from 'next-auth';
import github from 'next-auth/providers/github';
import google from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import { UserServices } from '@/services';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        try {
          // Thực hiện xác thực đăng nhập thông qua API hoặc dịch vụ phù hợp
          const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
          });

          if (response.ok) {
            const user = await response.json();
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              randomKey: 'Hey cool',
            };
          } else {
            // Xử lý thông báo lỗi khi đăng nhập không thành công
            const errorData = await response.json();
            throw new Error(errorData.message);
          }
        } catch (error) {
          console.error(error);
          throw new Error('Failed to log in');
        }
      },
    }),
  ],
};