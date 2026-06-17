import { Prisma } from "@prisma/client";
type UserWithPosts = Prisma.UserGetPayload<{ include: { posts: true } }>;
